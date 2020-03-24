import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { ButtonSizeType } from '../Button/Button';
import './Skeleton.style.scss';

export interface SkeletonButtonProps {
  size?: ButtonSizeType;
  block?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ size = 'normal', block, className = '', style }: SkeletonButtonProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-skeleton`;
  const classNames = classnames(classPrefix, className);

  const height = size === 'tiny' ? 24 : size === 'small' ? 30 : size === 'normal' ? 36 : size === 'large' ? 44 : 50;

  const sizeStyle = {
    display: block ? 'block' : undefined,
    width: block ? undefined : '120px',
    height,
  };

  return <div className={classNames} style={{ ...sizeStyle, ...style }} />;
};
