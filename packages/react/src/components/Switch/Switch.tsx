import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import SwitchGroup from './SwitchGroup';
import './Switch.style.scss';
import SwitchContext, { SwitchItemType } from './SwitchContext';

export interface SwitchProps {
  title: string;
  value: string;
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?(check: boolean, value?: string): void;
  className?: string;
  style?: React.CSSProperties;
}

type ISwitch<P> = React.FunctionComponent<P> & {
  Group: typeof SwitchGroup;
};

const Switch: ISwitch<SwitchProps> = ({ title, value, id, name, checked = false, disabled = false, onChange, className = '', style, ...props }) => {
  const { useContext, useState, useEffect } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-switch`;
  const classNames = classnames(classPrefix, className);
  const { state, dispatch } = useContext(SwitchContext);

  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleClick = () => {
    onChange?.(!check, value);
    setCheck(!check);

    dispatch?.({
      multiple: state?.multiple ?? false,
      active:
        id && !check
          ? state?.multiple
            ? [
                ...(state.active as SwitchItemType[]),
                {
                  id,
                  title,
                  value,
                },
              ]
            : {
                id,
                title,
                value,
              }
          : state?.multiple
          ? (state.active as SwitchItemType[]).filter(item => item.id !== id)
          : undefined,
    });
  };

  return (
    <label className={`${classPrefix}--container`} {...props}>
      <input type="checkbox" name={name} checked={check} disabled={disabled} value={value} onChange={() => null} />
      <button type="button" className={classNames} style={style} disabled={disabled} onClick={handleClick}>
        {title}
      </button>
    </label>
  );
};

Switch.Group = SwitchGroup;

export default Switch;
