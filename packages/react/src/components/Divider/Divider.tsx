import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Divider.style.scss';

export interface DividerProps {
  type?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

export default ({ type = 'horizontal', className = '', style }: DividerProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-divider`;
  const classNames = classnames(`${classPrefix}`, `${classPrefix}-${type}`, className);
  return <hr className={classNames} style={style} />;
};
