import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Dropdown.style.scss';
import ReactDOM from 'react-dom';

export type PlacementType = 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';

const getPositionStyle = (target: HTMLElement, placement: PlacementType) => {
  let top = 0;
  let left = 0;
  const rect = target.getBoundingClientRect();
  const splited = placement.split('-');

  if (splited[0] === 'top') top = rect.top - 8;
  else if (splited[0] === 'bottom') top = rect.top + rect.height + 8;

  if (splited[1] === 'right') left = rect.left + rect.width;
  else if (splited[1] === 'left') left = rect.left;
  else {
    if (splited[0] === 'top' || splited[0] === 'bottom') left = rect.left + rect.width / 2;
    else if (splited[0] === 'left' || splited[0] === 'right') top = rect.top + rect.height / 2;
  }

  return { top, left };
};

export interface DropdownProps {
  children: React.ReactElement;
  placement?: PlacementType;
  menu: React.ReactNode;
  defaultVisible?: boolean;
  onVisibleChange?(visible: boolean): void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  children,
  placement = 'bottom-left',
  menu,
  defaultVisible = false,
  onVisibleChange,
  disabled,
  className = '',
  style,
}: DropdownProps) => {
  const { useState, useEffect, useContext, useRef } = React;
  const [visible, setVisible] = useState(defaultVisible);
  const targetRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-dropdown`;
  const classNames = classnames(classPrefix, className, placement, {
    [`${classPrefix}--active`]: visible,
  });

  const handleClick = () => setVisible(!visible);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      targetRef.current &&
      !targetRef.current.contains(event.target as HTMLElement) &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as HTMLElement)
    ) {
      setVisible(false);
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
    onVisibleChange?.(visible);
  }, [visible]);

  useEffect(() => {
    setVisible(defaultVisible);
  }, [defaultVisible]);

  useEffect(() => {
    if (visible === false) return;

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
          {menu}
        </div>,
        el,
      );
    }

    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [targetRef, visible, disabled, menu]);

  return React.cloneElement(children, {
    ref: targetRef,
    onClick: (e: any) => {
      (children.props as any).onClick?.(e);
      handleClick?.();
    },
  });
};
