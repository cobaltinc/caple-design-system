import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Spinner.style.scss';

export interface SpinnerProps {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  dimColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, size = 24, color = '#919EAB', dimColor = 'white', className = '', style }: SpinnerProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-spinner`;
  const classNames = classnames(`${classPrefix}`, className);
  const sizeStyle = {
    width: size,
    height: size,
  };

  const spinner = (
    <i className={classNames} style={{ ...sizeStyle, ...style }}>
      <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" style={sizeStyle}>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" stroke={color} strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
            </path>
            <circle fill={color} cx="36" cy="18" r="1">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </svg>
    </i>
  );

  return children ? (
    <div className={`${classPrefix}--container`}>
      {children}
      <div className={`${classPrefix}--dim`} style={{ backgroundColor: dimColor }} />
      {spinner}
    </div>
  ) : (
    spinner
  );
};
