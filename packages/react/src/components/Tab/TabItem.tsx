import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';

export interface TabItemProps {
  children?: React.ReactNode;
  title: string;
  disabled?: boolean;
  active?: boolean;
  onClick?(): void;
  className?: string;
  style?: React.CSSProperties;
}

const TabItem = React.forwardRef<HTMLDivElement, TabItemProps>(
  ({ title, active, disabled, onClick, className = '', style, ...props }: TabItemProps, ref) => {
    const { useContext } = React;
    const { prefix } = useContext(ConfigContext);
    const classPrefix = `${prefix}-tab-item`;
    const classNames = classnames(classPrefix, className, {
      [`${classPrefix}--active`]: active,
      [`${classPrefix}--disabled`]: disabled,
    });

    return (
      <div ref={ref} className={classNames} style={style} onClick={onClick} {...props}>
        {title}
      </div>
    );
  },
);

export default TabItem;
