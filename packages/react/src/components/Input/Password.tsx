import React from 'react';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Input, { InputProps } from './Input';
import './Input.style.scss';

export interface InputPasswordProps extends InputProps {
  toggle?: boolean;
}

export default ({ toggle, ...props }: InputPasswordProps) => {
  const { useContext, useState } = React;
  const classPrefix = `${useContext(ConfigContext).prefix}-input`;

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Input
      type={visible ? 'text' : 'password'}
      subfix={
        toggle ? (
          <Icon type={visible ? 'gear' : 'close'} className={`${classPrefix}--password-toggle`} color="#919EAB" onClick={handleClick} />
        ) : (
          undefined
        )
      }
      {...props}
    />
  );
};
