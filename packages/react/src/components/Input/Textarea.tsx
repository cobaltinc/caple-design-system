import React from 'react';
import classnames from 'classnames';
import raf from 'raf';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import Spinner from '../Spinner';
import calculateNodeHeight from './calculateNodeHeight';
import './Textarea.style.scss';

export type TextareaBorderType = 'border' | 'underline' | 'none';
export type TextareaAlignType = 'left' | 'center' | 'right';
export type TextareaResizeType = 'vertical' | 'horizontal' | 'both' | 'none';

export interface TextareaEvent {
  onInput?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

export interface TextareaProps extends TextareaEvent {
  value?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  borderType?: TextareaBorderType;
  autoFocus?: boolean;
  disabled?: boolean;
  align?: TextareaAlignType;
  resizeType?: TextareaResizeType;
  rows?: number;
  autoSize?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  textareaClassName?: string;
  textareaStyle?: React.CSSProperties;
};

export default ({ value, placeholder, label, name,
  borderType = 'border', autoFocus, disabled = false, align, resizeType = 'vertical', rows = 1, autoSize = false, loading,
  onInput, onFocus, onBlur, onKeyDown, onKeyUp, onKeyPress, onChange, onPressEnter,
  className = '', style, labelClassName = '', labelStyle, textareaClassName = '', textareaStyle }: TextareaProps) => {

  const { useContext, useState, useRef, useEffect } = React;
  const classPrefix = `${useContext(ConfigContext).prefix}-textarea`;

  const [focused, setFocused] = useState(false);
  const [resizeStyle, setResizeStyle] = useState<React.CSSProperties>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const textareaClassNames = classnames(classPrefix, textareaClassName, `${classPrefix}--border-type-${borderType}`, {
    [`${classPrefix}--disabled`]: disabled,
    [`${classPrefix}--focused`]: focused
  });

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    onFocus?.(event)
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    onBlur?.(event)
  };

  const resize = () => {
    raf(() => {
      if (textareaRef.current && autoSize) {
        const styles = calculateNodeHeight(textareaRef.current, false, undefined, undefined);
        setResizeStyle(styles);
      }
    });
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13) {
      onPressEnter?.(event);
    }
    onKeyDown?.(event);
    resize();
  };

  useEffect(() => {
    resize();
  }, [textareaRef, autoSize]);

  return (
    <div className={classnames(`${classPrefix}--container`, className)} style={style}>
      {
        label ?
          <Text paragraph size="small" className={classnames(`${classPrefix}--label`, labelClassName)} style={labelStyle}>
            {label}
          </Text> :
          null
      }

      <textarea
        ref={textareaRef}
        defaultValue={value}
        name={name} 
        placeholder={placeholder} 
        rows={rows}
        autoFocus={autoFocus}
        disabled={disabled}
        onInput={onInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onChange={onChange}
        className={textareaClassNames}
        style={{...textareaStyle, ...resizeStyle, textAlign: align, resize: resizeType}} />
      {
        loading ? <Spinner size={16} className={`${classPrefix}--loading`} /> : null
      }
    </div>
  );
};
