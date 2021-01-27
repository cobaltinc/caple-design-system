import React, { useContext, useState, useEffect } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import RadioGroup from './RadioGroup';
import './Radio.style.scss';
import RadioContext, { RadioItemType } from './RadioContext';

export interface RadioProps {
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

type IRadio<P> = React.FunctionComponent<P> & {
  Group: typeof RadioGroup;
};

const Radio: IRadio<RadioProps> = ({ title, value, id, name, checked, disabled, onChange, className = '', style, ...props }) => {
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-radio`;
  const classNames = classnames(classPrefix, className);
  const { state, dispatch } = useContext(RadioContext);

  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleChange = () => {
    if (id && !check && id !== (state?.active as RadioItemType).id) {
      onChange?.(!check, value);
      setCheck(!check);
      dispatch?.({
        active: {
          id,
          title,
          value,
        },
      });
    }
  };

  return (
    <label className={`${classPrefix}--container`} {...props}>
      <input type="radio" name={name} value={value} checked={check} disabled={disabled} onChange={handleChange} />
      {title}
    </label>
  );
};

Radio.Group = RadioGroup;

export default Radio;
