import React from 'react';
import { Switch } from '../src';

export default {
  title: 'Component|Switch',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Switch title="Switch" value="value" onChange={(check, value) => console.log(check, value)} />
    </div>
  );
};

export const Group = () => {
  return (
    <div style={{ padding: 30 }}>
      <Switch.Group defaultActive="switch1">
        <Switch id="switch1" title="Switch 1" value="value 1" />
        <Switch id="switch2" title="Switch 2" value="value 2" />
        <Switch id="switch3" title="Switch 3" value="value 3" />
      </Switch.Group>
    </div>
  );
};

export const GroupMultiple = () => {
  return (
    <div style={{ padding: 30 }}>
      <Switch.Group multiple defaultActive={['switch1', 'switch3']}>
        <Switch id="switch1" title="Switch 1" value="value 1" />
        <Switch id="switch2" title="Switch 2" value="value 2" />
        <Switch id="switch3" title="Switch 3" value="value 3" />
      </Switch.Group>
    </div>
  );
};
