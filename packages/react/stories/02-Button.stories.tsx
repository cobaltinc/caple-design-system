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
        <Button type="special">Special</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>
      </Spacer>
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 30 }}>
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
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ padding: 30 }}>
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
    </div>
  );
};

export const Ghost = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer type="vertical" size="normal">
        <div>
          <Spacer size="normal">
            <Button type="basic" size="normal" icon={<Icon type="gear" />} ghost>
              Normal
            </Button>
            <Button type="basic" size="normal" icon={<Icon type="gear" />} ghost disabled>
              Normal Disabled
            </Button>
          </Spacer>
        </div>

        <div>
          <Spacer size="normal">
            <Button type="core" size="normal" icon={<Icon type="gear" />} ghost>
              Core
            </Button>
            <Button type="core" size="normal" icon={<Icon type="gear" />} ghost disabled>
              Core Disabled
            </Button>
          </Spacer>
        </div>

        <div>
          <Spacer size="normal">
            <Button type="special" size="normal" icon={<Icon type="gear" />} ghost>
              Special
            </Button>
            <Button type="special" size="normal" icon={<Icon type="gear" />} ghost disabled>
              Special Disabled
            </Button>
          </Spacer>
        </div>

        <div>
          <Spacer size="normal">
            <Button type="danger" size="normal" icon={<Icon type="gear" />} ghost>
              Danger
            </Button>
            <Button type="danger" size="normal" icon={<Icon type="gear" />} ghost disabled>
              Danger Disabled
            </Button>
          </Spacer>
        </div>

        <div>
          <Spacer size="normal">
            <Button type="warning" size="normal" icon={<Icon type="gear" />} ghost>
              Warning
            </Button>
            <Button type="warning" size="normal" icon={<Icon type="gear" />} ghost disabled>
              Warning Disabled
            </Button>
          </Spacer>
        </div>
      </Spacer>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30 }}>
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
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 30 }}>
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
    </div>
  );
};

export const Block = () => {
  return (
    <div style={{ padding: 30 }}>
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
    </div>
  );
};
