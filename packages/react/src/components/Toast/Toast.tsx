import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import { useTimeout } from '../_hook';
import './Toast.style.scss';
import { useEffect } from 'react';

export type ToastType = 'default' | 'success' | 'error' | 'warning';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  onDone?(): void;
}

export default ({ message, type = 'default', duration, onDone }: ToastProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-toast`;
  const classNames = classnames(classPrefix, `${classPrefix}--type-${type}`);

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  useTimeout(() => {
    setShow(false);

    setTimeout(() => {
      onDone?.();
    }, 400);
  }, duration);

  const iconType = type === 'default' ? 'alert-circle' : type === 'success' ? 'check-circle' : type === 'error' ? 'close-circle' : 'alert-circle';
  const iconColor = type === 'default' ? '#D3D9E2' : type === 'success' ? '#5D6BC5' : type === 'error' ? '#BF0711' : '#FFCC33';

  return (
    <div className={classnames(`${classPrefix}--container`, { [`${classPrefix}--container-active`]: show })}>
      <div className={classNames}>
        <div className={`${classPrefix}--progress`} style={{ animationDuration: `${duration}ms` }} />
        <Icon type={iconType} color={iconColor} size={38} className={`${classPrefix}--icon`} />
        <span className={`${classPrefix}--message`}>{message}</span>
      </div>
    </div>
  );
};
