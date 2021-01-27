import React from 'react';
import { Radio, Header } from '../src';

export default {
  title: 'Component|Radio',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Radio />
    </div>
  );
};

export const Label = () => {
  return (
    <div style={{ padding: 30 }}>
      <Radio label="Radio" />
    </div>
  );
};

export const Selected = () => {
  return (
    <div style={{ padding: 30 }}>
      <Radio label="Selected Radio" checked />
    </div>
  );
};

export const Group = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={3}>Radio Group</Header>
      <Radio.Group defaultActive="value1" style={{ marginTop: 20 }}>
        <Radio label="group radio1" value="value1" style={{ marginRight: 20 }} />
        <Radio label="group radio2" value="value2" style={{ marginRight: 20 }} />
        <Radio label="group radio3" value="value3" style={{ marginRight: 20 }} />
      </Radio.Group>
    </div>
  );
};

export const Block = () => {
  return (
    <div style={{ padding: 30 }}>
      <Header level={3}>Radio Group</Header>
      <Radio.Group defaultActive="value1">
        <Radio label="group radio11" value="value1" block style={{ marginTop: 20 }} />
        <Radio label="group radio12" value="value2" block style={{ marginTop: 20 }} />
        <Radio label="group radio13" value="value3" block style={{ marginTop: 20 }} />
      </Radio.Group>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30 }}>
      <Radio label="Disalbled" disabled block style={{ marginTop: 20 }} />
      <Radio label="Selected Disalbled" checked disabled block style={{ marginTop: 20 }} />
    </div>
  );
};
