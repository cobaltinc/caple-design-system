import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Menu.style.scss';

export interface MenuDividerProps {
  className?: string;
  style?: React.CSSProperties;
}

export default ({ className = '', style }: MenuDividerProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-menu-divider`;
  const classNames = classnames(classPrefix, className);

  return <li className={classNames} style={style} />;
};
