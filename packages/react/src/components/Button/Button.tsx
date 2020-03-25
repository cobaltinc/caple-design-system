import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Spinner from '../Spinner';
import './Button.style.scss';

export type ButtonType = 'basic' | 'core' | 'error';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';
export type ButtonSizeType = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge';

export interface ButtonProps {
  children: React.ReactNode;
  htmlType?: ButtonHtmlType;
  type?: ButtonType;
  size?: ButtonSizeType;
  block?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, htmlType, type = 'basic', size = 'normal', block, ghost, disabled, loading, onClick, className = '', style }, ref) => {
    const { useContext } = React;
    const { prefix } = useContext(ConfigContext);
    const classPrefix = `${prefix}-button`;
    const classNames = classnames(classPrefix, `${classPrefix}--type-${type}`, `${classPrefix}--size-${size}`, className, {
      [`${classPrefix}--ghost`]: ghost,
      [`${classPrefix}--block`]: block,
    });

    const spinnerColor = type === 'basic' ? '#637381' : 'white';
    const spinnerSize = size === 'tiny' ? 13 : size === 'small' ? 14 : size === 'normal' ? 18 : size === 'large' ? 20 : 24;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    return (
      <button ref={ref} type={htmlType} className={classNames} style={style} disabled={disabled} onClick={handleClick}>
        {loading ? <Spinner color={spinnerColor} size={spinnerSize} /> : null}
        <div style={{ opacity: loading ? 0 : 1, height: loading ? 0 : 'auto' }}>{children}</div>
      </button>
    );
  },
);
