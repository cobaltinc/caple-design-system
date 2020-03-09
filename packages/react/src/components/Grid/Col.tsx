import React from 'react';
import classnames from 'classnames';
import RowContext from './RowContext';
import ConfigContext from '../_config/ConfigContext';
import './Grid.style.scss';

export interface ColProps {
  children?: React.ReactNode;
  span?: number;
  offset?: number;
  order?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, span = 0, offset = 0, order, className = '', style }: ColProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-col`;
  const classNames = classnames(classPrefix, className, `${classPrefix}--col-${span}`, `${classPrefix}--offset-${offset}`);

  return (
    <RowContext.Consumer>
      {({ gutter }) => {
        let gutterStyle = {};
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

        return (
          <div className={classNames} style={{ ...style, ...gutterStyle }}>
            {children}
          </div>
        );
      }}
    </RowContext.Consumer>
  );
};
