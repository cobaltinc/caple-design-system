import React from 'react';
import './Tooltip.style.scss';
export declare type TooltipPlacementType = 'topLeft' | 'top' | 'topRight' | 'leftTop' | 'left' | 'leftBottom' | 'rightTop' | 'right' | 'rightBottom' | 'bottomLeft' | 'bottom' | 'bottomRight';
export declare type ToolTipTriggerType = 'hover' | 'click' | 'focus';
export interface TooltipProps {
    children: React.ReactNode;
    placement?: TooltipPlacementType;
    trigger?: ToolTipTriggerType;
    title: string;
    width?: number;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ children, placement, trigger, title, width, className, style }: TooltipProps) => JSX.Element;
export default _default;
