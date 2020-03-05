import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Avatar.style.scss';

export interface AvatarProps {
  size?: number;
  shape?: 'circle' | 'square';
  src?: string;
  text?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ size = 80, shape = 'circle', src, text, alt, className = '', style }: AvatarProps) => {
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

  if (src) {
    children = <img className={`${classPrefix}--image`} src={src} alt={alt} />;
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

    children = (
      <span className={`${classPrefix}--text`} style={{ ...transformStyle, ...textStyle }} ref={span}>
        {text}
      </span>
    );
  } else {
    children = null;
  }

  const sizeStyle = {
    width: size,
    height: size,
  };
  return (
    <span className={classNames} style={{ ...sizeStyle, ...style }}>
      {children}
    </span>
  );
};
