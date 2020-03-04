import React from 'react';
import './Textarea.style.scss';
export declare type TextareaBorderType = 'border' | 'underline' | 'none';
export declare type TextareaAlignType = 'left' | 'center' | 'right';
export declare type TextareaResizeType = 'vertical' | 'horizontal' | 'both' | 'none';
export interface TextareaEvent {
    onInput?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}
export interface TextareaProps extends TextareaEvent {
    value?: string;
    placeholder?: string;
    label?: string;
    name?: string;
    borderType?: TextareaBorderType;
    autoFocus?: boolean;
    disabled?: boolean;
    align?: TextareaAlignType;
    resizeType?: TextareaResizeType;
    rows?: number;
    autoSize?: boolean;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    textareaClassName?: string;
    textareaStyle?: React.CSSProperties;
}
declare const _default: ({ value, placeholder, label, name, borderType, autoFocus, disabled, align, resizeType, rows, autoSize, loading, onInput, onFocus, onBlur, onKeyDown, onKeyUp, onKeyPress, onChange, onPressEnter, className, style, labelClassName, labelStyle, textareaClassName, textareaStyle }: TextareaProps) => JSX.Element;
export default _default;
