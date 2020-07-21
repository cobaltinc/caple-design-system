import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { warning, kebabToPascal } from '../../utils';
import * as Icons from '@caple-ui/icons-react';
import { Ink } from '@caple-ui/colors';
import './Icon.style.scss';

export type IconSize = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge';

export interface IconProps {
  type?: string;
  component?: React.ReactElement;
  size?: number | IconSize;
  rotate?: number;
  spin?: boolean;
  color?: string;
  onClick?(): void;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLSpanElement, IconProps>(
  ({ type, component, size = 14, rotate, spin = false, color = Ink, onClick, className = '', style, ...props }, ref) => {
    const { useContext } = React;
    const { prefix } = useContext(ConfigContext);
    const classPrefix = `${prefix}-icon`;
    const classNames = classnames(classPrefix, className, {
      [`${classPrefix}--spin`]: spin,
      [`${classPrefix}--size-${size}`]: typeof size === 'string',
    });

    const shapeStyle = {
      width: typeof size === 'number' ? size : undefined,
      height: typeof size === 'number' ? size : undefined,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
    };

    let IconComponent = null;
    if (type && kebabToPascal(type) in Icons) {
      IconComponent = (Icons as any)[kebabToPascal(type)];
      IconComponent = <IconComponent color={color} />;
    } else if (component) {
      const iconStyle = {
        fill: color,
        width: typeof size === 'number' ? size : undefined,
        height: typeof size === 'number' ? size : undefined,
      };
      IconComponent = React.cloneElement(component, { style: iconStyle });
    } else {
      warning('Icon', 'Empty Icon');
      return null;
    }

    return (
      <i ref={ref} className={classNames} style={{ ...style, ...shapeStyle }} {...props}>
        {IconComponent}
      </i>
    );
  },
);
