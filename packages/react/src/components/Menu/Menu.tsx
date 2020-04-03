import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';
import './Menu.style.scss';

export interface MenuProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Menu = ({ children, className = '', style }: MenuProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-menu`;
  const classNames = classnames(classPrefix, className);

  return (
    <ul className={classNames} style={style}>
      {children}
    </ul>
  );
};

Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

export default Menu;
