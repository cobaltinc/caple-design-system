import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Popover.style.scss';
import ReactDOM from 'react-dom';

export type PlacementType =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left-top'
  | 'left'
  | 'left-bottom'
  | 'right-top'
  | 'right'
  | 'right-bottom'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

export type PopoverTriggerType = 'hover' | 'click' | 'focus';

const getPositionStyle = (target: HTMLElement, placement: PlacementType) => {
  let top = 0;
  let left = 0;
  const rect = target.getBoundingClientRect();
  const splited = placement.split('-');

  if (splited[0] === 'top') top = rect.top + window.pageYOffset;
  else if (splited[0] === 'right') left = rect.left + rect.width;
  else if (splited[0] === 'bottom') top = rect.top + rect.height + window.pageYOffset;
  else if (splited[0] === 'left') left = rect.left;

  if (splited[1] === 'top') top = rect.top + window.pageYOffset;
  else if (splited[1] === 'right') left = rect.left + rect.width;
  else if (splited[1] === 'bottom') top = rect.top + rect.height + window.pageYOffset;
  else if (splited[1] === 'left') left = rect.left;
  else {
    if (splited[0] === 'top' || splited[0] === 'bottom') left = rect.left + rect.width / 2;
    else if (splited[0] === 'left' || splited[0] === 'right') top = rect.top + rect.height / 2 + window.pageYOffset;
  }

  return { top, left };
};

export interface PopoverProps {
  children: React.ReactElement;
  content: React.ReactNode;
  placement?: PlacementType;
  defaultVisible?: boolean;
  onVisibleChange?(visible: boolean): void;
  trigger?: PopoverTriggerType;
  width?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  children,
  content,
  trigger = 'click',
  placement = 'bottom',
  defaultVisible = false,
  onVisibleChange,
  width,
  disabled,
  className = '',
  style,
}: PopoverProps) => {
  const { useState, useEffect, useContext, useRef } = React;
  const [visible, setVisible] = useState(defaultVisible);
  const targetRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-popover`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: visible,
  });

  const handleMouseEnter = trigger === 'hover' ? () => setVisible(true) : undefined;
  const handleMouseLeave = trigger === 'hover' ? () => setVisible(false) : undefined;
  const handleClick = trigger === 'click' ? () => setVisible(!visible) : undefined;
  const handleClickOutside =
    trigger === 'click'
      ? (event: MouseEvent) => {
          if (
            targetRef.current &&
            !targetRef.current.contains(event.target as HTMLElement) &&
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as HTMLElement)
          ) {
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

  useEffect(() => {
    onVisibleChange?.(visible);
  }, [visible]);

  useEffect(() => {
    setVisible(defaultVisible);
  }, [defaultVisible]);

  useEffect(() => {
    if (visible === false) return;

    const contentStyle: React.CSSProperties = {
      width: width ? width : 'auto',
      whiteSpace: width ? 'normal' : 'nowrap',
      pointerEvents: visible ? 'all' : 'none',
    };
    let positionStyle = {
      top: 0,
      left: 0,
    };
    if (targetRef.current) {
      positionStyle = getPositionStyle(targetRef.current!!, placement);
    }

    const el = document.createElement('div');
    if (!disabled) {
      ReactDOM.render(
        <div ref={wrapperRef} className={classNames} style={{ ...style, ...positionStyle }}>
          <svg className={classnames(placement, `${classPrefix}--caret`)} width="24" height="12" viewBox="0 0 24 12">
            <path fill="white" strokeWidth="1px" stroke="#EAEAEA" fillRule="evenodd" d="M20 12l-8-8-12 12" />
          </svg>
          <div className={classnames(placement, `${classPrefix}--content`)} style={contentStyle}>
            {content}
          </div>
        </div>,
        el,
      );
    }

    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [targetRef, visible, disabled, content]);

  return React.cloneElement(children, {
    ref: targetRef,
    onClick: (e: any) => {
      (children.props as any).onClick?.(e);
      handleClick?.();
    },
    onFocus: (e: any) => {
      (children.props as any).onFocus?.(e);
      handleFocus?.();
    },
    onBlur: (e: any) => {
      (children.props as any).onBlur?.(e);
      handleBlur?.();
    },
    onMouseEnter: (e: any) => {
      (children.props as any).onMouseEnter?.(e);
      handleMouseEnter?.();
    },
    onMouseLeave: (e: any) => {
      (children.props as any).onMouseLeave?.(e);
      handleMouseLeave?.();
    },
  });
};
