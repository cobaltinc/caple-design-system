import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
import './InlineMessage.style.scss';

export type IconSizeType = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge';
export type StatusType = 'normal' | 'error' | 'invalid';

export interface TextProps {
  icon?: React.ReactElement<IconProps>;
  size?: IconSizeType;
  status?: StatusType;
  message: string;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ icon, size = 'normal', status = 'normal', message, className = '', style, ...props }: TextProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-inline-message`;

  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--${status}`]: status,
  });

  const messageSize = size === 'xlarge' ? 20 : size;

  return (
    <div className={classNames} {...props}>
      {icon ? React.cloneElement(icon, { size }) : null}
      <Text size={messageSize}>{message}</Text>
    </div>
  );
};
