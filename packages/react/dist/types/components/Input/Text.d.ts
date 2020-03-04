import { InputProps } from './Input';
import './Input.style.scss';
export interface InputTextProps extends InputProps {
    blocks?: number[];
    delimiter?: string;
    uppercase?: boolean;
    lowercase?: boolean;
}
declare const _default: (props: InputTextProps) => JSX.Element;
export default _default;
