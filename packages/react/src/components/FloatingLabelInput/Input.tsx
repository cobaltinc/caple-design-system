import React, { useImperativeHandle, useRef } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Spinner from '../Spinner';
import { IconProps } from '../Icon/Icon';
import './FloatingLabelInput.style.scss';

export type InputType = 'email' | 'number' | 'text' | 'password' | 'date' | 'time' | 'datetime' | 'url' | 'tel';

export interface InputEvent {
  onInput?: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface FloatingLabelInputProps extends InputEvent {
  value?: string | number;
  defaultValue?: string | number;
  label: string;
  name?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  autoCapitalize?: string;
  autoCorrect?: string;
  disabled?: boolean;
  readonly?: boolean;
  prefix?: string | React.ReactElement<IconProps>;
  subfix?: string | React.ReactElement<IconProps>;
  error?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface Props {
  type?: InputType;
}

export default React.forwardRef<HTMLInputElement | null, FloatingLabelInputProps & Props>(
  (
    {
      value,
      defaultValue,
      label,
      name,
      type,
      autoFocus,
      autoComplete,
      autoCorrect,
      autoCapitalize,
      disabled,
      readonly,
      prefix,
      subfix,
      error,
      loading,
      onInput,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      onChange,
      onPressEnter,
      className = '',
      style,
      ...props
    },
    ref,
  ) => {
    const { useContext, useState, useEffect } = React;
    const classPrefix = `${useContext(ConfigContext).prefix}-input`;

    const [focused, setFocused] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current, [inputRef]);

    useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    const classNames = classnames(classPrefix, {
      [`${classPrefix}--disabled`]: disabled,
      [`${classPrefix}--readonly`]: readonly,
      [`${classPrefix}--focused`]: focused,
      [`${classPrefix}--error`]: error,
      className,
    });

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (!currentValue) {
        setFocused(false);
      }
      onBlur?.(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 13) {
        onPressEnter?.(event);
      }
      onKeyDown?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(event.target.value);
      onChange?.(event);
    };

    return (
      <div className={classNames} style={style} onClick={() => inputRef.current?.focus()}>
        <label>{label}</label>
        {prefix ? (
          <span className={`${classPrefix}--prefix`}>{React.isValidElement(prefix) ? React.cloneElement(prefix, { size: 24 }) : prefix}</span>
        ) : null}
        <input
          ref={inputRef}
          type={type}
          value={currentValue}
          defaultValue={defaultValue}
          name={name}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          disabled={disabled || readonly}
          onInput={onInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onChange={handleChange}
          {...props}
        />
        {loading ? (
          <Spinner size={24} />
        ) : subfix ? (
          <span className={`${classPrefix}--subfix`}>{React.isValidElement(subfix) ? React.cloneElement(subfix, { size: 24 }) : subfix}</span>
        ) : null}
      </div>
    );
  },
);
