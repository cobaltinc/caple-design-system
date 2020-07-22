import React from 'react';
import Cleave from 'cleave.js';
import Input, { FloatingLabelInputProps } from './Input';
import './Input.style.scss';

export type InputPhoneNumberRegionCode = 'thousand' | 'lakh' | 'wan' | 'none';

export interface InputPhoneNumberProps extends FloatingLabelInputProps {
  regionCode: string;
  delimiter?: string;
}

export default React.forwardRef<HTMLInputElement | null, InputPhoneNumberProps>(({ regionCode, delimiter = '-', ...props }, ref) => {
  const { useRef, useEffect, useImperativeHandle } = React;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current, [inputRef]);

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
});
