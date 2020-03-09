import React from 'react';
import {
  Switch
} from '../src';

export default {
  title: 'Switch',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Switch title="Switch" value="value" onChange={(check, value) => console.log(check, value)} />
    </div>
  )
};

export const Group = () => {
  return (
    <div style={{padding: 30}}>
      <Switch.Group>
        <Switch title="Switch 1" value="value 1" />
        <Switch title="Switch 2" value="value 2" />
      </Switch.Group>
    </div>
  )
};

export const GroupMultiple = () => {
  return (
    <div style={{padding: 30}}>
      <Switch.Group multiple>
        <Switch title="Switch 1" value="value 1" />
        <Switch title="Switch 2" value="value 2" />
      </Switch.Group>
    </div>
  )
};