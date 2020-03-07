import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { warning } from '../../utils';
import './Header.style.scss';

export interface HeaderProps {
  children?: React.ReactNode;
  level: number;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: string;
  editable?: boolean;
  placeholder?: string;
  onChange?: React.KeyboardEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  children,
  level,
  strong = false,
  underline = false,
  delete: del = false,
  color,
  editable,
  placeholder,
  onChange,
  className = '',
  style,
}: HeaderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-header`;
  const classNames = classnames(classPrefix, className);

  let Tag = `h${level}` as keyof JSX.IntrinsicElements;
  if (level < 1 || level > 4) {
    warning('Header', 'Header only accept `1 | 2 | 3 | 4` as `level` value.');
    Tag = 'h1' as keyof JSX.IntrinsicElements;
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

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    onChange?.(event);
  };

  const onPaste = (event: React.ClipboardEvent) => {
    event.preventDefault();

    const pastedData = event.clipboardData.getData('text/plain');
    window.document.execCommand('insertText', false, pastedData);
  };

  return (
    <Tag
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      contentEditable={editable}
      placeholder={placeholder}
      suppressContentEditableWarning={editable}
      className={classNames}
      style={{ ...style, ...fontStyle }}
    >
      {children}
    </Tag>
  );
};
