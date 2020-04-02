import React from 'react';
import { Callout, Icon } from '../src';

export default {
  title: 'Component|Callout',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, width: 400 }}>
      <Callout icon={<Icon type="alert-circle" color="#f1c830" />}>Authorization required!</Callout>
    </div>
  );
};
