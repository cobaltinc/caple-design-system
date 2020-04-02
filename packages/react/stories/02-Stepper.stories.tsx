import React from 'react';
import { Stepper } from '../src';

export default {
  title: 'Component|Stepper',
};

export const Default = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <Stepper active={2}>
        <Stepper.Item title="Order" />
        <Stepper.Item title="Payment" />
        <Stepper.Item title="Delivery" />
        <Stepper.Item title="Arrive" />
      </Stepper>
    </div>
  );
};
