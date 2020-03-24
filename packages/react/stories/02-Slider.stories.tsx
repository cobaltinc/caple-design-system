import React from 'react';
import { Slider } from '../src';

export default {
  title: 'Component|Slider',
};

export const Default = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <Slider min={0} max={100} />
    </div>
  );
};

export const Step = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <Slider min={0} max={100} step={5} />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <Slider min={0} max={100} defaultValue={40} disabled />
    </div>
  );
};
