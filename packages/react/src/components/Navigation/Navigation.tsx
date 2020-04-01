import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import NavigationItem, { NavigationItemProps } from './NavigationItem';
import NavigationSubItem, { NavigationSubItemProps } from './NavigationSubItem';
import { convertReactNodeTo } from '../../utils';
import './Navigation.style.scss';

export interface NavigationProps {
  children: React.ReactNode;
  defaultActive?: string;
  onChange?(active: string): void;
  className?: string;
  style?: React.CSSProperties;
}

const Navigation = ({ children, defaultActive, onChange, className = '', style }: NavigationProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-navigation`;
  const classNames = classnames(classPrefix, className);

  const [active, setActive] = useState(defaultActive);

  const items = convertReactNodeTo<NavigationItemProps>('Navigation', 'Navigation.Item', children)
    .map((itemElement: any) => {
      const item = itemElement as React.ReactElement<NavigationItemProps>;
      const itemKey = item.key?.toString() || item.props.title;

      return React.cloneElement<NavigationItemProps>(itemElement, {
        children: convertReactNodeTo<NavigationSubItemProps>('Navigation.Item', 'Navigation.SubItem', item.props.children)
          .map((subItemElement: any) => {
            const subItem = subItemElement as React.ReactElement<NavigationSubItemProps>;
            const subItemKey = subItem.key?.toString() || subItem.props.title;

            return React.cloneElement<NavigationSubItemProps>(subItemElement, {
              onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                subItem.props.onClick?.(e);
                setActive(subItemKey);
                onChange?.(subItemKey);
              },
            });
          })
          .map(subItem => {
            return (
              <React.Fragment key={subItem.key!!}>
                {NavigationSubItem.render({ active: subItem.key!!.toString().includes(active!!), ...subItem.props })}
              </React.Fragment>
            );
          }),
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
          item.props.onClick?.(e);
          setActive(itemKey);
          onChange?.(itemKey);
        },
      });
    })
    .map(item => {
      return (
        <React.Fragment key={item.key!!}>{NavigationItem.render({ active: item.key!!.toString().includes(active!!), ...item.props })}</React.Fragment>
      );
    });

  return (
    <div className={classNames} style={style}>
      {items}
    </div>
  );
};

Navigation.Item = NavigationItem;
Navigation.SubItem = NavigationSubItem;

export default Navigation;
