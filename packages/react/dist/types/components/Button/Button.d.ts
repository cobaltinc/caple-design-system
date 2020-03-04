import React from 'react';
import './Button.style.scss';
export declare type ButtonType = 'basic' | 'primary' | 'destructive';
export declare type ButtonSizeType = 'mini' | 'small' | 'normal' | 'large' | 'xlarge';
export interface ButtonProps {
    children: React.ReactNode;
    type?: ButtonType;
    size?: ButtonSizeType;
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, type, size, block, disabled, loading, onClick, className, style }: ButtonProps) => JSX.Element;
export default _default;
