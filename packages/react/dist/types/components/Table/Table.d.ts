import React from 'react';
import './Table.style.scss';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFoot from './TableFoot';
import TableRow from './TableRow';
import TableCell from './TableCell';
export interface TableProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare type ITable<P> = React.FunctionComponent<P> & {
    Head: typeof TableHead;
    Body: typeof TableBody;
    Foot: typeof TableFoot;
    Row: typeof TableRow;
    Cell: typeof TableCell;
};
declare const Table: ITable<TableProps>;
export default Table;
