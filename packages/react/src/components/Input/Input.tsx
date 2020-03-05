import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import Spinner from '../Spinner';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import './Input.style.scss';

export type InputType = 'email' | 'number' | 'text' | 'password' | 'date' | 'time' | 'datetime' | 'url' | 'tel';
export type InputSizeType = 'mini' | 'small' | 'normal' | 'large' | 'xlarge';
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
  defaultValue?: string | number;
  placeholder?: string;
  label?: string;
  name?: string;
  size?: InputSizeType;
  borderType?: InputBorderType;
  autoFocus?: boolean;
  block?: boolean;
  disabled?: boolean;
  align?: InputAlignType;
  prefix?: string | React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
  subfix?: string | React.ReactElement<IconProps> | React.ReactElement<IconFeatherProps>;
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
      defaultValue,
      placeholder,
      label,
      name,
      type,
      size = 'normal',
      borderType = 'border',
      autoFocus,
      block = false,
      disabled = false,
      align,
      prefix,
      subfix,
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
    },
    ref,
  ) => {
    const { useContext, useState } = React;
    const classPrefix = `${useContext(ConfigContext).prefix}-input`;

    const [focused, setFocused] = useState(false);

    const inputClassNames = classnames(classPrefix, inputClassName, `${classPrefix}--size-${size}`, `${classPrefix}--border-type-${borderType}`, {
      [`${classPrefix}--disabled`]: disabled,
      [`${classPrefix}--focused`]: focused,
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

    const iconSize = size === 'mini' ? 14 : size === 'small' ? 16 : size === 'normal' ? 20 : size === 'large' ? 24 : 30;

    return (
      <div className={classnames(`${classPrefix}--container`, className, { [`${classPrefix}--block`]: block })} style={style}>
        {label ? (
          <Text paragraph size="small" className={classnames(`${classPrefix}--label`, labelClassName)} style={labelStyle}>
            {label}
          </Text>
        ) : null}

        <div className={inputClassNames} style={inputStyle}>
          {prefix ? (
            <span className={`${classPrefix}--prefix`}>{React.isValidElement(prefix) ? React.cloneElement(prefix, { size: iconSize }) : prefix}</span>
          ) : null}
          <input
            ref={ref}
            type={type}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            autoFocus={autoFocus}
            disabled={disabled}
            onInput={onInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            onChange={onChange}
            style={{ textAlign: align }}
          />
          {loading ? (
            <Spinner size={iconSize} />
          ) : subfix ? (
            <span className={`${classPrefix}--caret`}>{React.isValidElement(subfix) ? React.cloneElement(subfix, { size: iconSize }) : subfix}</span>
          ) : null}
        </div>
      </div>
    );
  },
);
