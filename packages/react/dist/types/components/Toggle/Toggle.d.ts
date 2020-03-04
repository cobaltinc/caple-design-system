import React from 'react';
import './Toggle.style.scss';
export declare type ToggleSizeType = 'small' | 'normal' | 'large';
export interface ToggleProps {
    value?: string;
    name?: string;
    on?: boolean;
    size?: ToggleSizeType;
    error?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ value, name, on, size, error, disabled, onChange, className, style }: ToggleProps) => JSX.Element;
export default _default;
