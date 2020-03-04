import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Text.style.scss';

export type TextSizeType = 'small' | 'normal' | 'large'

export interface TextProps {
  children: React.ReactNode;
  size?: TextSizeType | number;
  paragraph?: boolean;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  mark?: boolean;
  code?: boolean;
  color?: string;
  editable?: boolean;
  placeholder?: string;
  onChange?: React.KeyboardEventHandler<HTMLParagraphElement>;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, size, paragraph = false, strong = false, underline = false, 
                  delete: del = false, mark = false, code = false, color, 
                  editable, placeholder, onChange, className = '', style }: TextProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-text`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--size-${size}`]: size !== undefined && typeof size === 'string'
  });
  const Tag = paragraph ? 'p' : 'span';

  const fontStyle: React.CSSProperties = {
    fontWeight: strong ? 'bold' : 'normal',
    textDecoration: underline ? 'underline' : 'none',
  }

  if (color) {
    fontStyle.color = color;
  }
  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }
  if (del) {
    children = <del>{children}</del>;
  }

  if (typeof size === 'number') {
    fontStyle.fontSize = size;
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
    onChange?.(event)
  };

  const onPaste = (event: React.ClipboardEvent) => {
    event.preventDefault();

    const pastedData = event.clipboardData.getData('text/plain');
    window.document.execCommand('insertText', false, pastedData);
  }

  return (
    <Tag onKeyDown={onKeyDown} onPaste={onPaste} contentEditable={editable} placeholder={placeholder} suppressContentEditableWarning={editable} className={classNames} style={{ ...style, ...fontStyle }}>
      {children}
    </Tag>
  );
};
