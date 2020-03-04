import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { convertReactNodeTo } from '../../utils';
import './Table.style.scss';
import TableHead, { TableHeadProps } from './TableHead';
import TableBody, { TableBodyProps } from './TableBody';
import TableFoot, { TableFootProps } from './TableFoot';
import TableRow from './TableRow';
import TableCell from './TableCell';

export interface TableProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type ITable<P> = React.FunctionComponent<P> & {
  Head: typeof TableHead;
  Body: typeof TableBody;
  Foot: typeof TableFoot;
  Row: typeof TableRow;
  Cell: typeof TableCell;
}

const Table: ITable<TableProps> = ({ children, className = '', style }: TableProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-table`;
  const classNames = classnames(classPrefix, className);

  const cells = convertReactNodeTo<TableHeadProps | TableBodyProps | TableFootProps>('Table', 'Table.Head, Table.Body or Table.Foot', children);
  
  return (
    <table className={classNames}>
      {cells}
    </table>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;