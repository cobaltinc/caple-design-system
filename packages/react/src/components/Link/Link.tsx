import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Link.style.scss';

export type LinkSizeType = 'small' | 'normal' | 'large';

export interface LinkProps {
  children: React.ReactNode;
  size?: LinkSizeType | number;
  href?: string;
  target?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, size = 'normal', href, target = '_blank', disabled = false, onClick, className = '', style }: LinkProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-link`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--size-${size}`]: typeof size === 'string',
    [`${classPrefix}--disabled`]: disabled,
  });
  const Tag = disabled ? 'span' : 'a';

  const fontStyle: React.CSSProperties = {
    fontSize: typeof size === 'number' ? size : undefined,
  };

  return (
    <Tag
      href={disabled ? undefined : href}
      target={disabled ? undefined : target}
      className={classNames}
      style={{ ...style, ...fontStyle }}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
