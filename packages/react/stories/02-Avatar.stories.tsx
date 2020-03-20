import React from 'react';
import { Avatar, Badge, Spacer } from '../src';

export default {
  title: 'Avatar',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Avatar src="https://picsum.photos/200" />
      <Spacer type="vertical" size={10} />
      <Avatar size={60} src="https://picsum.photos/200" />
      <Spacer type="vertical" size={10} />
      <Avatar size={40} src="https://picsum.photos/200" />
      <Spacer type="vertical" size={10} />
      <Avatar size={20} src="https://picsum.photos/200" />
    </div>
  );
};

export const Text = () => {
  return (
    <div style={{ padding: 30 }}>
      <Avatar text="Caple" />
      <Spacer type="vertical" size={10} />
      <Avatar size={60} text="Caple" />
      <Spacer type="vertical" size={10} />
      <Avatar size={40} text="Caple" />
      <Spacer type="vertical" size={10} />
      <Avatar size={20} text="Caple" />
    </div>
  );
};

export const Shape = () => {
  return (
    <div style={{ padding: 30 }}>
      <Avatar src="https://picsum.photos/200" shape="square" />
      <Spacer type="vertical" size={10} />
      <Avatar src="https://picsum.photos/200" shape="circle" />
    </div>
  );
};

export const WithBadge = () => {
  return (
    <div style={{ padding: 30 }}>
      <Badge count={100} maxCount={99}>
        <Avatar size={50} src="https://picsum.photos/200" />
      </Badge>

      <Spacer type="vertical" size={40} />

      <Badge count={100} maxCount={99}>
        <Avatar size={50} src="https://picsum.photos/200" shape="square" />
      </Badge>
    </div>
  );
};
