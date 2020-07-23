import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import Spinner from '../Spinner';
import { IconProps } from '../Icon/Icon';
import './Input.style.scss';

export type InputType = 'email' | 'number' | 'text' | 'password' | 'date' | 'time' | 'datetime' | 'url' | 'tel';
export type InputSizeType = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge';
export type InputBorderType = 'border' | 'underline' | 'none';
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

export interface InputProps extends InputEvent {
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  label?: string;
  labelColor?: string;
  name?: string;
  size?: InputSizeType;
  borderType?: InputBorderType;
  autoFocus?: boolean;
  autoComplete?: string;
  autoCapitalize?: string;
  autoCorrect?: string;
  block?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  align?: InputAlignType;
  prefix?: string | React.ReactElement<IconProps>;
  subfix?: string | React.ReactElement<IconProps>;
  error?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
}

interface Props {
  type?: InputType;
}

export default React.forwardRef<HTMLInputElement, InputProps & Props>(
  (
    {
      value,
      defaultValue,
      placeholder,
      label,
      labelColor,
      name,
      type,
      size = 'normal',
      borderType = 'border',
      autoFocus,
      autoComplete,
      autoCorrect,
      autoCapitalize,
      block,
      disabled,
      readonly,
      align,
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
      labelClassName = '',
      labelStyle,
      inputClassName = '',
      inputStyle,
      ...props
    },
    ref,
  ) => {
    const { useContext, useState, useEffect } = React;
    const classPrefix = `${useContext(ConfigContext).prefix}-input`;

    const [focused, setFocused] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    const classNames = classnames(classPrefix, `${classPrefix}--size-${size}`, `${classPrefix}--border-type-${borderType}`, {
      [`${classPrefix}--disabled`]: disabled,
      [`${classPrefix}--readonly`]: readonly,
      [`${classPrefix}--focused`]: focused,
      [`${classPrefix}--error`]: error,
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (value !== undefined) setCurrentValue(event.target.value);
      onChange?.(event);
    };

    const iconSize = size === 'tiny' ? 14 : size === 'small' ? 16 : size === 'normal' ? 20 : size === 'large' ? 24 : 30;

    return (
      <div className={classnames(`${classPrefix}--container`, className, { [`${classPrefix}--block`]: block })} style={style}>
        {label ? (
          <Text size="small" color={labelColor} className={classnames(`${classPrefix}--label`, labelClassName)} style={labelStyle}>
            {label}
          </Text>
        ) : null}

        <div className={classNames}>
          {prefix ? (
            <span className={`${classPrefix}--prefix`}>{React.isValidElement(prefix) ? React.cloneElement(prefix, { size: iconSize }) : prefix}</span>
          ) : null}
          <input
            ref={ref}
            type={type}
            value={currentValue}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
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
            className={inputClassName}
            style={{ ...inputStyle, textAlign: align }}
            {...props}
          />
          {loading ? (
            <Spinner size={iconSize} className={`${classPrefix}--subfix`} />
          ) : subfix ? (
            <span className={`${classPrefix}--subfix`}>{React.isValidElement(subfix) ? React.cloneElement(subfix, { size: iconSize }) : subfix}</span>
          ) : null}
        </div>
      </div>
    );
  },
);
