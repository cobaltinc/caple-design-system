import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import './Breadcrumb.style.scss';
export interface BreadcrumbProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare type IBreadcrumb<P> = React.FunctionComponent<P> & {
    Item: typeof BreadcrumbItem;
};
declare const Breadcrumb: IBreadcrumb<BreadcrumbProps>;
export default Breadcrumb;
