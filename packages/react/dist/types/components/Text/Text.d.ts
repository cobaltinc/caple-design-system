import React from 'react';
import './Text.style.scss';
export declare type TextSizeType = 'small' | 'normal' | 'large';
export interface TextProps {
    children: React.ReactNode;
    size?: TextSizeType | number;
    paragraph?: boolean;
    strong?: boolean;
    underline?: boolean;
    delete?: boolean;
    mark?: boolean;
    code?: boolean;
    color?: string;
    editable?: boolean;
    placeholder?: string;
    onChange?: React.KeyboardEventHandler<HTMLParagraphElement>;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, size, paragraph, strong, underline, delete: del, mark, code, color, editable, placeholder, onChange, className, style }: TextProps) => JSX.Element;
export default _default;
