import React from 'react';
import {
  Toggle,
  Spacer,
} from '../src';

export default {
  title: 'Toggle',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Toggle />
    </div>
  )
};

export const Size = () => {
  return (
    <div style={{padding: 30}}>
      <Toggle size="small" />
      <Spacer type="vertical" size={20} />
      <Toggle size="normal" />
      <Spacer type="vertical" size={20} />
      <Toggle size="large" />
    </div>
  )
};