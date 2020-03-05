import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { camelToKebab } from '../../utils';
import './Tooltip.style.scss';

// TODO: child node의 width가 가변 단위이거나 block일 경우 width가 제대로 반영이 안됨. 수정해야 함.

export type TooltipPlacementType =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'leftTop'
  | 'left'
  | 'leftBottom'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight';

export type ToolTipTriggerType = 'hover' | 'click' | 'focus';

export interface TooltipProps {
  children: React.ReactNode;
  placement?: TooltipPlacementType;
  trigger?: ToolTipTriggerType;
  title: string;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, placement = 'top', trigger = 'hover', title, width, className = '', style }: TooltipProps) => {
  const { useState, useContext, useEffect, useRef } = React;
  const [visible, setVisible] = useState(false);

  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tooltip`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: visible,
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = trigger === 'hover' ? () => setVisible(true) : undefined;
  const handleMouseLeave = trigger === 'hover' ? () => setVisible(false) : undefined;
  const handleClick = trigger === 'click' ? () => setVisible(!visible) : undefined;
  const handleClickOutside =
    trigger === 'click'
      ? (event: MouseEvent) => {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
            setVisible(false);
          }
        }
      : undefined;
  const handleFocus = trigger === 'focus' ? () => setVisible(true) : undefined;
  const handleBlur = trigger === 'focus' ? () => setVisible(false) : undefined;

  useEffect(() => {
    if (handleClickOutside) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [handleClickOutside]);

  const widthStyle: React.CSSProperties = {
    width: width ? width : 'auto',
    whiteSpace: width ? 'normal' : 'nowrap',
  };

  return (
    <div ref={wrapperRef} className={classNames} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
      <span className={`${classPrefix}--host`} onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur}>
        {children}
      </span>
      <svg className={classnames(camelToKebab(placement), `${classPrefix}--caret`)} width="24" height="12" viewBox="0 0 24 12">
        <path fill="#212B36" strokeWidth="1px" stroke="#EAEAEA" fillRule="evenodd" d="M20 12l-8-8-12 12" />
      </svg>
      <div className={classnames(camelToKebab(placement), `${classPrefix}--title`)} style={widthStyle}>
        {title}
      </div>
    </div>
  );
};
