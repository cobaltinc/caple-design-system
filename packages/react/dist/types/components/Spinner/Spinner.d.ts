import React from 'react';
import './Spinner.style.scss';
export interface SpinnerProps {
    children?: React.ReactNode;
    size?: number;
    color?: string;
    dimColor?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, size, color, dimColor, className, style }: SpinnerProps) => JSX.Element;
export default _default;
