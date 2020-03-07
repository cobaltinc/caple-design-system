import React from 'react';
import {
  Breadcrumb,
  Icon,
} from '../src';

export default {
  title: 'Breadcrumb',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>User Profile</Breadcrumb.Item>
        <Breadcrumb.Item>Edit</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
};

export const WithIcon = () => {
  return (
    <div style={{padding: 30}}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Icon type="apple" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>User Profile</Breadcrumb.Item>
        <Breadcrumb.Item>Edit</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
};
