import React from 'react';
import { Radio } from '../src';

export default {
  title: 'Component|Radio',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Radio title="Radio" value="value" onChange={(check, value) => console.log(check, value)} />
    </div>
  );
};

export const Group = () => {
  return (
    <div style={{ padding: 30 }}>
      <Radio.Group defaultActive="group1">
        <Radio id="group1" title="group 1" value="value 1" />
        <Radio id="group2" title="group 2" value="value 2" />
        <Radio id="group3" title="group 3" value="value 3" />
      </Radio.Group>
    </div>
  );
};
