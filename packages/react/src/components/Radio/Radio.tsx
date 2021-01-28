import React, { useContext, useState, useEffect } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import RadioGroup from './RadioGroup';
import './Radio.style.scss';
import RadioContext from './RadioContext';

export interface RadioProps {
  value?: string;
  name?: string;
  label?: string;
  labelColor?: string;
  checked?: boolean;
  block?: boolean;
  disabled?: boolean;
  onChange?(check: boolean, value?: string): void;
  className?: string;
  style?: React.CSSProperties;
}

type IRadio<P> = React.FunctionComponent<P> & {
  Group: typeof RadioGroup;
};

const Radio: IRadio<RadioProps> = ({
  value,
  name,
  label,
  labelColor,
  checked = false,
  block = false,
  disabled,
  onChange,
  className = '',
  style,
  ...props
}) => {
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-radio`;
  const { dispatch } = useContext(RadioContext);

  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleChange = () => {
    onChange?.(!check, value);
    setCheck(!check);
    dispatch?.({
      active: {
        label,
        value,
      },
    });
  };

  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled,
    [`${classPrefix}--block`]: block,
  });

  return (
    <label className={classNames} style={style} {...props}>
      <input type="radio" name={name} value={value} checked={check} disabled={disabled} onChange={handleChange} />
      <span className={`${classPrefix}--radiomark`}>
        {check ? (
          disabled ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.500122 8C0.500122 3.85786 3.85799 0.5 8.00012 0.5C12.1423 0.5 15.5001 3.85786 15.5001 8C15.5001 12.1421 12.1423 15.5 8.00012 15.5C3.85799 15.5 0.500122 12.1421 0.500122 8Z"
                fill="#F5F5F5"
                stroke="#D9D9D9"
              />
              <rect x="4.00012" y="4" width="8" height="8" rx="4" fill="black" fill-opacity="0.25" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.500122 8C0.500122 3.85786 3.85799 0.5 8.00012 0.5C12.1423 0.5 15.5001 3.85786 15.5001 8C15.5001 12.1421 12.1423 15.5 8.00012 15.5C3.85799 15.5 0.500122 12.1421 0.500122 8Z"
                fill="white"
                stroke="#5C6AC4"
              />
              <rect x="4.00012" y="4" width="8" height="8" rx="4" fill="#5C6AC4" />
            </svg>
          )
        ) : disabled ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.500122 8C0.500122 3.85786 3.85799 0.5 8.00012 0.5C12.1423 0.5 15.5001 3.85786 15.5001 8C15.5001 12.1421 12.1423 15.5 8.00012 15.5C3.85799 15.5 0.500122 12.1421 0.500122 8Z"
              fill="#F5F5F5"
              stroke="#D9D9D9"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.500122 8C0.500122 3.85786 3.85799 0.5 8.00012 0.5C12.1423 0.5 15.5001 3.85786 15.5001 8C15.5001 12.1421 12.1423 15.5 8.00012 15.5C3.85799 15.5 0.500122 12.1421 0.500122 8Z"
              fill="white"
              stroke="#DFE3E8"
            />
          </svg>
        )}
      </span>
      {label ? (
        <span className={`${classPrefix}--text`} style={{ color: labelColor }}>
          {label}
        </span>
      ) : null}
    </label>
  );
};

Radio.Group = RadioGroup;

export default Radio;
