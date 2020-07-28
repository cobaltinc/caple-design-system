import React, { useReducer } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Spinner from '../Spinner';
import FloatingLabelSelectOption, { FloatingLabelSelectOptionProps } from './FloatingLabelSelectOption';
import FloatingLabelSelectContext, { FloatingLabelSelectReducer } from './FloatingLabelSelectContext';
import { FadeTransition } from '../_transition';
import './FloatingLabelSelect.style.scss';
import { concatReactNodeToString } from '../../utils';

export interface FloatingLabelSelectProps {
  children: React.ReactNode;
  defaultActive?: string;
  label: string;
  name?: string;
  disabled?: boolean;
  loading?: boolean;
  onChange?(value: string, title: string): void;
  className?: string;
  style?: React.CSSProperties;
}

const Select = ({
  children,
  defaultActive,
  label,
  name,
  disabled = false,
  loading,
  onChange,
  className = '',
  style,
  ...props
}: FloatingLabelSelectProps) => {
  const { useContext, useState, useRef, useEffect } = React;
  const classPrefix = `${useContext(ConfigContext).prefix}-floating-label-select`;

  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const [state, dispatch] = useReducer(FloatingLabelSelectReducer, {
    active: defaultActive
      ? {
          id: defaultActive,
          title: '',
          value: '',
        }
      : undefined,
  });

  useEffect(() => {
    if (state.active) {
      onChange?.(state.active.value, state.active.title);
    }
  }, [state]);

  const inputClassNames = classnames(classPrefix, {
    [`${classPrefix}--disabled`]: disabled,
    [`${classPrefix}--focused`]: focused,
    [`${classPrefix}--active`]: defaultActive ? (state.active === undefined ? true : state.active ? true : false) : state.active ? true : false,
  });

  const options = React.Children.toArray(children).filter(element => {
    if ((element as any).type !== FloatingLabelSelectOption) {
      console.warn(`%c FloatingLabelSelect\n\n`, 'font-weight: bold; font-size: 16px;', `Only accepts FloatingLabelSelectOption as it's children`);
      return false;
    }

    return true;
  });

  const handleClick = () => {
    if (disabled) return;
    setFocused(!focused);
    selectRef.current?.focus();
  };

  const handleFocus = () => {
    if (disabled) return;
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
      setFocused(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const optionTypes = options.map(option => {
      const optionProps = (option as React.ReactElement<FloatingLabelSelectOptionProps>).props;
      return {
        id: optionProps.id,
        value: optionProps.value,
        title: concatReactNodeToString(optionProps.children),
      };
    });

    if (event.keyCode === 38) {
      // UP
      if (!state.active) {
        dispatch?.({ active: optionTypes[optionTypes.length - 1] });
      } else {
        const index = optionTypes.findIndex(optionType => optionType.id === state.active?.id);
        dispatch?.({ active: optionTypes[index > 0 ? index - 1 : optionTypes.length - 1] });
      }
    } else if (event.keyCode === 40) {
      // DOWN
      if (!state.active) {
        dispatch?.({ active: optionTypes[0] });
      } else {
        const index = optionTypes.findIndex(optionType => optionType.id === state.active?.id);
        dispatch?.({ active: optionTypes[(index + 1) % optionTypes.length] });
      }
    } else if (event.keyCode === 13) {
      // ENTER
      selectRef.current?.blur();
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

  return (
    <FloatingLabelSelectContext.Provider value={{ state, dispatch }}>
      <div className={classnames(`${classPrefix}--container`, className)} style={style} {...props}>
        <div ref={wrapperRef} className={inputClassNames} onClick={handleClick}>
          <select ref={selectRef} name={name} disabled={disabled} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown} />

          <label>{label}</label>
          <div className={`${classPrefix}--value`}>{state.active?.title}</div>

          {loading ? (
            <Spinner size={24} className={`${classPrefix}--caret`} />
          ) : (
            <Icon type="caret-down" size={24} className={classnames(`${classPrefix}--caret`, { [`reverse`]: focused })} />
          )}
        </div>

        <FadeTransition show={focused}>{focused ? <div className={`${classPrefix}--options`}>{options}</div> : null}</FadeTransition>
      </div>
    </FloatingLabelSelectContext.Provider>
  );
};

Select.Option = FloatingLabelSelectOption;

export default Select;
