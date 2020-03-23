import React from 'react';
import { Button, Header, Spacer } from '../src';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button onClick={action('button-click')}>This is button</Button>
    </div>
  );
};

export const Type = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button type="basic">Basic</Button>
      <Spacer type="vertical" size={20} />
      <Button type="core">Core</Button>
      <Spacer type="vertical" size={20} />
      <Button type="error">Error</Button>
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini">
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small">
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal">
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large">
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge">
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Button type="core" size="mini">
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="small">
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="normal">
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="large">
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="xlarge">
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Button type="error" size="mini">
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="small">
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="normal">
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="large">
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="xlarge">
        xLarge
      </Button>
    </div>
  );
};

export const Ghost = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" ghost>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small" ghost>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" ghost>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large" ghost>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge" ghost>
        xLarge
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" ghost disabled>
        Normal Disabled
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Button type="core" size="mini" ghost>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="small" ghost>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="normal" ghost>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="large" ghost>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="xlarge" ghost>
        xLarge
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="normal" ghost disabled>
        Primary Disabled
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Button type="error" size="mini" ghost>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="small" ghost>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="normal" ghost>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="large" ghost>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="xlarge" ghost>
        xLarge
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="normal" ghost disabled>
        Destructive Disabled
      </Button>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" disabled>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small" disabled>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" disabled>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large" disabled>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge" disabled>
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Button type="core" size="mini" disabled>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="small" disabled>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="normal" disabled>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="large" disabled>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="xlarge" disabled>
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Button type="error" size="mini" disabled>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="small" disabled>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="normal" disabled>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="large" disabled>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="xlarge" disabled>
        xLarge
      </Button>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" loading>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small" loading>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" loading>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large" loading>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge" loading>
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Button type="core" size="mini" loading>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="small" loading>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="normal" loading>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="large" loading>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="core" size="xlarge" loading>
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Button type="error" size="mini" loading>
        Mini
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="small" loading>
        Small
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="normal" loading>
        Normal
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="large" loading>
        Large
      </Button>
      <Spacer type="vertical" size={20} />
      <Button type="error" size="xlarge" loading>
        xLarge
      </Button>
    </div>
  );
};

export const Block = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" block>
        Mini
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="small" block>
        Small
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="normal" block>
        Normal
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="large" block>
        Large
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="xlarge" block>
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Button type="core" size="mini" block>
        Mini
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="core" size="small" block>
        Small
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="core" size="normal" block>
        Normal
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="core" size="large" block>
        Large
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="core" size="xlarge" block>
        xLarge
      </Button>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Button type="error" size="mini" block>
        Mini
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="error" size="small" block>
        Small
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="error" size="normal" block>
        Normal
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="error" size="large" block>
        Large
      </Button>
      <Spacer type="horizontal" size={20} />
      <Button type="error" size="xlarge" block>
        xLarge
      </Button>
    </div>
  );
};
