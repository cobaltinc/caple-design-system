import React from 'react';
import Cleave from 'cleave.js';
import Input, { InputProps } from './Input';
import './Input.style.scss';

export type InputPhoneNumberRegionCode = 'thousand' | 'lakh' | 'wan' | 'none';

export interface InputPhoneNumberProps extends InputProps {
  regionCode: string;
  delimiter?: string;
}

export default ({ regionCode, delimiter = '-', ...props }: InputPhoneNumberProps) => {
  const { useRef, useEffect } = React;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      require(`cleave.js/dist/addons/cleave-phone.${regionCode.toLowerCase()}`);
      // tslint:disable-next-line: no-unused-expression
      new Cleave(inputRef.current, {
        phone: true,
        phoneRegionCode: regionCode,
        delimiter,
      });
    }
  }, [inputRef]);

  return <Input ref={inputRef} type="tel" {...props} />;
};
