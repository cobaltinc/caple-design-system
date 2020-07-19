import React from 'react';
import { Link } from '../src';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Component|Link',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Link href="https://design.caple.ai" target="_blank">
        https://design.caple.ai
      </Link>
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 30 }}>
      <Link size="small" href="https://design.caple.ai" target="_blank">
        https://design.caple.ai
      </Link>

      <br />

      <Link size="normal" href="https://design.caple.ai" target="_blank">
        https://design.caple.ai
      </Link>

      <br />

      <Link size="large" href="https://design.caple.ai" target="_blank">
        https://design.caple.ai
      </Link>
    </div>
  );
};

export const Underline = () => {
  return (
    <div style={{ padding: 30 }}>
      <Link href="https://design.caple.ai" target="_blank" underline>
        https://design.caple.ai
      </Link>
    </div>
  );
};

export const Danger = () => {
  return (
    <div style={{ padding: 30 }}>
      <Link href="https://design.caple.ai" target="_blank" danger>
        https://design.caple.ai
      </Link>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30 }}>
      <Link href="https://design.caple.ai" target="_blank" disabled>
        https://design.caple.ai
      </Link>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 30 }}>
      <Link size="small" href="https://design.caple.ai" target="_blank" loading>
        https://design.caple.ai
      </Link>

      <br />

      <Link size="normal" href="https://design.caple.ai" target="_blank" loading>
        https://design.caple.ai
      </Link>

      <br />

      <Link size="large" href="https://design.caple.ai" target="_blank" loading>
        https://design.caple.ai
      </Link>
    </div>
  );
};

export const onClick = () => {
  return (
    <div style={{ padding: 30 }}>
      <Link onClick={action('click-event')}>https://design.caple.ai</Link>
    </div>
  );
};
