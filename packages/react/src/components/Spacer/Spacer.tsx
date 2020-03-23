import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Spacer.style.scss';

export type SpacerSizeType = 'tiny' | 'normal' | 'large';
export type SpacerOrientationType = 'horizontal' | 'vertical';

export interface SpacerProps {
  type?: SpacerOrientationType;
  size?: SpacerSizeType | number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ type = 'horizontal', size = 'normal', className = '', style }: SpacerProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-spacer`;
  const classNames = classnames(classPrefix, className, `${classPrefix}--type-${type}`, {
    [`${classPrefix}--size-${size}`]: typeof size === 'string',
  });

  const sizeStyle = {
    width: type === 'vertical' && typeof size === 'number' ? size : undefined,
    height: type === 'horizontal' && typeof size === 'number' ? size : undefined,
  };

  return <div className={classNames} style={{ ...style, ...sizeStyle }} />;
};
