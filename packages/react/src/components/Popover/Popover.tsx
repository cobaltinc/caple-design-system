import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { camelToSnake } from '../../utils';
import './Popover.style.scss';

// TODO: child node의 width가 가변 단위이거나 block일 경우 width가 제대로 반영이 안됨. 수정해야 함.

export type PlacementType = 
  'topLeft' | 
  'top' | 
  'topRight' | 
  'leftTop' | 
  'left' | 
  'leftBottom' | 
  'rightTop' | 
  'right' | 
  'rightBottom' | 
  'bottomLeft' | 
  'bottom' | 
  'bottomRight';

export type PopoverTriggerType =
  'hover' |
  'click' |
  'focus'

export interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: PlacementType;
  trigger?: PopoverTriggerType;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, content, trigger = 'click', placement = 'bottom', width, className = '', style }: PopoverProps) => {
  const { useState, useEffect, useContext, useRef } = React;
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-popover`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: visible
  });

  const handleMouseEnter = trigger === 'hover' ? () => setVisible(true) : undefined;
  const handleMouseLeave = trigger === 'hover' ? () => setVisible(false) : undefined;
  const handleClick = trigger === 'click' ? () => setVisible(!visible) : undefined;
  const handleClickOutside = trigger === 'click' ? (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
      setVisible(false);
    }
  } : undefined;
  const handleFocus = trigger === 'focus' ? () => setVisible(true) : undefined;
  const handleBlur = trigger === 'focus' ? () => setVisible(false) : undefined;

  useEffect(() => {
    if (handleClickOutside) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => { document.removeEventListener('mousedown', handleClickOutside); };
    }
  }, [handleClickOutside]);

  const contentStyle: React.CSSProperties = {
    width: width ? width : 'auto',
    whiteSpace: width ? 'normal' : 'nowrap',
    pointerEvents: visible ? 'all' : 'none'
  };

  return (
    <div ref={wrapperRef} className={classNames} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
      <span className={`${classPrefix}--host`} onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur}>
        {children}
      </span>
      <svg className={classnames(camelToSnake(placement), `${classPrefix}--caret`)} width="24" height="12" viewBox="0 0 24 12">
        <path fill="white" strokeWidth="1px" stroke="#EAEAEA" fillRule="evenodd" d="M20 12l-8-8-12 12" />
      </svg>
      <div className={classnames(camelToSnake(placement), `${classPrefix}--content`)} style={contentStyle}>
        {content}
      </div>
    </div>
  );
};
