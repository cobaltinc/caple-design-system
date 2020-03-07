import React from 'react';
import {
  Tag
} from '../src';

export default {
  title: 'Tag',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Tag name="Tag" />
    </div>
  )
};

export const Deletable = () => {
  return (
    <div style={{padding: 30}}>
      <Tag name="Tag" deletable />
    </div>
  )
};