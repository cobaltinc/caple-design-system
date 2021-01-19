import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import { useTimeout } from '../_hook';
import './Toast.style.scss';
import { useEffect } from 'react';
import * as Colors from '@caple-ui/colors';

export type ToastType = 'default' | 'success' | 'error' | 'warning';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  close?: boolean;
  onDone?(): void;
}

export default ({ message, type = 'default', duration, close = false, onDone }: ToastProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-toast`;
  const classNames = classnames(classPrefix, `${classPrefix}--type-${type}`);

  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(true);
  }, []);

  useTimeout(() => {
    if (!close) {
      setShow(false);
      setTimeout(() => {
        onDone?.();
      }, 400);
    }
  }, duration);

  const iconType = type === 'default' ? 'alert-circle' : type === 'success' ? 'check-circle' : type === 'error' ? 'close-circle' : 'alert-circle';
  const iconColor = type === 'default' ? '#D3D9E2' : type === 'success' ? '#5D6BC5' : type === 'error' ? '#BF0711' : '#FFCC33';

  return (
    <div className={classnames(`${classPrefix}--container`, { [`${classPrefix}--container-active`]: show })}>
      <div className={classNames}>
        {!close ? <div className={`${classPrefix}--progress`} style={{ animationDuration: `${duration}ms` }} /> : null}
        <Icon type={iconType} color={iconColor} size={38} className={`${classPrefix}--icon`} />
        <span className={`${classPrefix}--message`}>{message}</span>
        {close ? (
          <div onClick={onDone}>
            <Icon type="close" color={Colors.SkyDark} size={18} className={`${classPrefix}--icon--close`} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
