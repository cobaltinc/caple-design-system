import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { warning, kebabToPascal } from '../../utils';
import * as Icons from '@caple-ui/icons-react';
import IconFeather from './IconFeather';
import './Icon.style.scss';

export interface IconProps {
  type?: string;
  component?: React.ReactElement;
  size?: number;
  rotate?: number;
  spin?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = ({ type, component, size = 16, rotate, spin = false, color = '#212B36', onClick, className = '', style }: IconProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-icon`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--spin`]: spin,
  });

  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };

  let IconComponent = null;
  if (type && kebabToPascal(type) in Icons) {
    IconComponent = (Icons as any)[kebabToPascal(type)];
    IconComponent = <IconComponent size={size} color={color} />;
  } else if (component) {
    const iconStyle = {
      fill: color,
      width: size,
      height: size,
    };
    IconComponent = React.cloneElement(component, { style: iconStyle });
  } else {
    warning('Icon', 'Empty Icon');
    return null;
  }

  return (
    <i className={classNames} style={{ ...style, ...shapeStyle }} onClick={onClick}>
      {IconComponent}
    </i>
  );
};

Icon.Feather = IconFeather;

export default Icon;
