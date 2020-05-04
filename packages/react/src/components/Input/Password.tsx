import React from 'react';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Input, { InputProps } from './Input';
import './Input.style.scss';

export interface InputPasswordProps extends InputProps {
  toggle?: boolean;
}

export default React.forwardRef<HTMLInputElement, InputPasswordProps & any>(({ toggle, ...props }, ref) => {
  const { useContext, useState } = React;
  const classPrefix = `${useContext(ConfigContext).prefix}-input`;

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Input
      ref={ref}
      type={visible ? 'text' : 'password'}
      subfix={
        toggle ? (
          <Icon type={visible ? 'eye' : 'eye-close'} className={`${classPrefix}--password-toggle`} color="#919EAB" onClick={handleClick} />
        ) : (
          undefined
        )
      }
      {...props}
    />
  );
});
