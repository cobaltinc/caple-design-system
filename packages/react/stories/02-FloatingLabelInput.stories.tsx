import React from 'react';
import { FloatingLabelInput } from '../src';

export default {
  title: 'Component|FloatingLabelInput',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <FloatingLabelInput.Text label="Title" />
    </div>
  );
};
