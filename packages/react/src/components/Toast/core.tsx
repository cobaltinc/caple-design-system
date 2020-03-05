import React from 'react';
import ReactDOM from 'react-dom';
import { ToastType } from './Toast';
import ToastManager from './ToastManager';
import config from '../_config/config';

export type ToastOptionType = {
  type: ToastType;
  duration: number;
};

class ToastCore {
  createToast?(message: string, option: ToastOptionType): void;
  portal: Element | null = null;

  createPortal() {
    const portalId = `${config.prefix}-toast-portal`;
    const portalElement = document.getElementById(portalId);

    if (portalElement) {
      this.portal = portalElement;
      return;
    } else {
      this.portal = document.createElement('div');
      this.portal.id = portalId;
      document.body.appendChild(this.portal);
    }

    ReactDOM.render(
      // TODO: 다른 좋은 방법 찾기
      // tslint:disable-next-line: jsx-no-bind
      <ToastManager bind={this.bind.bind(this)} />,
      this.portal,
    );
  }

  bind(createToast: (message: string, option: ToastOptionType) => void) {
    this.createToast = createToast;
  }

  show(message: string, option: ToastOptionType = { type: 'default', duration: 4500 }) {
    this.createPortal();
    this.createToast?.(message, option);
  }

  success(message: string, duration = 4500) {
    this.show(message, { type: 'success', duration });
  }

  error(message: string, duration = 4500) {
    this.show(message, { type: 'error', duration });
  }

  warning(message: string, duration = 4500) {
    this.show(message, { type: 'warning', duration });
  }
}

const core = new ToastCore();
export default core;
