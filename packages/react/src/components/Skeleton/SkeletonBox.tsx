import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Skeleton.style.scss';

export interface SkeletonBoxProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ width, height, className = '', style, ...props }: SkeletonBoxProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-skeleton`;
  const classNames = classnames(classPrefix, className);

  const sizeStyle = {
    width,
    height,
  };

  return <div className={classNames} style={{ ...style, ...sizeStyle }} {...props} />;
};
