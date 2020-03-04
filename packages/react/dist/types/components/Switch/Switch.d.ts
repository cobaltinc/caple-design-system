import React from 'react';
import SwitchGroup from './SwitchGroup';
import './Switch.style.scss';
export interface SwitchProps {
    title: string;
    value: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?(check: boolean, value?: string): void;
    className?: string;
    style?: React.CSSProperties;
}
declare type ISwitch<P> = React.FunctionComponent<P> & {
    Group: typeof SwitchGroup;
};
declare const Switch: ISwitch<SwitchProps>;
export default Switch;
