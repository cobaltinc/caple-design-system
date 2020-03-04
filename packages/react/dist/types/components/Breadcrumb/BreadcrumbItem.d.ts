import React from 'react';
import './Breadcrumb.style.scss';
export interface BreadcrumbItemProps {
    children: React.ReactNode;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    hasSeperator?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const BreadcrumbItem: ({ children, href, onClick, hasSeperator, className, style }: BreadcrumbItemProps) => JSX.Element;
export default BreadcrumbItem;
