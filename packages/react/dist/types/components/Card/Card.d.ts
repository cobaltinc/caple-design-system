import React from 'react';
import './Card.style.scss';
export declare type CollapsibleConfig = {
    expand: boolean;
    animate?: boolean;
    caretColor?: string;
};
export interface CardProps {
    children: React.ReactNode;
    header?: string | React.ReactNode;
    footer?: React.ReactNode;
    collapsible?: boolean | CollapsibleConfig;
    onOpen?(): void;
    onClose?(): void;
    loading?: boolean;
    className?: string;
    style?: React.CSSProperties;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    footerClassName?: string;
    footerStyle?: React.CSSProperties;
}
declare const _default: ({ children, header, footer, collapsible, onOpen, onClose, loading, className, style, headerClassName, headerStyle, footerClassName, footerStyle }: CardProps) => JSX.Element;
export default _default;
