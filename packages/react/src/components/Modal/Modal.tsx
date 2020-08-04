import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import { FadeTransition } from '../_transition';
import './Modal.style.scss';
import ReactDOM from 'react-dom';
import { isServer } from '../../utils';
import Header from '../Header';

interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  visible?: boolean;
  closable?: boolean;
  zIndex?: number;
  onClose?(): void;
  className?: string;
  header?: string;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  footerClassName?: string;
  footerStyle?: React.CSSProperties;
}

export default ({
  children,
  width = 500,
  height,
  visible = false,
  closable = true,
  zIndex = 1000,
  onClose,
  className = '',
  header,
  footer,
  style,
  headerClassName,
  headerStyle,
  footerClassName,
  footerStyle,
}: ModalProps) => {
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
    height,
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

  if (isServer) {
    return null;
  }

  const el = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <FadeTransition show={visible}>
      <div className={`${classPrefix}--dim`} style={dimStyle} onClick={onClose}>
        <div className={classNames} style={{ ...style, ...containerStyle }} onClick={e => e.stopPropagation()}>
          {header ? (
            <Header level={3} className={classnames(`${classPrefix}--header`, headerClassName)} style={headerStyle}>
              {header}
            </Header>
          ) : null}
          {closable ? (
            <span onClick={onClose} className={`${classPrefix}--close`}>
              <Icon type="close" color="#5d6bc5" size={16} />
            </span>
          ) : null}
          {children}
          {footer ? (
            <div className={classnames(`${classPrefix}--footer`, footerClassName)} style={footerStyle}>
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </FadeTransition>,
    el,
  );
};
