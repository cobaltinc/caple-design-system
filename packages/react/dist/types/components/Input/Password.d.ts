import { InputProps } from './Input';
import './Input.style.scss';
export interface InputPasswordProps extends InputProps {
    toggle?: boolean;
}
declare const _default: ({ toggle, ...props }: InputPasswordProps) => JSX.Element;
export default _default;
