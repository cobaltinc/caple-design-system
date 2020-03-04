import React from 'react';
import { ExitHandler } from 'react-transition-group/Transition';
import './Transition.style.scss';
interface Props {
    children: React.ReactNode;
    show: boolean;
    onExited?: ExitHandler;
}
declare const _default: ({ children, show, onExited }: Props) => JSX.Element;
export default _default;
