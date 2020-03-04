import { IconProps } from './Icon';
import './Icon.style.scss';
export interface IconFeatherProps extends IconProps {
    type: string;
    strokeWidth?: number;
}
declare const _default: ({ type, size, rotate, spin, strokeWidth, color, onClick, className, style }: IconFeatherProps) => JSX.Element;
export default _default;
