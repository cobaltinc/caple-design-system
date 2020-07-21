import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { IconProps } from '../Icon/Icon';
import './Callout.style.scss';

export interface CalloutProps {
  children: React.ReactNode;
  icon: React.ReactElement<IconProps>;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, icon, className = '', style, ...props }: CalloutProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-callout`;
  const classNames = classnames(classPrefix, className);

  return (
    <div className={classNames} style={style} {...props}>
      <div className={`${classPrefix}--icon`}>{React.cloneElement(icon, { ...icon.props, size: 40 })}</div>
      <div className={`${classPrefix}--content`}>{children}</div>
    </div>
  );
};
