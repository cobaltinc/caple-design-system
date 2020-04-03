import React from 'react';
import { Button, Header, Spacer } from '../src';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Component|Button',
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
      <Spacer size="normal">
        <Button type="basic">Basic</Button>
        <Button type="core">Core</Button>
        <Button type="error">Error</Button>
      </Spacer>
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Spacer size="normal">
        <Button type="basic" size="tiny">
          Tiny
        </Button>
        <Button type="basic" size="small">
          Small
        </Button>
        <Button type="basic" size="normal">
          Normal
        </Button>
        <Button type="basic" size="large">
          Large
        </Button>
        <Button type="basic" size="xlarge">
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer size="normal">
        <Button type="core" size="tiny">
          Tiny
        </Button>
        <Button type="core" size="small">
          Small
        </Button>
        <Button type="core" size="normal">
          Normal
        </Button>
        <Button type="core" size="large">
          Large
        </Button>
        <Button type="core" size="xlarge">
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Spacer size="normal">
        <Button type="error" size="tiny">
          Tiny
        </Button>
        <Button type="error" size="small">
          Small
        </Button>
        <Button type="error" size="normal">
          Normal
        </Button>
        <Button type="error" size="large">
          Large
        </Button>
        <Button type="error" size="xlarge">
          xLarge
        </Button>
      </Spacer>
    </div>
  );
};

export const Ghost = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Spacer size="normal">
        <Button type="basic" size="tiny" ghost>
          Tiny
        </Button>
        <Button type="basic" size="small" ghost>
          Small
        </Button>
        <Button type="basic" size="normal" ghost>
          Normal
        </Button>
        <Button type="basic" size="large" ghost>
          Large
        </Button>
        <Button type="basic" size="xlarge" ghost>
          xLarge
        </Button>
        <Button type="basic" size="normal" ghost disabled>
          Normal Disabled
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer size="normal">
        <Button type="core" size="tiny" ghost>
          Tiny
        </Button>
        <Button type="core" size="small" ghost>
          Small
        </Button>
        <Button type="core" size="normal" ghost>
          Normal
        </Button>
        <Button type="core" size="large" ghost>
          Large
        </Button>
        <Button type="core" size="xlarge" ghost>
          xLarge
        </Button>
        <Button type="core" size="normal" ghost disabled>
          Core Disabled
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Spacer size="normal">
        <Button type="error" size="tiny" ghost>
          Tiny
        </Button>
        <Button type="error" size="small" ghost>
          Small
        </Button>
        <Button type="error" size="normal" ghost>
          Normal
        </Button>
        <Button type="error" size="large" ghost>
          Large
        </Button>
        <Button type="error" size="xlarge" ghost>
          xLarge
        </Button>
        <Button type="error" size="normal" ghost disabled>
          Error Disabled
        </Button>
      </Spacer>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Spacer size="normal">
        <Button type="basic" size="tiny" disabled>
          Tiny
        </Button>
        <Button type="basic" size="small" disabled>
          Small
        </Button>
        <Button type="basic" size="normal" disabled>
          Normal
        </Button>
        <Button type="basic" size="large" disabled>
          Large
        </Button>
        <Button type="basic" size="xlarge" disabled>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer size="normal">
        <Button type="core" size="tiny" disabled>
          Tiny
        </Button>
        <Button type="core" size="small" disabled>
          Small
        </Button>
        <Button type="core" size="normal" disabled>
          Normal
        </Button>
        <Button type="core" size="large" disabled>
          Large
        </Button>
        <Button type="core" size="xlarge" disabled>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Spacer size="normal">
        <Button type="error" size="tiny" disabled>
          Tiny
        </Button>
        <Button type="error" size="small" disabled>
          Small
        </Button>
        <Button type="error" size="normal" disabled>
          Normal
        </Button>
        <Button type="error" size="large" disabled>
          Large
        </Button>
        <Button type="error" size="xlarge" disabled>
          xLarge
        </Button>
      </Spacer>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Spacer size="normal">
        <Button type="basic" size="tiny" loading>
          Tiny
        </Button>
        <Button type="basic" size="small" loading>
          Small
        </Button>
        <Button type="basic" size="normal" loading>
          Normal
        </Button>
        <Button type="basic" size="large" loading>
          Large
        </Button>
        <Button type="basic" size="xlarge" loading>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer size="normal">
        <Button type="core" size="tiny" loading>
          Tiny
        </Button>
        <Button type="core" size="small" loading>
          Small
        </Button>
        <Button type="core" size="normal" loading>
          Normal
        </Button>
        <Button type="core" size="large" loading>
          Large
        </Button>
        <Button type="core" size="xlarge" loading>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Spacer size="normal">
        <Button type="error" size="tiny" loading>
          Tiny
        </Button>
        <Button type="error" size="small" loading>
          Small
        </Button>
        <Button type="error" size="normal" loading>
          Normal
        </Button>
        <Button type="error" size="large" loading>
          Large
        </Button>
        <Button type="error" size="xlarge" loading>
          xLarge
        </Button>
      </Spacer>
    </div>
  );
};

export const Block = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Spacer type="vertical" size="normal">
        <Button type="basic" size="tiny" block>
          Tiny
        </Button>
        <Button type="basic" size="small" block>
          Small
        </Button>
        <Button type="basic" size="normal" block>
          Normal
        </Button>
        <Button type="basic" size="large" block>
          Large
        </Button>
        <Button type="basic" size="xlarge" block>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer type="vertical" size="normal">
        <Button type="core" size="tiny" block>
          Tiny
        </Button>
        <Button type="core" size="small" block>
          Small
        </Button>
        <Button type="core" size="normal" block>
          Normal
        </Button>
        <Button type="core" size="large" block>
          Large
        </Button>
        <Button type="core" size="xlarge" block>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Error</Header>
      <Spacer type="vertical" size="normal">
        <Button type="error" size="tiny" block>
          Tiny
        </Button>
        <Button type="error" size="small" block>
          Small
        </Button>
        <Button type="error" size="normal" block>
          Normal
        </Button>
        <Button type="error" size="large" block>
          Large
        </Button>
        <Button type="error" size="xlarge" block>
          xLarge
        </Button>
      </Spacer>
    </div>
  );
};
