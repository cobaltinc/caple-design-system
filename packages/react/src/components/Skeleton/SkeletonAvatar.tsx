import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { AvatarShapeType } from '../Avatar/Avatar';
import './Skeleton.style.scss';

export interface SkeletonAvatarProps {
  size?: number;
  shape?: AvatarShapeType;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ size = 80, shape = 'circle', className = '', style, ...props }: SkeletonAvatarProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-skeleton`;
  const classNames = classnames(classPrefix, className);

  const sizeStyle = {
    width: size,
    height: size,
    borderRadius: shape === 'circle' ? '50%' : undefined,
  };

  return <div className={classNames} style={{ ...style, ...sizeStyle }} {...props} />;
};
