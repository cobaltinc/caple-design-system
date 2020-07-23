import React from 'react';
import { Divider, Text, Spacer } from '../src';

export default {
  title: 'Component|Divider',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text>Up</Text>
      <Divider />
      <Text>Down</Text>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text>Left</Text>
      <Divider type="vertical" />
      <Text>Right</Text>
    </div>
  );
};

export const DefaultSize = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text>Up</Text>
      <Divider size={8} />
      <Text style={{ display: 'block' }}>Down</Text>

      <Spacer type="vertical" size={20} />

      <Text>Up</Text>
      <Divider size={16} />
      <Text style={{ display: 'block' }}>Down</Text>

      <Spacer type="vertical" size={20} />

      <Text>Up</Text>
      <Divider size={24} />
      <Text style={{ display: 'block' }}>Down</Text>

      <Spacer type="vertical" size={20} />

      <Text>Up</Text>
      <Divider size={48} />
      <Text style={{ display: 'block' }}>Down</Text>

      <Spacer type="vertical" size={40} />

      <Text>Up</Text>
      <Divider size="tiny" />
      <Text style={{ display: 'block' }}>Down</Text>

      <Spacer type="vertical" size={20} />

      <Text>Up</Text>
      <Divider size="small" />
      <Text style={{ display: 'block' }}>Down</Text>

      <Spacer type="vertical" size={20} />

      <Text>Up</Text>
      <Divider size="normal" />
      <Text style={{ display: 'block' }}>Down</Text>

      <Spacer type="vertical" size={20} />

      <Text>Up</Text>
      <Divider size="large" />
      <Text style={{ display: 'block' }}>Down</Text>
    </div>
  );
};

export const VerticalSize = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text>Left</Text>
      <Divider type="vertical" size={8} />
      <Text>Right</Text>

      <Spacer size={30} />

      <Text>Left</Text>
      <Divider type="vertical" size={16} />
      <Text>Right</Text>

      <Spacer size={30} />

      <Text>Left</Text>
      <Divider type="vertical" size={24} />
      <Text>Right</Text>

      <Spacer size={30} />

      <Text>Left</Text>
      <Divider type="vertical" size={48} />
      <Text>Right</Text>

      <Spacer size={30} />

      <Spacer type="vertical" size={40} />

      <Text>Left</Text>
      <Divider type="vertical" size="tiny" />
      <Text>Right</Text>

      <Spacer size={30} />

      <Text>Left</Text>
      <Divider type="vertical" size="small" />
      <Text>Right</Text>

      <Spacer size={30} />

      <Text>Left</Text>
      <Divider type="vertical" size="normal" />
      <Text>Right</Text>

      <Spacer size={30} />

      <Text>Left</Text>
      <Divider type="vertical" size="large" />
      <Text>Right</Text>
    </div>
  );
};
