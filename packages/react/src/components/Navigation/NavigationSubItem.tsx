import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import './Navigation.style.scss';

export interface NavigationSubItemProps {
  title: string;
  key: string;
  disabled?: boolean;
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
  className?: string;
  style?: React.CSSProperties;
}

export interface NavigationSubItemRenderProps {
  active: boolean;
}

const NavigationSubItem = (_: NavigationSubItemProps) => {
  return null;
};

NavigationSubItem.render = ({ title, disabled, onClick, className = '', style, active }: NavigationSubItemProps & NavigationSubItemRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-navigation-sub-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: active,
    [`${classPrefix}--disabled`]: disabled,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <div className={classNames} style={style} onClick={handleClick}>
      <Text size={11} className={`${classPrefix}--title`}>
        {title}
      </Text>
    </div>
  );
};

export default NavigationSubItem;
