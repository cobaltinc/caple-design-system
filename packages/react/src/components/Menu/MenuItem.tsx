import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Menu.style.scss';
import { IconProps } from '../Icon/Icon';
import IconFeather, { IconFeatherProps } from '../Icon/IconFeather';
import { BadgeProps } from '../Badge/Badge';
import Text from '../Text';

export interface MenuItemProps {
  title: string;
  icon?: React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
  badge?: React.ReactElement<BadgeProps>;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ title, icon, badge, disabled, onClick, className = '', style }: MenuItemProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-menu-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled,
  });

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <li className={classNames} style={style} onClick={handleClick}>
      {icon
        ? React.cloneElement(icon, {
            ...icon.props,
            size: 20,
            className: icon?.type === IconFeather ? `${classPrefix}--icon-feather` : `${classPrefix}--icon`,
          })
        : null}
      <Text>{title}</Text>
      <div className={`${classPrefix}--badge`}>{badge ? React.cloneElement(badge, { ...badge.props }) : null}</div>
    </li>
  );
};
