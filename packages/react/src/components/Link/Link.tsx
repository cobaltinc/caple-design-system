import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Link.style.scss';
import Spinner from '../Spinner';
import { Red } from '@caple-ui/colors';

export type LinkSizeType = 'small' | 'normal' | 'large' | 'tiny' | 'tiniest';

export interface LinkProps {
  children: React.ReactNode;
  size?: LinkSizeType | number;
  href?: string;
  target?: string;
  underline?: boolean;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, size = 'normal', href, target = '_blank', underline, danger, disabled, loading, onClick, className = '', style, ...props }, ref) => {
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
      textDecoration: underline ? 'underline' : undefined,
      color: danger ? Red : undefined,
    };

    const loadingSize = size === 'large' ? 16 : size === 'normal' ? 14 : 12;

    const handleClick = (e: React.MouseEvent) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    return (
      <span className={`${classPrefix}--wrapper`} {...props}>
        <Tag
          ref={ref}
          href={disabled ? undefined : href}
          target={disabled ? undefined : target}
          className={classNames}
          style={{ ...style, ...fontStyle, visibility: loading ? 'hidden' : undefined }}
          onClick={handleClick}
        >
          {children}
        </Tag>
        {loading ? <Spinner size={loadingSize} className={`${classPrefix}--loading`} /> : null}
      </span>
    );
  },
);
