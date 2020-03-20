import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { InputSizeType } from '../Input/Input';
import './Skeleton.style.scss';

export interface SkeletonInputProps {
  size?: InputSizeType;
  block?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ size = 'normal', block, className = '', style }: SkeletonInputProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-skeleton`;
  const classNames = classnames(classPrefix, className);

  const height = size === 'mini' ? 24 : size === 'small' ? 30 : size === 'normal' ? 36 : size === 'large' ? 44 : 50;

  const sizeStyle = {
    display: block ? 'block' : undefined,
    width: block ? undefined : '100%',
    height,
  };

  return <div className={classNames} style={{ ...sizeStyle, ...style }} />;
};
