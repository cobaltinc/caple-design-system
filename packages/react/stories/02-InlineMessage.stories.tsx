import React from 'react';
import { InlineMessage, Spacer, Icon } from '../src';

export default {
  title: 'Component|InlineMessage',
};

export const Default = () => {
  return (
    <Spacer style={{ padding: 30 }}>
      <InlineMessage message="normal message" />
      <InlineMessage status="error" message="error message" />
      <InlineMessage status="invalid" message="invalid message" />
    </Spacer>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size="normal">
        <InlineMessage size="tiny" message="default message" />
        <InlineMessage size="small" icon={<Icon type="alert-circle" />} status="error" message="error message" />
        <InlineMessage size="normal" icon={<Icon type="alert-circle" />} status="invalid" message="invalid message" />
      </Spacer>
    </div>
  );
};
