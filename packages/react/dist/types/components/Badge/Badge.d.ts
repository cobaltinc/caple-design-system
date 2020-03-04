import React from 'react';
import './Badge.style.scss';
export interface BadgeProps {
    children: React.ReactNode;
    count?: number;
    showZero?: boolean;
    maxCount?: number;
    dot?: boolean;
    backgroundColor?: string;
    textColor?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, count, showZero, maxCount, dot, backgroundColor, textColor, className, style }: BadgeProps) => JSX.Element;
export default _default;
