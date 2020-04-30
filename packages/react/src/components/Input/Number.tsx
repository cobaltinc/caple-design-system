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

export default React.forwardRef<HTMLInputElement | null, InputNumberProps>(({ group = 'thousand', ...props }: InputNumberProps, ref) => {
  const { useRef, useEffect, useImperativeHandle } = React;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current, [inputRef]);

  useEffect(() => {
    if (inputRef.current) {
      // tslint:disable-next-line: no-unused-expression
      new Cleave(inputRef.current, {
        numeral: true,
        numeralThousandsGroupStyle: group,
      });
    }
  }, [inputRef, props.value]);

  return <Input ref={inputRef} type={group === 'none' ? 'number' : 'text'} {...props} />;
});
