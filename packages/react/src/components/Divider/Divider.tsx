import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Divider.style.scss';

export interface DividerProps {
  type?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
  size?: number | string;
}

export default ({ type = 'horizontal', className = '', style, size = type === 'vertical' ? 8 : 24, ...props }: DividerProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-divider`;
  const classNames = classnames(
    `${classPrefix}`,
    `${classPrefix}-${type}`,
    {
      [`${classPrefix}-${type}--size-${size}`]: typeof size === 'string',
    },
    className,
  );

  const dividerStyle: { [key: string]: any } = {
    margin: typeof size === 'number' ? (type === 'vertical' ? `0 ${size}px` : `${size}px 0`) : undefined,
  };

  return <hr className={classNames} style={{ ...dividerStyle, ...style }} {...props} />;
};
