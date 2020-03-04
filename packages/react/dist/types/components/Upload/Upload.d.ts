import React from 'react';
import './Upload.style.scss';
export interface UploadProps {
    children(file?: File, dragging?: boolean): React.ReactNode;
    name?: string;
    value?: File;
    accept?: string;
    disabled?: boolean;
    draggable?: boolean;
    onChange?(file?: File): void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, name, value, accept, disabled, draggable, onChange, className, style }: UploadProps) => JSX.Element;
export default _default;
