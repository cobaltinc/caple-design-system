import React from 'react';
import './Divider.style.scss';
export interface DividerProps {
    type?: 'horizontal' | 'vertical';
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ type, className, style }: DividerProps) => JSX.Element;
export default _default;
