import React from 'react';
import { Step } from '../src';

export default {
  title: 'Component|Step',
};

export const Default = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <Step active={2}>
        <Step.Item title="Order" />
        <Step.Item title="Payment" />
        <Step.Item title="Delivery" />
        <Step.Item title="Arrive" />
      </Step>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <Step active={2} loading>
        <Step.Item title="Order" />
        <Step.Item title="Payment" />
        <Step.Item title="Delivery" />
        <Step.Item title="Arrive" />
      </Step>
    </div>
  );
};
