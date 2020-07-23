import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import NavigationContext, { NavigationReducer } from './NavigationContext';
import NavigationItem from './NavigationItem';
import NavigationGroup from './NavigationGroup';
import './Navigation.style.scss';

export interface NavigationProps {
  children: React.ReactNode;
  defaultActive?: string;
  onChange?(active?: string): void;
  className?: string;
  style?: React.CSSProperties;
}

const Navigation = ({ children, defaultActive, onChange, className = '', style, ...props }: NavigationProps) => {
  const { useContext, useReducer } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-navigation`;
  const classNames = classnames(classPrefix, className);

  const [state, dispatch] = useReducer(NavigationReducer, {
    active: defaultActive,
  });

  const items = React.Children.toArray(children).filter(element => {
    if ((element as any).type !== NavigationItem && (element as any).type !== NavigationGroup) {
      console.warn(`%c Navigation\n\n`, 'font-weight: bold; font-size: 16px;', `Only accepts Navigation.Item or Navigation.Group as it's children`);
      return false;
    }

    return true;
  });

  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      <div className={classNames} style={style} {...props}>
        {items}
      </div>
    </NavigationContext.Provider>
  );
};

Navigation.Item = NavigationItem;
Navigation.Group = NavigationGroup;

export default Navigation;
