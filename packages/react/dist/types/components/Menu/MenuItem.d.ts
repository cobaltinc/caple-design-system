import React from 'react';
import './Menu.style.scss';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
export interface MenuItemProps {
    icon?: React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
    title: string;
    disabled?: boolean;
    active?: boolean;
    onClick?(event: React.MouseEvent<HTMLDivElement>): void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: ({ icon, title, disabled, active, onClick, className, style }: MenuItemProps) => JSX.Element;
export default _default;
