import React from 'react';
import { Toast, Button, Spacer } from '../src';

export default {
  title: 'Toast',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button onClick={() => Toast.show('Hello')}>Click me</Button>
    </div>
  );
};

export const Type = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button onClick={() => Toast.show('Default')}>Default</Button>
      <Spacer type="vertical" size={20} />
      <Button onClick={() => Toast.success('Success')}>Success</Button>
      <Spacer type="vertical" size={20} />
      <Button onClick={() => Toast.error('Error')}>Error</Button>
    </div>
  );
};
