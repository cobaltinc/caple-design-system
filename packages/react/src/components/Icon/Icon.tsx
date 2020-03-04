import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { warning } from '../../utils';
import IconFeather from './IconFeather';
import './Icon.style.scss';

export type IconType =
  'alert-circle' |
  'android' |
  'apple' |
  'arrow-left' |
  'arrow-right' |
  'caret-down' |
  'caret-sort' |
  'caret-up' |
  'check-circle' |
  'chenvron-down' |
  'chenvron-left' |
  'chenvron-right' |
  'chenvron-up' |
  'close-circle' |
  'close' |
  'edit' |
  'gear' |
  'plus' |
  'reload' |
  'star';

export interface IconProps {
  type?: IconType | string;
  component?: React.ReactNode;
  size?: number;
  rotate?: number;
  spin?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = ({ type, component, size = 16, rotate, spin = false, color = "#212B36", onClick, className = '', style }: IconProps) => {
  if (!type && !component) {
    warning('Icon', 'Empty Icon');
    return null;
  }

  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-icon`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--spin`]: spin
  });

  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined
  };
  const iconStyle = {
    fill: color,
    // stroke: color
  };

  const IconComponent = require(`./svgs/${type}.svg`).ReactComponent;

  return (
    <i className={classNames} style={{ ...style, ...shapeStyle }} onClick={onClick}>
      <IconComponent style={iconStyle} />
    </i>
  );
};

Icon.Feather = IconFeather;

export default Icon;