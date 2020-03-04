import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
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
};

type ISwitch<P> = React.FunctionComponent<P> & {
  Group: typeof SwitchGroup;
}

const Switch: ISwitch<SwitchProps> = ({ title, value, name, checked = false, disabled = false, onChange, className = '', style }) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-switch`;
  const classNames = classnames(classPrefix, className);

  const [check, setCheck] = useState(checked);

  const handleClick = () => {
    onChange?.(!check, value);
    setCheck(!check);
  };

  return (
    <label className={`${classPrefix}--container`}>
      <input type="radio" defaultChecked={check} value={value} name={name} />
      <button className={classNames} style={style} disabled={!!disabled} onClick={handleClick}>
        {title}
      </button>
    </label>
  );
};

Switch.Group = SwitchGroup;

export default Switch;