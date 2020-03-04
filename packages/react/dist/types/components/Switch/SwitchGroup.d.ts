import React from 'react';
import './Switch.style.scss';
interface SwitchGroupProps {
    children: React.ReactNode;
    multiple?: boolean;
    onChange?(values: string[]): void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, multiple, onChange, className, style }: SwitchGroupProps) => JSX.Element;
export default _default;
