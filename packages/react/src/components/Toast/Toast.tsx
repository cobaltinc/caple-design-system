import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import { useTimeout } from '../_hook';
import { FadeTransition } from '../_transition';
import './Toast.style.scss';

export type ToastType = 'default' | 'success' | 'error' | 'warning'

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

  const [hide, setHide] = useState(false);
  useTimeout(() => {
    setHide(true);
  }, duration);

  const iconType = type === 'default' ? 'alert-circle' : type === 'success' ? 'check-circle' : type === 'error' ? 'close-circle' : 'alert-circle';
  const iconColor = type === 'default' ? '#D3D9E2' : type === 'success' ? '#5D6BC5' : type === 'error' ? '#BF0711' : '#FFCC33';

  return (
    <FadeTransition show={!hide} onExited={() => onDone?.()}>
      <div className={`${classPrefix}--container`}>
        <div className={classNames}>
          <Icon type={iconType} color={iconColor} size={38} className={`${classPrefix}--icon`} />
          <span className={`${classPrefix}--message`}>
            {message}
          </span>
        </div>
      </div>
    </FadeTransition>
  );
};
