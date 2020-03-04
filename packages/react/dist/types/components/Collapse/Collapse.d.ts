import React from 'react';
import './Collapse.style.scss';
export interface CollapseProps {
    children: React.ReactNode;
    title: string;
    defaultExpand?: boolean;
    animate?: boolean;
    titleColor?: string;
    indicatorTitle?: string;
    indicatorColor?: string;
    caretColor?: string;
    onOpen?(): void;
    onClose?(): void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, title, defaultExpand, animate, titleColor, indicatorTitle, indicatorColor, caretColor, onOpen, onClose, className, style }: CollapseProps) => JSX.Element;
export default _default;
