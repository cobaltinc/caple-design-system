import React from 'react';
import { Alert, Spacer } from '../src';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Component|Alert',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Alert type="info" description="Caple is securities management system." />
    </div>
  );
};

export const Type = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer type="vertical">
        <Alert type="success" description="I'm success type." />
        <Alert type="info" description="I'm info type." />
        <Alert type="warning" description="I'm warning type." />
        <Alert type="error" description="I'm error type." />
      </Spacer>
    </div>
  );
};

export const WithTitle = () => {
  return (
    <div style={{ padding: 30 }}>
      <Alert title="Completed!" type="success" description="We completed owr work." />
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer type="vertical">
        <Alert type="error" title="Danger!" description="Do you really want to delete this file?" showIcon />
        <Alert type="error" description="Do you really want to delete this file?" showIcon />
      </Spacer>
    </div>
  );
};

export const WithClosable = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer type="vertical">
        <Alert type="warning" description="Validation failed." showIcon closable onClose={action('close')} />
      </Spacer>
    </div>
  );
};
