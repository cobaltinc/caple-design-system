import React from 'react';
import './Icon.style.scss';
export declare type IconType = 'alert-circle' | 'android' | 'apple' | 'arrow-left' | 'arrow-right' | 'caret-down' | 'caret-sort' | 'caret-up' | 'check-circle' | 'chenvron-down' | 'chenvron-left' | 'chenvron-right' | 'chenvron-up' | 'close-circle' | 'close' | 'edit' | 'gear' | 'plus' | 'reload' | 'star';
export interface IconProps {
    type?: IconType | string;
    component?: React.ReactNode;
    size?: number;
    rotate?: number;
    spin?: boolean;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
    style?: React.CSSProperties;
}
declare const Icon: {
    ({ type, component, size, rotate, spin, color, onClick, className, style }: IconProps): JSX.Element | null;
    Feather: ({ type, size, rotate, spin, strokeWidth, color, onClick, className, style }: import("./IconFeather").IconFeatherProps) => JSX.Element;
};
export default Icon;
