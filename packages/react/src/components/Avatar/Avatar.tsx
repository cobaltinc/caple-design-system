import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { SkyDark } from '@caple-ui/colors';
import './Avatar.style.scss';

export type AvatarShapeType = 'circle' | 'square';

export interface AvatarProps {
  size?: number;
  shape?: AvatarShapeType;
  src?: string;
  placeholder?: string;
  text?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ size = 80, shape = 'circle', src, placeholder, text, alt, className = '', style }, ref) => {
    const { useContext, useState, useRef, useEffect } = React;
    const { prefix } = useContext(ConfigContext);
    const classPrefix = `${prefix}-avatar`;
    const classNames = classnames(`${classPrefix}`, `${classPrefix}--shape-${shape}`, className);

    let children = null;

    const span = useRef<HTMLSpanElement>(null);
    const [scale, setScale] = useState(0.0);

    useEffect(() => {
      if (span.current) {
        const textWidth = span.current.offsetWidth;
        setScale(size - 8 < textWidth ? (size - 8) / textWidth : 1);
      }
    });

    const avatarStyle: { [key: string]: any } = {
      width: size,
      height: size,
    };

    if (src) {
      children = <img className={`${classPrefix}--image`} src={src} alt={alt} />;
    } else if (placeholder) {
      children = <img className={`${classPrefix}--image`} src={placeholder} alt={alt} />;
    } else if (text) {
      const transformString = `scale(${scale}) translateX(-50%)`;
      const transformStyle = {
        msTransform: transformString,
        WebkitTransform: transformString,
        transform: transformString,
      };
      const textStyle = {
        lineHeight: `${size}px`,
      };

      avatarStyle.backgroundColor = SkyDark;

      children = (
        <span className={`${classPrefix}--text`} style={{ ...transformStyle, ...textStyle }} ref={span}>
          {text}
        </span>
      );
    } else {
      children = null;
      avatarStyle.backgroundColor = SkyDark;
    }

    return (
      <span ref={ref} className={classNames} style={{ ...avatarStyle, ...style }}>
        {children}
      </span>
    );
  },
);
