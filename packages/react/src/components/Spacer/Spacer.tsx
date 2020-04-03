import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Spacer.style.scss';

export type SpacerSizeType = 'tiny' | 'small' | 'normal';
export type SpacerOrientationType = 'horizontal' | 'vertical';

export interface SpacerProps {
  children?: React.ReactNode;
  type?: SpacerOrientationType;
  size?: SpacerSizeType | number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, type = 'horizontal', size = 'normal', className = '', style }: SpacerProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-spacer`;
  const classNames = classnames(classPrefix, className, `${classPrefix}--type-${type}`);

  const nodes = React.Children.toArray(children)
    .filter(element => React.isValidElement(element))
    .map((element, index, elements) => {
      const reactElement = element as React.ReactElement;
      const margin = typeof size === 'string' ? (size === 'tiny' ? 8 : size === 'small' ? 16 : 24) : size;
      return React.cloneElement(reactElement, {
        ...reactElement.props,
        style: {
          ...(reactElement.props as any).style,
          marginRight: type === 'horizontal' && index !== elements.length - 1 ? margin : undefined,
          marginBottom: type === 'vertical' && index !== elements.length - 1 ? margin : undefined,
        },
      });
    });

  return children ? (
    <div className={classNames} style={style}>
      {nodes}
    </div>
  ) : (
    <div
      className={classnames(classNames, {
        [`${classPrefix}--size-${size}`]: typeof size === 'string',
      })}
      style={{
        ...style,
        width: type === 'horizontal' && typeof size === 'number' ? size : undefined,
        height: type === 'vertical' && typeof size === 'number' ? size : undefined,
      }}
    />
  );
};
