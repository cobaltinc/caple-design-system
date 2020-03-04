import React from 'react';
import './Grid.style.scss';
export interface ColProps {
    children?: React.ReactNode;
    span?: number;
    offset?: number;
    order?: number;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, span, offset, order, className, style }: ColProps) => JSX.Element;
export default _default;
