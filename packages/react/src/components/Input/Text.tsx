import React from 'react';
import Cleave from 'cleave.js';
import Input, { InputProps } from './Input';
import './Input.style.scss';
import raf from 'raf';

export interface InputTextProps extends InputProps {
  blocks?: number[];
  delimiter?: string;
  uppercase?: boolean;
  lowercase?: boolean;
}

export default React.forwardRef<HTMLInputElement | null, InputTextProps>(
  ({ blocks, delimiter, uppercase, lowercase, ...props }: InputTextProps, ref) => {
    const { useRef, useEffect, useImperativeHandle } = React;
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current, [inputRef]);

    useEffect(() => {
      if (inputRef.current && blocks) {
        raf(() => {
          // tslint:disable-next-line: no-unused-expression
          new Cleave(inputRef.current!!, {
            blocks,
            delimiter,
            uppercase,
            lowercase,
          });
        });
      }
    }, [inputRef]);

    return <Input ref={inputRef} type="text" {...props} />;
  },
);
