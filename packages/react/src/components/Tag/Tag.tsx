import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Text from '../Text';
import './Tag.style.scss';

export type TagSizeType = 'small' | 'normal' | 'large';

export interface TagProps {
  name: string;
  size?: TagSizeType;
  disabled?: boolean;
  closable?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onClose?(name: string): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  name,
  size = 'normal',
  disabled = false,
  closable = false,
  color,
  onClick,
  onClose,
  className = '',
  style,
  ...props
}: TagProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tag`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--size-${size}`]: typeof size === 'string',
    [`${classPrefix}--disabled`]: disabled,
  });

  return (
    <div className={classNames} style={style} onClick={onClick} {...props}>
      <Text size={size}>{name}</Text>
      {closable ? (
        <Icon type="close" size={12} color={color ? color : '#5c6ac4'} onClick={() => onClose?.(name)} className={`${classPrefix}--delete`} />
      ) : null}
    </div>
  );
};
