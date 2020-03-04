import React from 'react';
import './Link.style.scss';
export declare type LinkSizeType = 'small' | 'normal' | 'large';
export interface LinkProps {
    children: React.ReactNode;
    size?: LinkSizeType | number;
    href?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, size, href, disabled, onClick, className, style }: LinkProps) => JSX.Element;
export default _default;
