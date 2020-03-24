import React from 'react';
import { Divider, Text } from '../src';

export default {
  title: 'Component|Divider',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text>Up</Text>
      <Divider />
      <Text>Down</Text>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text>Left</Text>
      <Divider type="vertical" />
      <Text>Right</Text>
    </div>
  );
};
