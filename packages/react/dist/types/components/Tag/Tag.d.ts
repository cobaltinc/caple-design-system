import React from 'react';
import './Tag.style.scss';
export declare type TagSizeType = 'small' | 'normal' | 'large';
export interface TagProps {
    name: string;
    size?: TagSizeType;
    disabled?: boolean;
    deletable?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onDelete?(): void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ name, size, disabled, deletable, onClick, className, style }: TagProps) => JSX.Element;
export default _default;
