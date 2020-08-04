import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { ExpandTransition } from '../_transition';
import Icon, { IconProps } from '../Icon/Icon';
import NavigationContext from './NavigationContext';
import NavigationItem, { NavigationItemProps } from './NavigationItem';
import './Navigation.style.scss';

export interface NavigationGroupProps {
  children?: React.ReactNode;
  icon?: React.ReactElement<IconProps>;
  title: string;
  defaultExpand?: boolean;
  disabled?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, icon, title, disabled, defaultExpand, onClick, className = '', style, ...props }: NavigationGroupProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const { state } = useContext(NavigationContext);
  const classPrefix = `${prefix}-navigation-group`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled,
  });

  const items = React.Children.toArray(children).filter(element => {
    if ((element as any).type !== NavigationItem) {
      console.warn(`%c Navigation\n\n`, 'font-weight: bold; font-size: 16px;', `Only accepts Navigation.Item or Navigation.Group as it's children`);
      return false;
    }

    return true;
  });

  const hasActiveItem =
    items.filter(element => {
      const item = element as React.ReactElement<NavigationItemProps>;
      return item.props.index === state?.active;
    }).length > 0;

  const [expand, setExpand] = useState(defaultExpand ?? hasActiveItem);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    setExpand(!expand);
    onClick?.(e);
  };

  return (
    <>
      <div className={classnames(classNames, { [`${classPrefix}--active`]: hasActiveItem })} style={style} onClick={handleClick} {...props}>
        {icon ? React.cloneElement(icon, { size: 24, className: `${classPrefix}--icon` }) : null}
        <span className={`${classPrefix}--title`}>{title}</span>
        <Icon type="chevron-down" size={12} className={classnames(`${classPrefix}--expand`, { [`${classPrefix}--expand-open`]: expand })} />
      </div>

      <ExpandTransition open={expand}>
        <div className={`${classPrefix}--children`}>{items}</div>
      </ExpandTransition>
    </>
  );
};
