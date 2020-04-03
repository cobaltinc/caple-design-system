import React from 'react';
import { Avatar, Badge, Spacer, Icon } from '../src';

export default {
  title: 'Component|Badge',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size={40}>
        <Badge count={100}>
          <Avatar />
        </Badge>

        <Badge count={1000} maxCount={999}>
          <Avatar />
        </Badge>

        <Badge count={0}>
          <Avatar />
        </Badge>

        <Badge count={0} showZero>
          <Avatar />
        </Badge>
      </Spacer>
    </div>
  );
};

export const Dot = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size={40}>
        <Badge dot>
          <Avatar size={40} />
        </Badge>

        <Badge dot>
          <Icon size={20} type="android" color="#A4C639" />
        </Badge>

        <Badge dot>
          <Icon size={20} type="apple" color="#555555" />
        </Badge>
      </Spacer>
    </div>
  );
};

export const Color = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size={40}>
        <Badge count={12} backgroundColor="#330202" textColor="white">
          <Avatar size={40} />
        </Badge>

        <Badge count={24} backgroundColor="#5C6AC4" textColor="white">
          <Avatar size={40} />
        </Badge>

        <Badge count={36} backgroundColor="#B4E0FA" textColor="black">
          <Avatar size={40} />
        </Badge>
      </Spacer>
    </div>
  );
};
