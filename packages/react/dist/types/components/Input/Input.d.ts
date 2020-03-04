import React from 'react';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import './Input.style.scss';
export declare type InputType = 'email' | 'number' | 'text' | 'password' | 'date' | 'time' | 'datetime' | 'url' | 'tel';
export declare type InputSizeType = 'mini' | 'small' | 'normal' | 'large' | 'xlarge';
export declare type InputBorderType = 'border' | 'underline' | 'none';
export declare type InputAlignType = 'left' | 'center' | 'right';
export interface InputEvent {
    onInput?: React.KeyboardEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}
export interface InputProps extends InputEvent {
    defaultValue?: string | number;
    placeholder?: string;
    label?: string;
    name?: string;
    size?: InputSizeType;
    borderType?: InputBorderType;
    autoFocus?: boolean;
    block?: boolean;
    disabled?: boolean;
    align?: InputAlignType;
    prefix?: string | React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
    subfix?: string | React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    inputClassName?: string;
    inputStyle?: React.CSSProperties;
}
interface Props {
    type?: InputType;
}
declare const _default: React.ForwardRefExoticComponent<InputProps & Props & React.RefAttributes<HTMLInputElement>>;
export default _default;
