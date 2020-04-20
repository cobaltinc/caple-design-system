import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import Icon from '../Icon';
import Spinner from '../Spinner';
import SelectOption, { SelectOptionProps } from './SelectOption';
import { FadeTransition } from '../_transition';
import { convertReactNodeTo, concatReactNodeToString } from '../../utils';
import './Select.style.scss';

export type SelectSizeType = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge';
export type SelectAlignType = 'left' | 'center' | 'right';
export type SelectBorderType = 'border' | 'underline' | 'none';

export interface SelectProps {
  children: React.ReactNode;
  defaultActive?: string;
  label?: string;
  labelColor?: string;
  name?: string;
  placeholder?: string;
  size?: SelectSizeType;
  borderType?: SelectBorderType;
  block?: boolean;
  disabled?: boolean;
  align?: SelectAlignType;
  loading?: boolean;
  onChange?(value: string): void;
  className?: string;
  style?: React.CSSProperties;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
}

type SelectedOption = {
  key: number;
  title: string;
  value: string;
};

// TODO: need refactoring
const Select = ({
  children,
  defaultActive,
  label,
  labelColor,
  name,
  placeholder,
  size = 'normal',
  borderType = 'border',
  block,
  disabled = false,
  align = 'center',
  loading,
  onChange,
  className = '',
  style,
  labelClassName = '',
  labelStyle,
  inputClassName = '',
  inputStyle,
  ...props
}: SelectProps) => {
  const { useContext, useState, useRef, useEffect } = React;
  const classPrefix = `${useContext(ConfigContext).prefix}-select`;

  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState<SelectedOption>();
  const inputRef = useRef<HTMLDivElement>(null);

  const inputClassNames = classnames(classPrefix, inputClassName, `${classPrefix}--size-${size}`, `${classPrefix}--border-type-${borderType}`, {
    [`${classPrefix}--disabled`]: disabled,
    [`${classPrefix}--focused`]: focused,
  });

  const iconSize = size === 'tiny' ? 14 : size === 'small' ? 16 : size === 'normal' ? 20 : size === 'large' ? 24 : 30;

  const handleClick = () => {
    if (disabled) {
      return;
    }

    setFocused(!focused);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as HTMLElement)) {
      setFocused(false);
    }
  };

  useEffect(() => {
    if (handleClickOutside) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [handleClickOutside]);

  useEffect(() => {
    const newActive = convertReactNodeTo<typeof SelectOption>('Select', 'Select.Option', children)
      .filter(element => {
        const optionProps = (element as React.ReactElement<SelectOptionProps>).props;
        return optionProps.value === defaultActive;
      })
      .map((element, index) => {
        const optionProps = (element as React.ReactElement<SelectOptionProps>).props;
        const title = concatReactNodeToString(optionProps.children);
        return {
          key: index,
          title,
          value: optionProps.value,
        };
      });

    if (newActive.length > 0) {
      setActive(newActive[0]);
    }
  }, [defaultActive]);

  const options = convertReactNodeTo<typeof SelectOption>('Select', 'Select.Option', children).map((element, index) => {
    const optionProps = (element as React.ReactElement<SelectOptionProps>).props;
    const title = concatReactNodeToString(optionProps.children);
    const handleOptionClick = () => {
      if (!disabled) {
        setActive({
          key: index,
          title,
          value: optionProps.value,
        });
        onChange?.(optionProps.value);
      }
    };

    return SelectOption.render({ ...optionProps, key: index, selected: active?.key === index, onClick: handleOptionClick });
  });

  return (
    <div className={classnames(`${classPrefix}--container`, className, { [`${classPrefix}--block`]: block })} style={style} {...props}>
      {label ? (
        <Text size="small" color={labelColor} className={classnames(`${classPrefix}--label`, labelClassName)} style={labelStyle}>
          {label}
        </Text>
      ) : null}

      <div ref={inputRef} className={inputClassNames} style={{ ...inputStyle, textAlign: align }} onClick={handleClick}>
        <select name={name} defaultValue={active?.value} disabled={disabled}>
          {options.map((option, index) => {
            const optionProps = (option as React.ReactElement<SelectOptionProps>).props;
            const title = concatReactNodeToString(optionProps.children);
            return (
              <option value={optionProps.value} key={index}>
                {title}
              </option>
            );
          })}
        </select>
        <div className={`${classPrefix}--value`} placeholder={placeholder}>
          {active?.title}
        </div>
        {loading ? (
          <Spinner size={iconSize} className={`${classPrefix}--caret`} />
        ) : (
          <Icon type="caret-down" size={iconSize} className={classnames(`${classPrefix}--caret`, { [`reverse`]: focused })} />
        )}
      </div>

      <FadeTransition show={focused}>{focused ? <div className={`${classPrefix}--options`}>{options}</div> : null}</FadeTransition>
    </div>
  );
};

Select.Option = SelectOption;

export default Select;
