import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Table.style.scss';

export interface TableCellProps {
  children?: React.ReactNode;
  type?: 'td' | 'th';
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, type = 'td', colSpan, rowSpan, className = '', style }: TableCellProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-table-cell`;
  const classNames = classnames(classPrefix, className);

  const Tag = type;

  return (
    <Tag colSpan={colSpan} rowSpan={rowSpan} className={classNames} style={style}>
      {children}
    </Tag>
  );
};
