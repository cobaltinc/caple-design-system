import React from 'react';
import classnames from 'classnames';
import RowContext from './RowContext';
import ConfigContext from '../_config/ConfigContext';
import './Grid.style.scss';

export interface RowProps {
  children?: React.ReactNode;
  gutter?: number | number[];
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, gutter = 0, justify = 'start', align = 'top', className = '', style }: RowProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-row`;
  const classNames = classnames(classPrefix, className, `${classPrefix}--justify-${justify}`, `${classPrefix}--align-${align}`);

  let gutterStyle = null;
  if (Array.isArray(gutter)) {
    const horizontalGutter = gutter[0];
    const verticalGutter = gutter[1];
    gutterStyle = {
      marginTop: `-${verticalGutter / 2}px`,
      marginBottom: `${verticalGutter / 2}px`,
      marginLeft: `-${horizontalGutter / 2}px`,
      marginRight: `-${horizontalGutter / 2}px`,
    };
  } else {
    gutterStyle = {
      marginLeft: `-${gutter / 2}px`,
      marginRight: `-${gutter / 2}px`,
    };
  }

  return (
    <RowContext.Provider value={{ gutter }}>
      <div className={classNames} style={{ ...style, ...gutterStyle }}>
        {children}
      </div>
    </RowContext.Provider>
  );
};
