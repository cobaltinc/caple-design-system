import React, { CSSProperties } from 'react';
import { Transition } from 'react-transition-group';

interface Props {
  children: React.ReactNode;
  open?: boolean;
}

const getHeight = (node: HTMLElement) => {
  const child = node && node.children[0];
  return child ? child.getBoundingClientRect().height : 0;
}

export default ({ children, open }: Props) => {
  const { useContext, useState, useRef, useEffect } = React;
  const defaultStyle = {
    transition: `height 240ms cubic-bezier(0, 0, 0.25, 1)`,
    height: 'auto',
  }

  const [height, setHeight] = useState<number | string>('auto');
  const element = useRef(null);

  useEffect(() => {
    if (open && element) {
      setHeight(getHeight(element.current!));
    } else {
      setHeight(getHeight(element.current!));
    }
  });

  let transitionStyles: { [id: string]: CSSProperties } = {};
  if (open) {
    transitionStyles = {
      entering: { height: 0 },
      entered:  { height: 0 },
      exiting:  { height },
      exited:  { height },
    };
  } else {
    transitionStyles = {
      entering: { height },
      entered:  { height },
      exiting:  { height: 0 },
      exited:  { height: 0 },
    };
  }

  const handleExited = () => {
    if (open) {
      setHeight('auto');
    } else {
      setHeight(0);
    }
  };

  return (
    <Transition timeout={240} onEnter={handleExited} onExited={handleExited}>
      { state => (
        <div ref={element} style={{ ...defaultStyle, ...transitionStyles[state], overflow: (height !== 'auto' ?  'hidden' : undefined) }}>
          {children}
        </div>
      )}
    </Transition>
  );
};
