import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import MenuItem from './MenuItem';
import { warning } from '../../utils';
import './Menu.style.scss';

export interface MenuProps {
  children: React.ReactNode;
  itemHeight: 56,
  className?: string;
  style?: React.CSSProperties;
}

const Menu = ({ children, itemHeight, className = '', style }: MenuProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-menu`;
  const classNames = classnames(classPrefix, className);

  let items = null;

  if (children) {
    items = React.Children.toArray(children).filter((element: any) => {
      if (React.isValidElement<typeof MenuItem>(element) === false) {
        warning('Menu', "Only accepts Menu.Item as it's children.");
        return false;
      }

      return true;
    }).map((element: any) => {
      return React.cloneElement(element, { style: { height: itemHeight } })
    });
  }

  return (
    <div className={classNames} style={style}>
      {items}
    </div>
  );
};

Menu.Item = MenuItem;

export default Menu;
