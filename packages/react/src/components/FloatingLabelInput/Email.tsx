import React from 'react';
import Input, { FloatingLabelInputProps } from './Input';
import './Input.style.scss';

export interface InputEmailProps extends FloatingLabelInputProps {}

export default React.forwardRef<HTMLInputElement | null, InputEmailProps>(({ ...props }, ref) => {
  const { useRef, useImperativeHandle } = React;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current, [inputRef]);

  return <Input ref={inputRef} type="email" {...props} />;
});
