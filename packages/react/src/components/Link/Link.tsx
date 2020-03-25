import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Link.style.scss';
import Spinner from '../Spinner';

export type LinkSizeType = 'small' | 'normal' | 'large';

export interface LinkProps {
  children: React.ReactNode;
  size?: LinkSizeType | number;
  href?: string;
  target?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, size = 'normal', href, target = '_blank', disabled, loading, onClick, className = '', style }, ref) => {
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

    const loadingSize = size === 'small' ? 12 : size === 'normal' ? 14 : 16;

    const handleClick = (e: React.MouseEvent) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    return (
      <span className={`${classPrefix}--wrapper`}>
        <Tag
          ref={ref}
          href={disabled ? undefined : href}
          target={disabled ? undefined : target}
          className={classNames}
          style={{ ...style, ...fontStyle, opacity: loading ? '0.6' : undefined }}
          onClick={handleClick}
        >
          {children}
        </Tag>
        {loading ? <Spinner size={loadingSize} style={{ marginLeft: 8 }} /> : null}
      </span>
    );
  },
);
