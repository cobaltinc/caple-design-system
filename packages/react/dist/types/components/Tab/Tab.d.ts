import React from 'react';
import TabItem from './TabItem';
import './Tab.style.scss';
export interface TabProps {
    children: React.ReactNode;
    active?: string;
    onChange?(title: string, index: number): void;
    className?: string;
    style?: React.CSSProperties;
}
export declare type ITab<P> = React.FunctionComponent<P> & {
    Item: typeof TabItem;
};
declare const Tab: ITab<TabProps>;
export default Tab;
