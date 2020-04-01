import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import './Navigation.style.scss';

export interface NavigationItemProps {
  children?: React.ReactNode;
  icon?: React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
  title: string;
  key: string;
  disabled?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
  className?: string;
  style?: React.CSSProperties;
}

export interface NavigationItemRenderProps {
  active: boolean;
}

const NavigationItem = (_: NavigationItemProps) => {
  return null;
};

NavigationItem.render = ({
  children,
  icon,
  title,
  disabled,
  active,
  onClick,
  className = '',
  style,
}: NavigationItemProps & NavigationItemRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-navigation-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: active,
    [`${classPrefix}--disabled`]: disabled,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <>
      <div className={classNames} style={style} onClick={handleClick}>
        {icon ? React.cloneElement(icon, { size: 24, className: `${classPrefix}--icon` }) : null}
        <Text size="small" className={`${classPrefix}--title`}>
          {title}
        </Text>
      </div>

      {children}
    </>
  );
};

export default NavigationItem;
