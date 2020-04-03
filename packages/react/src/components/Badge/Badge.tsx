import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { Red } from '@caple-ui/colors';
import './Badge.style.scss';

export interface BadgeProps {
  children?: React.ReactNode;
  count?: number;
  showZero?: boolean;
  maxCount?: number;
  dot?: boolean;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  children,
  count,
  showZero = false,
  maxCount,
  dot = false,
  backgroundColor = Red,
  textColor = '#fff',
  className = '',
  style,
}: BadgeProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-badge`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--dot`]: dot,
  });

  const colorStyle = {
    backgroundColor,
    color: textColor,
  };

  let badge = null;
  if (count) {
    badge = (
      <sup className={classNames} style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </sup>
    );
  } else {
    if (count !== undefined) {
      badge = showZero ? (
        <sup className={classNames} style={colorStyle}>
          0
        </sup>
      ) : null;
    } else if (dot) {
      badge = <sup className={classNames} style={colorStyle} />;
    }
  }

  return (
    <span className={`${classPrefix}--container`} style={style}>
      {children}
      {badge}
    </span>
  );
};
