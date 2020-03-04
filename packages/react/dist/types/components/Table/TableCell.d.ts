import React from 'react';
import './Table.style.scss';
export interface TableCellProps {
    children: React.ReactNode;
    type: 'td' | 'th';
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, type, className, style }: TableCellProps) => JSX.Element;
export default _default;
