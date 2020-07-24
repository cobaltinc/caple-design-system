import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Scroll.style.scss';

export interface ScrollProps {
  children: React.ReactNode;
  height: number;
  autoHide?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';

  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
};

export default ({ children, height, autoHide = true, className = '', style, ...props }: ScrollProps) => {
  const { useContext, useEffect, useRef, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-scroll`;
  const classNames = classnames(classPrefix, className);

  const contentRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    clientHeight: 0,
    scrollTop: 0,
    scrollHeight: 0,
    visible: false,
  });

  const handleScroll = () => {
    if (contentRef.current) {
      const clientHeight = contentRef.current.clientHeight;
      const scrollTop = contentRef.current.scrollTop;
      const scrollHeight = contentRef.current.scrollHeight;
      setState({
        clientHeight,
        scrollTop,
        scrollHeight,
        visible: state.visible,
      });
    }
  };

  useEffect(() => {
    handleScroll();
  }, [contentRef]);

  const verticalScrollBarHeight = (state.clientHeight / state.scrollHeight) * (state.clientHeight - 4);
  const verticalScrollBarTop = (state.scrollTop / state.scrollHeight) * (state.clientHeight - 4);

  const verticalScrollBarStyle = {
    height: `${verticalScrollBarHeight}px`,
    transform: `translateY(${verticalScrollBarTop || 0}px)`,
  };

  const handleMouseEnter = autoHide ? () => setState({ ...state, visible: true }) : undefined;
  const handleMouseLeave = autoHide ? () => setState({ ...state, visible: false }) : undefined;

  const scrollBarWidth = getScrollbarWidth();

  return (
    <div
      onScroll={handleScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames}
      style={{ ...style, height }}
      {...props}
    >
      <div ref={contentRef} className={`${classPrefix}--content`} style={{ marginRight: -scrollBarWidth, marginBottom: -scrollBarWidth }}>
        {children}
      </div>
      <div className={`${classPrefix}--vertical`} style={{ opacity: state.visible ? 1 : 0 }} hidden={state.scrollHeight <= state.clientHeight}>
        <div className={`${classPrefix}--scroll-bar`} style={verticalScrollBarStyle} />
      </div>
    </div>
  );
};
