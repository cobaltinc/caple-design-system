import { ToastType } from './Toast';
export declare type ToastOptionType = {
    type: ToastType;
    duration: number;
};
declare class ToastCore {
    createToast?(message: string, option: ToastOptionType): void;
    portal: Element | null;
    constructor();
    bind(createToast: (message: string, option: ToastOptionType) => void): void;
    show(message: string, option?: ToastOptionType): void;
    success(message: string, duration?: number): void;
    error(message: string, duration?: number): void;
    warning(message: string, duration?: number): void;
}
declare const core: ToastCore;
export default core;
