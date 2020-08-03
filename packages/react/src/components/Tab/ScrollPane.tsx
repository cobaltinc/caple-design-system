import React from 'react';
import ConfigContext from '../_config/ConfigContext';
import './Tab.style.scss';
import Icon from '../Icon';
import * as Colors from '@caple-ui/colors';

export interface ScrollLeftProps {
  type: 'left' | 'right';
  onClick(): void;
}

export default ({ type, onClick }: ScrollLeftProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tab--scroll`;

  return (
    <div className={classPrefix} onClick={onClick}>
      <Icon type={`chevron-${type}`} color={Colors.Indigo} />
    </div>
  );
};
