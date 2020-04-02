import React from 'react';
import { ProgressIndicator } from '../src';

export default {
  title: 'Component|ProgressIndicator',
};

export const Default = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <ProgressIndicator active={2}>
        <ProgressIndicator.Item title="Order" />
        <ProgressIndicator.Item title="Payment" />
        <ProgressIndicator.Item title="Delivery" />
        <ProgressIndicator.Item title="Arrive" />
      </ProgressIndicator>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <ProgressIndicator active={2} loading>
        <ProgressIndicator.Item title="Order" />
        <ProgressIndicator.Item title="Payment" />
        <ProgressIndicator.Item title="Delivery" />
        <ProgressIndicator.Item title="Arrive" />
      </ProgressIndicator>
    </div>
  );
};
