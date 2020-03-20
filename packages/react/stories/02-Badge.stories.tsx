import React from 'react';
import { Avatar, Badge, Spacer, Icon } from '../src';

export default {
  title: 'Badge',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Badge count={100}>
        <Avatar shape="square" />
      </Badge>

      <Spacer type="vertical" size={30} />

      <Badge count={1000} maxCount={999}>
        <Avatar shape="square" />
      </Badge>

      <Spacer type="vertical" size={30} />

      <Badge count={0}>
        <Avatar shape="square" />
      </Badge>

      <Spacer type="vertical" size={30} />

      <Badge count={0} showZero>
        <Avatar shape="square" />
      </Badge>
    </div>
  );
};

export const Dot = () => {
  return (
    <div style={{ padding: 30 }}>
      <Badge dot>
        <Avatar size={40} shape="square" />
      </Badge>

      <Spacer type="vertical" size={30} />

      <Badge dot>
        <Icon size={20} type="android" color="#A4C639" />
      </Badge>

      <Spacer type="vertical" size={30} />

      <Badge dot>
        <Icon size={20} type="apple" color="#555555" />
      </Badge>
    </div>
  );
};

export const Color = () => {
  return (
    <div style={{ padding: 30 }}>
      <Badge count={12} backgroundColor="#330202" textColor="white">
        <Avatar size={40} shape="square" />
      </Badge>

      <Spacer type="vertical" size={30} />

      <Badge count={24} backgroundColor="#5C6AC4" textColor="white">
        <Avatar size={40} shape="square" />
      </Badge>

      <Spacer type="vertical" size={30} />

      <Badge count={36} backgroundColor="#B4E0FA" textColor="black">
        <Avatar size={40} shape="square" />
      </Badge>
    </div>
  );
};
