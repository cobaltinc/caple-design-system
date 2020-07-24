import React, { useEffect } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Checkbox.style.scss';

export interface CheckboxProps {
  name?: string;
  label?: string;
  labelColor?: string;
  value?: string;
  checked?: boolean;
  block?: boolean;
  error?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  name,
  label,
  labelColor,
  value,
  checked = false,
  block = false,
  error = false,
  disabled = false,
  onChange,
  className = '',
  style,
  ...props
}: CheckboxProps) => {
  const { useState, useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-checkbox`;
  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(check);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    onChange?.(event);
  };

  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled,
    [`${classPrefix}--block`]: block,
  });

  return (
    <label className={classNames} style={style} {...props}>
      <input type="checkbox" name={name} checked={check} disabled={disabled} value={value} onChange={handleChange} />
      <span className={`${classPrefix}--checkmark`}>
        {check ? (
          !error ? (
            disabled ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#DFE3E8" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.31476 11.8585L3.13295 8.4415C2.95568 8.2535 2.95568 7.9475 3.13295 7.7575L3.77568 7.0745C3.95295 6.8865 4.24113 6.8865 4.4184 7.0745L6.63657 9.4665L11.5811 4.1415C11.7584 3.9535 12.0465 3.9535 12.2238 4.1415L12.8665 4.8255C13.0438 5.0135 13.0438 5.3205 12.8665 5.5075L6.95748 11.8585C6.78021 12.0465 6.49203 12.0465 6.31476 11.8585Z"
                  fill="#919EAB"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="white" />
                <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#617985" fillOpacity="0.02" />
                <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="#5C6AC4" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.31476 11.8585L3.13295 8.4415C2.95568 8.2535 2.95568 7.9475 3.13295 7.7575L3.77568 7.0745C3.95295 6.8865 4.24113 6.8865 4.4184 7.0745L6.63657 9.4665L11.5811 4.1415C11.7584 3.9535 12.0465 3.9535 12.2238 4.1415L12.8665 4.8255C13.0438 5.0135 13.0438 5.3205 12.8665 5.5075L6.95748 11.8585C6.78021 12.0465 6.49203 12.0465 6.31476 11.8585Z"
                  fill="#5C6AC4"
                />
              </svg>
            )
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#FBEAE5" stroke="#DE3617" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.31476 11.8585L3.13295 8.4415C2.95568 8.2535 2.95568 7.9475 3.13295 7.7575L3.77568 7.0745C3.95295 6.8865 4.24113 6.8865 4.4184 7.0745L6.63657 9.4665L11.5811 4.1415C11.7584 3.9535 12.0465 3.9535 12.2238 4.1415L12.8665 4.8255C13.0438 5.0135 13.0438 5.3205 12.8665 5.5075L6.95748 11.8585C6.78021 12.0465 6.49203 12.0465 6.31476 11.8585Z"
                fill="#BF0711"
              />
            </svg>
          )
        ) : !error ? (
          disabled ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#DFE3E8" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#C4CDD5" />
            </svg>
          )
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#FBEAE5" stroke="#DE3617" />
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
