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
  onKeyDown?: React.KeyboardEventHandler<HTMLHeadingElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLHeadingElement>;
  onInput?: React.FormEventHandler<HTMLHeadingElement>;
  onFocus?: React.FocusEventHandler<HTMLHeadingElement>;
  onBlur?: React.FocusEventHandler<HTMLHeadingElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLHeadingElement>;
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
  onKeyDown,
  onKeyUp,
  onInput,
  onFocus,
  onBlur,
  onPressEnter,
  className = '',
  style,
  ...props
}: HeaderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-header`;
  const classNames = classnames(classPrefix, className);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
    onKeyDown?.(event);

    if (event.key === 'Enter') {
      onPressEnter?.(event);
      event.preventDefault();
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();

    const pastedData = event.clipboardData.getData('text/plain');
    window.document.execCommand('insertText', false, pastedData);
  };

  return (
    <Tag
      onKeyDown={handleKeyDown}
      onKeyUp={onKeyUp}
      onPaste={handlePaste}
      onFocus={onFocus}
      onBlur={onBlur}
      onInput={onInput}
      contentEditable={editable}
      placeholder={placeholder}
      suppressContentEditableWarning={editable}
      data-value={editable ? children : undefined}
      className={classNames}
      style={{ ...style, ...fontStyle }}
      {...props}
    >
      {children}
    </Tag>
  );
};
