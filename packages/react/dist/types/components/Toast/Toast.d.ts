import './Toast.style.scss';
export declare type ToastType = 'default' | 'success' | 'error' | 'warning';
export interface ToastProps {
    id: string;
    message: string;
    type: ToastType;
    duration: number;
    onDone?(): void;
}
declare const _default: ({ message, type, duration, onDone }: ToastProps) => JSX.Element;
export default _default;
