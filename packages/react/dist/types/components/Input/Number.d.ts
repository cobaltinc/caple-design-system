import { InputProps } from './Input';
import './Input.style.scss';
export declare type InputNumberThousandsGroupStyle = 'thousand' | 'lakh' | 'wan' | 'none';
export interface InputNumberProps extends InputProps {
    value?: number;
    group?: InputNumberThousandsGroupStyle;
}
declare const _default: ({ group, ...props }: InputNumberProps) => JSX.Element;
export default _default;
