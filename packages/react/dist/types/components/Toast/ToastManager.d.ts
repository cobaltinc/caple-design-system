import { ToastType } from './Toast';
import './Toast.style.scss';
export interface ToastManagerProps {
    bind(createToast: (message: string, option: ToastOptionType) => void): void;
}
export declare type ToastOptionType = {
    type: ToastType;
    duration: number;
};
declare const ToastArea: ({ bind }: ToastManagerProps) => JSX.Element;
export default ToastArea;
