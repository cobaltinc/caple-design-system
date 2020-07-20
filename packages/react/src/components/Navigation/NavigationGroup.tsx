import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
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

export interface NavigationGroupRenderProps {
  active: boolean;
}

const NavigationGroup = (_: NavigationGroupProps) => {
  return null;
};

NavigationGroup.render = ({
  children,
  icon,
  title,
  disabled,
  active,
  onClick,
  className = '',
  style,
  ...props
}: NavigationGroupProps & NavigationGroupRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-navigation-group`;
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
      <div className={classNames} style={style} onClick={handleClick} {...props}>
        {icon ? React.cloneElement(icon, { size: 24, className: `${classPrefix}--icon` }) : null}
        <Text size="small" className={`${classPrefix}--title`}>
          {title}
        </Text>
      </div>

      {children}
    </>
  );
};

NavigationGroup.renderInGroup = ({
  children,
  icon,
  title,
  disabled,
  active,
  onClick,
  className = '',
  style,
  ...props
}: NavigationGroupProps & NavigationGroupRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-navigation-group`;
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
      <div className={classNames} style={style} onClick={handleClick} {...props}>
        {icon ? React.cloneElement(icon, { size: 24, className: `${classPrefix}--icon` }) : null}
        <Text size="small" className={`${classPrefix}--title`}>
          {title}
        </Text>
      </div>

      {children}
    </>
  );
};

export default NavigationGroup;
