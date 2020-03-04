import React from 'react';
import './Avatar.style.scss';
export interface AvatarProps {
    size?: number;
    shape?: 'circle' | 'square';
    src?: string;
    text?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ size, shape, src, text, alt, className, style }: AvatarProps) => JSX.Element;
export default _default;
