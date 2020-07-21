import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { IconProps } from '../Icon/Icon';
import Spacer from '../Spacer';

export type StateIconType = {
  activeIcon?: React.ReactElement<IconProps>;
  inactiveIcon?: React.ReactElement<IconProps>;
  disabledIcon?: React.ReactElement<IconProps>;
};

export interface TabItemProps {
  children?: React.ReactNode;
  title: string;
  icon?: React.ReactElement<IconProps> | StateIconType;
  subtitle?: string;
  key: string;
  disabled?: boolean;
  active?: boolean;
  onClick?(): void;
  className?: string;
  style?: React.CSSProperties;
}

const TabItem = React.forwardRef<HTMLDivElement, TabItemProps>(
  ({ title, icon, subtitle, active, key, disabled, onClick, className = '', style, ...props }: TabItemProps, ref) => {
    const { useContext } = React;
    const { prefix } = useContext(ConfigContext);
    const classPrefix = `${prefix}-tab-item`;
    const classNames = classnames(classPrefix, className, {
      [`${classPrefix}--active`]: active,
      [`${classPrefix}--disabled`]: disabled,
    });

    return (
      <div ref={ref} className={classNames} style={style} onClick={onClick} {...props}>
        <div className={`${classPrefix}--wrapper`}>
          <Spacer size={4}>
            {icon && 'activeIcon' in icon
              ? disabled && icon.disabledIcon
                ? React.cloneElement(icon.disabledIcon, { size: 17 })
                : active && icon.activeIcon
                ? React.cloneElement(icon.activeIcon, { size: 17 })
                : icon.inactiveIcon
                ? React.cloneElement(icon.inactiveIcon, { size: 17 })
                : null
              : React.isValidElement(icon)
              ? React.cloneElement(icon, { size: 17 })
              : null}
            <span className={`${classPrefix}--title`}>{title}</span>
          </Spacer>
          {subtitle ? <div className={`${classPrefix}--subtitle`}>{subtitle}</div> : null}
        </div>
      </div>
    );
  },
);

export default TabItem;
