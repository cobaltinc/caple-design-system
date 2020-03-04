import React from 'react';
import './Header.style.scss';
export interface HeaderProps {
    children: React.ReactNode;
    level: number;
    strong?: boolean;
    underline?: boolean;
    delete?: boolean;
    color?: string;
    editable?: boolean;
    placeholder?: string;
    onChange?: React.KeyboardEventHandler;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, level, strong, underline, delete: del, color, editable, placeholder, onChange, className, style }: HeaderProps) => JSX.Element;
export default _default;
