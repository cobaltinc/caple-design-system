import { InputProps } from './Input';
import './Input.style.scss';
export declare type InputPhoneNumberRegionCode = 'thousand' | 'lakh' | 'wan' | 'none';
export interface InputPhoneNumberProps extends InputProps {
    regionCode: string;
    delimiter?: string;
}
declare const _default: ({ regionCode, delimiter, ...props }: InputPhoneNumberProps) => JSX.Element;
export default _default;
