import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import NavigationItem, { NavigationItemProps } from './NavigationItem';
import NavigationGroup, { NavigationGroupProps } from './NavigationGroup';
import { convertReactNodeTo } from '../../utils';
import './Navigation.style.scss';

export interface NavigationProps {
  children: React.ReactNode;
  defaultActive?: string;
  onChange?(active?: string): void;
  className?: string;
  style?: React.CSSProperties;
}

const Navigation = ({ children, defaultActive, onChange, className = '', style, ...props }: NavigationProps) => {
  const { useContext, useState, useEffect } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-navigation`;
  const classNames = classnames(classPrefix, className);

  const [active, setActive] = useState(defaultActive);
  useEffect(() => {
    setActive(defaultActive);
  }, [defaultActive]);

  const items = React.Children.toArray(children)
    .filter(element => {
      if (React.isValidElement<NavigationItemProps>(element) === false) {
        console.warn(`%c Navigation\n\n`, 'font-weight: bold; font-size: 16px;', `Only accepts Navigation.Item or Navigation.Group as it's children`);
        return false;
      }

      return true;
    })
    .map(element => {
      if (React.isValidElement<NavigationItemProps>(element)) {
        const item = element as React.ReactElement<NavigationItemProps>;
        const itemKey = item.key?.toString().replace(/[.$]/g, '');
        return React.cloneElement<NavigationItemProps>(element, {
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            item.props.onClick?.(e);
            setActive(itemKey);
            onChange?.(itemKey);
          },
        });
      } else {
        const group = element as React.ReactElement<NavigationGroupProps>;
        return group;
      }
    })
    .map(item => {
      const isActive = item.key?.toString().replace(/[.$]/g, '') === active;
      // if (React.isValidElement<NavigationItemProps>(item)) {
      // convertReactNodeTo<NavigationSubItemProps>('Navigation.Item', 'Navigation.SubItem', item.props.children).forEach(subItemElement => {
      //   const subItem = subItemElement as React.ReactElement<NavigationSubItemProps>;
      //   const subItemKey = subItem.key?.toString().replace(/[.$]/g, '');
      //   if (subItemKey === active) isActive = true;
      // });
      return <React.Fragment key={item.key!!}>{NavigationItem.render({ active: isActive, ...item.props })}</React.Fragment>;
      // } else if (React.isValidElement<NavigationGroupProps>(item)) {
      //   return <React.Fragment key={item.key!!}>{NavigationGroup.render({ active: isActive, ...item.props })}</React.Fragment>;
      // }
    });

  // const items = convertReactNodeTo<NavigationItemProps>('Navigation', 'Navigation.Item', children)
  //   .map((itemElement: any) => {
  //     const item = itemElement as React.ReactElement<NavigationItemProps>;
  //     const itemKey = item.key?.toString().replace(/[.$]/g, '');

  //     return React.cloneElement<NavigationItemProps>(itemElement, {
  //       children: convertReactNodeTo<NavigationSubItemProps>('Navigation.Item', 'Navigation.SubItem', item.props.children)
  //         .map((subItemElement: any) => {
  //           const subItem = subItemElement as React.ReactElement<NavigationSubItemProps>;
  //           const subItemKey = subItem.key!!.toString().replace(/[.$]/g, '');

  //           return React.cloneElement<NavigationSubItemProps>(subItemElement, {
  //             onClick: (e: React.MouseEvent<HTMLDivElement>) => {
  //               subItem.props.onClick?.(e);
  //               setActive(subItemKey);
  //               onChange?.(subItemKey);
  //             },
  //           });
  //         })
  //         .map(subItem => {
  //           const subItemKey = subItem.key!!.toString().replace(/[.$]/g, '');
  //           return (
  //             <React.Fragment key={subItem.key!!}>{NavigationSubItem.render({ active: subItemKey === active, ...subItem.props })}</React.Fragment>
  //           );
  //         }),
  // onClick: (e: React.MouseEvent<HTMLDivElement>) => {
  //   item.props.onClick?.(e);
  //   setActive(itemKey);
  //   onChange?.(itemKey);
  // },
  //     });
  //   })
  // .map(item => {
  //   let isActive = item.key?.toString().replace(/[.$]/g, '') === active;
  //   convertReactNodeTo<NavigationSubItemProps>('Navigation.Item', 'Navigation.SubItem', item.props.children).forEach(subItemElement => {
  //     const subItem = subItemElement as React.ReactElement<NavigationSubItemProps>;
  //     const subItemKey = subItem.key?.toString().replace(/[.$]/g, '');
  //     if (subItemKey === active) isActive = true;
  //   });
  //   return <React.Fragment key={item.key!!}>{NavigationItem.render({ active: isActive, ...item.props })}</React.Fragment>;
  // });

  return (
    <div className={classNames} style={style} {...props}>
      {items}
    </div>
  );
};

Navigation.Item = NavigationItem;
Navigation.Group = NavigationGroup;

export default Navigation;
