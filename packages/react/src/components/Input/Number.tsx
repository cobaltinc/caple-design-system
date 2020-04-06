import React from 'react';
import Cleave from 'cleave.js';
import Input, { InputProps } from './Input';
import './Input.style.scss';

export type InputNumberThousandsGroupStyle = 'thousand' | 'lakh' | 'wan' | 'none';

export interface InputNumberProps extends InputProps {
  value?: number;
  defaultValue?: number;
  group?: InputNumberThousandsGroupStyle;
}

export default ({ group = 'thousand', ...props }: InputNumberProps) => {
  const { useRef, useEffect } = React;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      // tslint:disable-next-line: no-unused-expression
      new Cleave(inputRef.current, {
        numeral: true,
        numeralThousandsGroupStyle: group,
      });
    }
  }, [inputRef]);

  return <Input ref={inputRef} type={group === 'none' ? 'number' : 'text'} {...props} />;
};
