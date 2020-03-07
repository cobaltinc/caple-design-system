import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { TableCellProps } from './TableCell';
import { convertReactNodeTo } from '../../utils';
import './Table.style.scss';

export interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, className = '', style }: TableRowProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-table-row`;
  const classNames = classnames(classPrefix, className);

  const cells = convertReactNodeTo<TableCellProps>('Table.Head', 'Table.Cell', children).map((element: any) => {
    return React.cloneElement(element, {
      type: 'td',
    });
  });

  return <tr className={classNames}>{cells}</tr>;
};
