import React from 'react';
import classnames from 'classnames';
import RowContext from './RowContext';
import ConfigContext from '../_config/ConfigContext';
import './Grid.style.scss';

export type ColSizeType = {
  span?: number;
  offset?: number;
  flex?: string | number | 'auto';
  order?: number;
};

export interface ColProps {
  children?: React.ReactNode;
  span?: number;
  offset?: number;
  auto?: boolean;
  flex?: string | number | 'auto';
  order?: number;
  xs?: number | ColSizeType;
  sm?: number | ColSizeType;
  md?: number | ColSizeType;
  lg?: number | ColSizeType;
  xl?: number | ColSizeType;
  xxl?: number | ColSizeType;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, span, offset, auto, flex, order, className = '', style, ...props }: ColProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-col`;
  let classNames = classnames(classPrefix, className, {
    [`${classPrefix}--col-${span}`]: span,
    [`${classPrefix}--offset-${offset}`]: offset,
    [`${classPrefix}--order-${order}`]: order,
  });

  ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
    const sizeValue = (props as any)[size];
    if (typeof sizeValue === 'number') {
      classNames = classnames(classNames, `${classPrefix}--${size}-col-${sizeValue}`);
    } else if (typeof sizeValue === 'object') {
      console.log(sizeValue);
      classNames = classnames(classNames, {
        [`${classPrefix}--${size}-col-${sizeValue.span}`]: sizeValue.span,
        [`${classPrefix}--${size}-col-offset-${sizeValue.offset}`]: sizeValue.offset,
        [`${classPrefix}--${size}-order-${sizeValue.order}`]: sizeValue.order,
      });
    }
  });

  return (
    <RowContext.Consumer>
      {({ gutter }) => {
        let gutterStyle = {};
        let flexStyle = {};
        if (gutter) {
          if (Array.isArray(gutter)) {
            const horizontalGutter = gutter[0];
            const verticalGutter = gutter[1];
            gutterStyle = {
              paddingTop: `${verticalGutter / 2}px`,
              paddingBottom: `${verticalGutter / 2}px`,
              paddingLeft: `${horizontalGutter / 2}px`,
              paddingRight: `${horizontalGutter / 2}px`,
            };
          } else {
            gutterStyle = {
              paddingLeft: `${gutter / 2}px`,
              paddingRight: `${gutter / 2}px`,
            };
          }
        }

        if (!span && !offset) {
          if (typeof flex === 'string') {
            flexStyle = {
              flex: /^\d+(\.\d+)?(px|em|rem|%)$/.test(flex) ? `0 0 ${flex}` : flex,
            };
          } else if (typeof flex === 'number') {
            flexStyle = {
              flex: `${flex} ${flex} 0px`,
            };
          } else {
            flexStyle = {
              flex: auto ? '1 1 0px' : flex,
            };
          }
        }

        return (
          <div className={classNames} style={{ ...style, ...gutterStyle, ...flexStyle }} {...props}>
            {children}
          </div>
        );
      }}
    </RowContext.Consumer>
  );
};
