import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { warning, concatReactNodeToString } from '../../utils';
import './Header.style.scss';

export interface HeaderProps {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: string;
  editable?: boolean;
  placeholder?: string;
  onChange?: React.KeyboardEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  children,
  level = 1,
  strong = false,
  underline = false,
  delete: del = false,
  color,
  editable,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  className = '',
  style,
}: HeaderProps) => {
  const { useContext, useRef } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-header`;
  const classNames = classnames(classPrefix, className);

  const ref = useRef<HTMLHeadingElement>(null);

  let Tag = `h${level}` as 'h1';
  if (level < 1 || level > 4) {
    warning('Header', 'Header only accept `1 | 2 | 3 | 4` as `level` value.');
    Tag = 'h1' as 'h1';
  }

  const fontStyle: React.CSSProperties = {
    fontWeight: strong ? 'bold' : 'normal',
    textDecoration: underline ? 'underline' : undefined,
  };

  if (color) {
    fontStyle.color = color;
  }
  if (del) {
    children = <del>{children}</del>;
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    onChange?.(event);

    if (editable && ref.current) {
      ref.current.setAttribute('data-value', ref.current.innerText);
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();

    const pastedData = event.clipboardData.getData('text/plain');
    window.document.execCommand('insertText', false, pastedData);
  };

  return (
    <Tag
      ref={ref}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onPaste={handlePaste}
      onFocus={onFocus}
      onBlur={onBlur}
      contentEditable={editable}
      placeholder={placeholder}
      suppressContentEditableWarning={editable}
      data-value={editable ? children : undefined}
      className={classNames}
      style={{ ...style, ...fontStyle }}
    >
      {children}
    </Tag>
  );
};
