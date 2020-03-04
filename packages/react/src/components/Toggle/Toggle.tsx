import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Toggle.style.scss';

export type ToggleSizeType = 'small' | 'normal' | 'large';

export interface ToggleProps {
  value?: string;
  name?: string;
  on?: boolean;
  size?: ToggleSizeType;
  error?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ value, name, on = false, size = 'normal', error = false, disabled = false, onChange, className = '', style }: ToggleProps) => {
  const { useState, useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-toggle`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled
  });

  const [check, setCheck] = useState(on);

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    onChange?.(event);
  };

  return (
    <label className={classNames} style={style}>
      <input type="checkbox" name={name} checked={check} disabled={disabled} value={value} onChange={change} />
      <div className={classnames(`${classPrefix}--button`, `${classPrefix}--size-${size}`)} />
    </label>
  );
};
