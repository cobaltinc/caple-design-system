import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import './Tag.style.scss';

export type TagSizeType = 'small' | 'normal' | 'large';

export interface TagProps {
  name: string;
  size?: TagSizeType;
  disabled?: boolean;
  deletable?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onDelete?(): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ name, size = 'normal', disabled = false, deletable = false, color, onClick, className = '', style }: TagProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tag`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--size-${size}`]: typeof size === 'string',
    [`${classPrefix}--disabled`]: disabled,
  });

  return (
    <div className={classNames} style={style} onClick={onClick}>
      {name}
      {deletable ? <span className={`${classPrefix}--delete`}><Icon type="close" size={12} color={color ? color : '#5c6ac4'} /></span> : null}
    </div>
  );
};
