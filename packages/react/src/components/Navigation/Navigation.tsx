import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import MenuItem, { MenuItemProps } from './NavigationItem';
import { convertReactNodeTo } from '../../utils';
import './Navigation.style.scss';

export interface MenuProps {
  children: React.ReactNode;
  defaultActive?: string;
  itemHeight?: number;
  onMenuChange?(active: string): void;
  className?: string;
  style?: React.CSSProperties;
}

const Menu = ({ children, defaultActive, itemHeight = 56, onMenuChange, className = '', style }: MenuProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-menu`;
  const classNames = classnames(classPrefix, className);

  const [active, setActive] = useState(defaultActive);

  const items = convertReactNodeTo<MenuItemProps>('Menu', 'Menu.Item', children)
    .map((element: any) => {
      const menuItem = element as React.ReactElement<MenuItemProps>;
      return React.cloneElement(element, {
        active: menuItem.props.title === active,
        style: { height: itemHeight, ...menuItem.props.style },
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
          menuItem.props.onClick?.(e);
          setActive(menuItem.props.title);
          onMenuChange?.(menuItem.props.title);
        },
      });
    })
    .map((element: any) => {
      const menuItem = element as React.ReactElement<MenuItemProps>;
      return <div key={menuItem.props.title}>{MenuItem.render(menuItem.props)}</div>;
    });

  return (
    <div className={classNames} style={style}>
      {items}
    </div>
  );
};

Menu.Item = MenuItem;

export default Menu;
