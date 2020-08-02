import React from 'react';
import { FloatingLabelSelect } from '../src';

export default {
  title: 'Component|FloatingLabelSelect',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, width: 400 }}>
      <FloatingLabelSelect label="Title">
        <FloatingLabelSelect.Option id="id1" value="1">
          Option 1
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id2" value="2">
          Option 2
        </FloatingLabelSelect.Option>
        <FloatingLabelSelect.Option id="id3" value="3">
          Option 3
        </FloatingLabelSelect.Option>
      </FloatingLabelSelect>
    </div>
  );
};
