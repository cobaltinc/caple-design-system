import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { IconProps } from '../Icon/Icon';
import NavigationContext from './NavigationContext';
import './Navigation.style.scss';

export interface NavigationItemProps {
  icon?: React.ReactElement<IconProps>;
  title: string;
  index?: string;
  disabled?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ icon, title, index, disabled, onClick, className = '', style, ...props }: NavigationItemProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const { state, dispatch } = useContext(NavigationContext);
  const classPrefix = `${prefix}-navigation-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: state?.active === index,
    [`${classPrefix}--disabled`]: disabled,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    dispatch?.({ active: index });
    onClick?.(e);
  };

  return (
    <div className={classNames} style={style} onClick={handleClick} {...props}>
      {icon ? React.cloneElement(icon, { size: 24, className: `${classPrefix}--icon` }) : null}
      <span className={`${classPrefix}--title`}>{title}</span>
    </div>
  );
};
