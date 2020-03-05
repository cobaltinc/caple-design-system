import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import { FadeTransition } from '../_transition';
import './Modal.style.scss';

interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  visible?: boolean;
  closable?: boolean;
  zIndex?: number;
  onClose?(): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, width = 500, visible = false, closable = true, zIndex = 1000, onClose, className = '', style }: ModalProps) => {
  const { useContext, useEffect, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-modal`;
  const classNames = classnames(classPrefix, className);

  const [show, setShow] = useState(visible);

  const dimStyle = {
    display: show ? 'block' : 'none',
    zIndex,
  };

  const containerStyle = {
    width,
    zIndex: zIndex + 1,
  };

  useEffect(() => {
    if (visible) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 240);
    }
  }, [visible]);

  return (
    <FadeTransition show={visible}>
      <div className={`${classPrefix}--dim`} style={dimStyle} onClick={onClose}>
        <div className={classNames} style={{ ...style, ...containerStyle }} onClick={e => e.stopPropagation()}>
          <span onClick={onClose} className={`${classPrefix}--close`}>
            <Icon type="close" size={20} />
          </span>
          {children}
        </div>
      </div>
    </FadeTransition>
  );
};
