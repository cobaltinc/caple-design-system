import React from 'react';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Input, { FloatingLabelInputProps } from './Input';
import { InkLightest } from '@caple-ui/colors';
import './FloatingLabelInput.style.scss';

export interface InputPasswordProps extends FloatingLabelInputProps {
  toggle?: boolean;
}

export default React.forwardRef<HTMLInputElement, InputPasswordProps>(({ toggle, ...props }, ref) => {
  const { useContext, useState } = React;
  const classPrefix = `${useContext(ConfigContext).prefix}-floating-label-input`;

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
          <Icon type={visible ? 'eye' : 'eye-close'} className={`${classPrefix}--password-toggle`} color={InkLightest} onClick={handleClick} />
        ) : (
          undefined
        )
      }
      {...props}
    />
  );
});
