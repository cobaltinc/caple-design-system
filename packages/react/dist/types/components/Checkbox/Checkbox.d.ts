import React from 'react';
import './Checkbox.style.scss';
export interface CheckboxProps {
    name?: string;
    label?: string;
    value?: string;
    checked?: boolean;
    error?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ name, label, value, checked, error, disabled, onChange, className, style }: CheckboxProps) => JSX.Element;
export default _default;
