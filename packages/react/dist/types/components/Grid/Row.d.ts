import React from 'react';
import './Grid.style.scss';
export interface RowProps {
    children?: React.ReactNode;
    gutter?: number | number[];
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
    align?: 'top' | 'middle' | 'bottom';
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, gutter, justify, align, className, style }: RowProps) => JSX.Element;
export default _default;
