import React from 'react';
import { Skeleton, Spacer } from '../src';

export default {
  title: 'Skeleton',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Skeleton.Box width={200} height={100} />
    </div>
  );
};

export const Avatar = () => {
  return (
    <div style={{ padding: 30 }}>
      <Skeleton.Avatar size={80} shape="circle" />
      <Spacer type="vertical" size={40} />
      <Skeleton.Avatar size={80} shape="square" />
    </div>
  );
};

export const Box = () => {
  return (
    <div style={{ padding: 30 }}>
      <Skeleton.Box width={100} height={60} />
      <Spacer size={24} />
      <Skeleton.Box width={40} height={60} />
    </div>
  );
};

export const Button = () => {
  return (
    <div style={{ padding: 30 }}>
      <Skeleton.Button size="mini" />
      <Spacer size={24} />
      <Skeleton.Button size="small" />
      <Spacer size={24} />
      <Skeleton.Button size="normal" />
      <Spacer size={24} />
      <Skeleton.Button size="large" />
      <Spacer size={24} />
      <Skeleton.Button size="xlarge" />
    </div>
  );
};

export const Input = () => {
  return (
    <div style={{ width: 300, padding: 30 }}>
      <Skeleton.Input size="mini" />
      <Spacer size={24} />
      <Skeleton.Input size="small" />
      <Spacer size={24} />
      <Skeleton.Input size="normal" />
      <Spacer size={24} />
      <Skeleton.Input size="large" />
      <Spacer size={24} />
      <Skeleton.Input size="xlarge" />
    </div>
  );
};

export const Paragraph = () => {
  return (
    <div style={{ width: 400, padding: 30 }}>
      <Skeleton.Paragraph line={4} />
    </div>
  );
};
