import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Menu.style.scss';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';

export interface MenuItemProps {
  icon?: React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
  title: string;
  strong?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ icon, title, strong, disabled, active, onClick, className = '', style }: MenuItemProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-menu-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: active,
    [`${classPrefix}--disabled`]: disabled,
  });

  const titleStyle: React.CSSProperties = {
    fontWeight: strong ? 'bold' : undefined
  };

  return (
    <div className={classNames} style={style} onClick={onClick}>
      {icon ? React.cloneElement(icon, { size: 20, className: `${classPrefix}--icon`, style: titleStyle }) : null}
      <span className={`${classPrefix}--title`}>{title}</span>
    </div>
  );
};
