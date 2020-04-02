import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import './Callout.style.scss';

export interface CalloutProps {
  children: React.ReactNode;
  icon: React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, icon, className = '', style }: CalloutProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-callout`;
  const classNames = classnames(classPrefix, className);

  return (
    <div className={classNames} style={style}>
      <div className={`${classPrefix}--icon`}>{React.cloneElement(icon, { ...icon.props, size: 40 })}</div>
      <div className={`${classPrefix}--content`}>{children}</div>
    </div>
  );
};
