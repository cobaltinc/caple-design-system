import React from 'react';
import './Popover.style.scss';
export declare type PlacementType = 'topLeft' | 'top' | 'topRight' | 'leftTop' | 'left' | 'leftBottom' | 'rightTop' | 'right' | 'rightBottom' | 'bottomLeft' | 'bottom' | 'bottomRight';
export declare type PopoverTriggerType = 'hover' | 'click' | 'focus';
export interface PopoverProps {
    children: React.ReactNode;
    content: React.ReactNode;
    placement?: PlacementType;
    trigger?: PopoverTriggerType;
    width?: number;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, content, trigger, placement, width, className, style }: PopoverProps) => JSX.Element;
export default _default;
