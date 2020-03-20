import React from 'react';
import { Spacer, Button } from '../src';

export default {
  title: 'Spacer',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button>Button 1</Button>
      <Spacer size={60} style={{ border: '10px dashed black' }} />
      <Button>Button 2</Button>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button>Button 1</Button>
      <Spacer type="vertical" size={60} style={{ border: '10px dashed black' }} />
      <Button>Button 2</Button>
    </div>
  );
};
