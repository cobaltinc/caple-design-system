import React from 'react';
import './Modal.style.scss';
interface ModalProps {
    children: React.ReactNode;
    width?: number;
    height?: number;
    visible?: boolean;
    closable?: boolean;
    zIndex?: number;
    onClose?(): void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, width, visible, closable, zIndex, onClose, className, style }: ModalProps) => JSX.Element;
export default _default;
