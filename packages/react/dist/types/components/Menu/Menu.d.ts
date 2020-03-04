import React from 'react';
import './Menu.style.scss';
export interface MenuProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const Menu: {
    ({ children, className, style }: MenuProps): JSX.Element;
    Item: ({ icon, title, disabled, active, onClick, className, style }: import("./MenuItem").MenuItemProps) => JSX.Element;
};
export default Menu;
