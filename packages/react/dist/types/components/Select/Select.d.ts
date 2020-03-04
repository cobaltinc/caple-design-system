import React from 'react';
import SelectOption from './SelectOption';
import './Select.style.scss';
export declare type SelectSizeType = 'mini' | 'small' | 'normal' | 'large' | 'xlarge';
export declare type SelectAlignType = 'left' | 'center' | 'right';
export declare type SelectBorderType = 'border' | 'underline' | 'none';
export interface SelectProps {
    children: React.ReactNode;
    label?: string;
    name?: string;
    placeholder?: string;
    size?: SelectSizeType;
    borderType?: SelectBorderType;
    block?: string;
    disabled?: boolean;
    align?: SelectAlignType;
    loading?: boolean;
    onChange?(value: string): void;
    className?: string;
    style?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    inputClassName?: string;
    inputStyle?: React.CSSProperties;
}
declare type ISelect<P> = React.FunctionComponent<P> & {
    Option: typeof SelectOption;
};
declare const Select: ISelect<SelectProps>;
export default Select;
