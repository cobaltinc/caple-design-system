import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import './Navigation.style.scss';

export interface MenuItemProps {
  icon?: React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
  iconSize?: number;
  title: string;
  fontSize?: number;
  disabled?: boolean;
  active?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem = (props: MenuItemProps) => {
  return MenuItem.render(props);
};

MenuItem.render = ({ icon, iconSize = 24, fontSize = 14, title, disabled, active, onClick, className = '', style }: MenuItemProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-menu-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: active,
    [`${classPrefix}--disabled`]: disabled,
  });

  return (
    <div className={classNames} style={style} onClick={onClick}>
      {icon ? React.cloneElement(icon, { size: iconSize, className: `${classPrefix}--icon` }) : null}
      <Text size={fontSize} className={`${classPrefix}--title`}>
        {title}
      </Text>
    </div>
  );
};

export default MenuItem;
