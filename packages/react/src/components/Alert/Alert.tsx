import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import './Alert.style.scss';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  type: AlertType;
  title?: string;
  description: string;
  showIcon?: boolean;
  closable?: boolean;
  onClose?(): void;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLDivElement, AlertProps>(
  ({ type, title, description, showIcon, closable, onClose, className = '', style, ...props }, ref) => {
    const { useContext } = React;
    const { prefix } = useContext(ConfigContext);
    const classPrefix = `${prefix}-alert`;
    const classNames = classnames(`${classPrefix}`, `${classPrefix}--type-${type}`, className);

    const iconType = type === 'success' ? 'check-circle' : type === 'info' ? 'alert-circle' : type === 'warning' ? 'alert-circle' : 'close-circle';

    return (
      <div ref={ref} className={classNames} style={style} {...props}>
        {title ? (
          <>
            <div className={`${classPrefix}--wrapper`}>
              {showIcon ? <Icon type={iconType} size={18} className={`${classPrefix}--icon`} /> : null}
              <div className={`${classPrefix}--title`}>{title}</div>
              {closable ? <Icon type="close" size={12} onClick={onClose} className={`${classPrefix}--close`} /> : null}
            </div>
            <div className={`${classPrefix}--description`}>{description}</div>
          </>
        ) : (
          <div className={`${classPrefix}--wrapper`}>
            {showIcon ? <Icon type={iconType} size={18} className={`${classPrefix}--icon`} /> : null}
            <div className={`${classPrefix}--description`}>{description}</div>
            {closable ? <Icon type="close" size={12} onClick={onClose} className={`${classPrefix}--close`} /> : null}
          </div>
        )}
      </div>
    );
  },
);
