import React from 'react';
import { Button, Header, Spacer, Icon, Text } from '../src';

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
        <Button type="warning">Warning</Button>
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

      <Header level={4}>Warning</Header>
      <Spacer size="normal">
        <Button type="warning" size="tiny">
          Tiny
        </Button>
        <Button type="warning" size="small">
          Small
        </Button>
        <Button type="warning" size="normal">
          Normal
        </Button>
        <Button type="warning" size="large">
          Large
        </Button>
        <Button type="warning" size="xlarge">
          xLarge
        </Button>
      </Spacer>
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Spacer size="normal">
        <Button size="tiny" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button size="small" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button size="normal" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button size="large" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button size="xlarge" icon={<Icon type="gear" />}>
          Settings
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer size="normal">
        <Button type="core" size="tiny" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="core" size="small" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="core" size="normal" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="core" size="large" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="core" size="xlarge" icon={<Icon type="gear" />}>
          Settings
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Warning</Header>
      <Spacer size="normal">
        <Button type="warning" size="tiny" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="warning" size="small" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="warning" size="normal" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="warning" size="large" icon={<Icon type="gear" />}>
          Settings
        </Button>
        <Button type="warning" size="xlarge" icon={<Icon type="gear" />}>
          Settings
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />
    </div>
  );
};

export const Ghost = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={4}>Basic</Header>
      <Spacer size="normal">
        <Button type="basic" size="tiny" icon={<Icon type="gear" />} ghost>
          Tiny
        </Button>
        <Button type="basic" size="small" icon={<Icon type="gear" />} ghost>
          Small
        </Button>
        <Button type="basic" size="normal" icon={<Icon type="gear" />} ghost>
          Normal
        </Button>
        <Button type="basic" size="large" icon={<Icon type="gear" />} ghost>
          Large
        </Button>
        <Button type="basic" size="xlarge" icon={<Icon type="gear" />} ghost>
          xLarge
        </Button>
        <Button type="basic" size="normal" icon={<Icon type="gear" />} ghost disabled>
          Normal Disabled
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer size="normal">
        <Button type="core" size="tiny" icon={<Icon type="gear" />} ghost>
          Tiny
        </Button>
        <Button type="core" size="small" icon={<Icon type="gear" />} ghost>
          Small
        </Button>
        <Button type="core" size="normal" icon={<Icon type="gear" />} ghost>
          Normal
        </Button>
        <Button type="core" size="large" icon={<Icon type="gear" />} ghost>
          Large
        </Button>
        <Button type="core" size="xlarge" icon={<Icon type="gear" />} ghost>
          xLarge
        </Button>
        <Button type="core" size="normal" icon={<Icon type="gear" />} ghost disabled>
          Core Disabled
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Warning</Header>
      <Spacer size="normal">
        <Button type="warning" size="tiny" icon={<Icon type="gear" />} ghost>
          Tiny
        </Button>
        <Button type="warning" size="small" icon={<Icon type="gear" />} ghost>
          Small
        </Button>
        <Button type="warning" size="normal" icon={<Icon type="gear" />} ghost>
          Normal
        </Button>
        <Button type="warning" size="large" icon={<Icon type="gear" />} ghost>
          Large
        </Button>
        <Button type="warning" size="xlarge" icon={<Icon type="gear" />} ghost>
          xLarge
        </Button>
        <Button type="warning" size="normal" icon={<Icon type="gear" />} ghost disabled>
          Warning Disabled
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
        <Button type="basic" size="tiny" icon={<Icon type="gear" />} disabled>
          Tiny
        </Button>
        <Button type="basic" size="small" icon={<Icon type="gear" />} disabled>
          Small
        </Button>
        <Button type="basic" size="normal" icon={<Icon type="gear" />} disabled>
          Normal
        </Button>
        <Button type="basic" size="large" icon={<Icon type="gear" />} disabled>
          Large
        </Button>
        <Button type="basic" size="xlarge" icon={<Icon type="gear" />} disabled>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Core</Header>
      <Spacer size="normal">
        <Button type="core" size="tiny" icon={<Icon type="gear" />} disabled>
          Tiny
        </Button>
        <Button type="core" size="small" icon={<Icon type="gear" />} disabled>
          Small
        </Button>
        <Button type="core" size="normal" icon={<Icon type="gear" />} disabled>
          Normal
        </Button>
        <Button type="core" size="large" icon={<Icon type="gear" />} disabled>
          Large
        </Button>
        <Button type="core" size="xlarge" icon={<Icon type="gear" />} disabled>
          xLarge
        </Button>
      </Spacer>

      <Spacer type="horizontal" size={20} />

      <Header level={4}>Warning</Header>
      <Spacer size="normal">
        <Button type="warning" size="tiny" icon={<Icon type="gear" />} disabled>
          Tiny
        </Button>
        <Button type="warning" size="small" icon={<Icon type="gear" />} disabled>
          Small
        </Button>
        <Button type="warning" size="normal" icon={<Icon type="gear" />} disabled>
          Normal
        </Button>
        <Button type="warning" size="large" icon={<Icon type="gear" />} disabled>
          Large
        </Button>
        <Button type="warning" size="xlarge" icon={<Icon type="gear" />} disabled>
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

      <Header level={4}>Warning</Header>
      <Spacer size="normal">
        <Button type="warning" size="tiny" loading>
          Tiny
        </Button>
        <Button type="warning" size="small" loading>
          Small
        </Button>
        <Button type="warning" size="normal" loading>
          Normal
        </Button>
        <Button type="warning" size="large" loading>
          Large
        </Button>
        <Button type="warning" size="xlarge" loading>
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

      <Header level={4}>Warning</Header>
      <Spacer type="vertical" size="normal">
        <Button type="warning" size="tiny" block>
          Tiny
        </Button>
        <Button type="warning" size="small" block>
          Small
        </Button>
        <Button type="warning" size="normal" block>
          Normal
        </Button>
        <Button type="warning" size="large" block>
          Large
        </Button>
        <Button type="warning" size="xlarge" block>
          xLarge
        </Button>
      </Spacer>
    </div>
  );
};
