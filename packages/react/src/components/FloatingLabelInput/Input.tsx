import React, { useImperativeHandle, useRef } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Spinner from '../Spinner';
import Icon from '../Icon';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
import { AmberDark, RedDark } from '@caple-ui/colors';
import './FloatingLabelInput.style.scss';

export type InputType = 'email' | 'number' | 'text' | 'password' | 'date' | 'time' | 'datetime' | 'url' | 'tel';
export type InputAlignType = 'left' | 'center' | 'right';

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
  align?: InputAlignType;
  prefix?: string | React.ReactElement<IconProps>;
  subfix?: string | React.ReactElement<IconProps>;
  error?: boolean;
  invalid?: boolean;
  message?: string;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
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
      align,
      prefix,
      subfix,
      error,
      invalid,
      message,
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
      inputStyle,
      ...props
    },
    ref,
  ) => {
    const { useContext, useState, useEffect } = React;
    const classPrefix = `${useContext(ConfigContext).prefix}-floating-label-input`;

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
      [`${classPrefix}--active`]: defaultValue ? (currentValue === undefined ? true : currentValue ? true : false) : currentValue ? true : false,
      [`${classPrefix}--error`]: error,
      [`${classPrefix}--invalid`]: invalid,
      className,
    });

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 13) {
        onPressEnter?.(event);
      }
      onKeyDown?.(event);
    };

    const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
      setCurrentValue(event.currentTarget.value);
      onInput?.(event);
    };

    return (
      <>
        <div className={classNames} style={style}>
          <label>{label}</label>
          {/* {prefix ? (
          <span className={`${classPrefix}--prefix`}>{React.isValidElement(prefix) ? React.cloneElement(prefix, { size: 24 }) : prefix}</span>
        ) : null} */}
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
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            onChange={onChange}
            style={{ ...inputStyle, textAlign: align }}
            {...props}
          />
          {loading ? (
            <Spinner size={24} className={`${classPrefix}--subfix`} />
          ) : subfix ? (
            <span className={`${classPrefix}--subfix`}>{React.isValidElement(subfix) ? React.cloneElement(subfix, { size: 24 }) : subfix}</span>
          ) : null}
        </div>
        {error && message ? (
          <>
            <Icon type="alert-circle" color={RedDark} style={{ marginRight: 4 }} size={16} />
            <Text color={RedDark} size="normal">
              {message}
            </Text>
          </>
        ) : null}
        {invalid && message ? (
          <>
            <Icon type="alert-circle" color={AmberDark} style={{ marginRight: 4 }} size={16} />
            <Text color={AmberDark} size="normal">
              {message}
            </Text>
          </>
        ) : null}
      </>
    );
  },
);
