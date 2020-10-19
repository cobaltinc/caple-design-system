import React from 'react';
import { Avatar, Badge, Spacer } from '../src';

export default {
  title: 'Component|Avatar',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size="small">
        <Avatar src="https://picsum.photos/200" />
        <Avatar size={60} src="https://picsum.photos/200" />
        <Avatar size={40} src="https://picsum.photos/200" />
        <Avatar size={20} src="https://picsum.photos/200" />
      </Spacer>
    </div>
  );
};

export const Placeholder = () => {
  const src = null;
  return (
    <div style={{ padding: 30 }}>
      <Avatar src={src} placeholder="https://picsum.photos/200" />
    </div>
  );
};

export const Shape = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size="small">
        <Avatar src="https://picsum.photos/200" shape="square" />
        <Avatar src="https://picsum.photos/200" shape="round" />
        <Avatar src="https://picsum.photos/200" shape="circle" />
      </Spacer>
    </div>
  );
};

export const Mode = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size="small">
        <Avatar src="https://picsum.photos/200" shape="square" mode="contain"/>
        <Avatar src="https://picsum.photos/200" shape="square" mode="cover" />
        <Avatar src="https://picsum.photos/200" shape="square" mode="fill" />
      </Spacer>
    </div>
  );
};

export const WithBadge = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size={40}>
        <Badge count={100} maxCount={99}>
          <Avatar size={50} src="https://picsum.photos/200" />
        </Badge>

        <Badge count={100} maxCount={99}>
          <Avatar size={50} src="https://picsum.photos/200" shape="square" />
        </Badge>
      </Spacer>
    </div>
  );
};
