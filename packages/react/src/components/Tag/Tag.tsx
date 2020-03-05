import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Tag.style.scss';

export type TagSizeType = 'small' | 'normal' | 'large';

export interface TagProps {
  name: string;
  size?: TagSizeType;
  disabled?: boolean;
  deletable?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onDelete?(): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ name, size = 'normal', disabled = false, deletable = false, onClick, className = '', style }: TagProps) => {
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
      {deletable ? <span className={`${classPrefix}--delete`}>X</span> : null}
    </div>
  );
};
