import React from 'react';
import {
  Button,
  Header,
  Spacer,
} from '../src';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Button onClick={action('button-click')}>This is button</Button>
    </div>
  )
};

export const Type = () => {
  return (
    <div style={{padding: 30}}>
      <Button type="basic">Basic</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary">Primary</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive">Destructive</Button>
    </div>
  )
};

export const Size = () => {
  return (
    <div style={{padding: 30}}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini">Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small">Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal">Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large">Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge">xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Primary</Header>
      <Button type="primary" size="mini">Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="small">Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="normal">Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="large">Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="xlarge">xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Destructive</Header>
      <Button type="destructive" size="mini">Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="small">Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="normal">Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="large">Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="xlarge">xLarge</Button>
    </div>
  )
};

export const Ghost = () => {
  return (
    <div style={{padding: 30}}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" ghost>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small" ghost>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" ghost>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large" ghost>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge" ghost>xLarge</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" ghost disabled>Normal Disabled</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Primary</Header>
      <Button type="primary" size="mini" ghost>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="small" ghost>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="normal" ghost>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="large" ghost>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="xlarge" ghost>xLarge</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="normal" ghost disabled>Primary Disabled</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Destructive</Header>
      <Button type="destructive" size="mini" ghost>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="small" ghost>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="normal" ghost>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="large" ghost>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="xlarge" ghost>xLarge</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="normal" ghost disabled>Destructive Disabled</Button>
    </div>
  )
};


export const Disabled = () => {
  return (
    <div style={{padding: 30}}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" disabled>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small" disabled>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" disabled>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large" disabled>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge" disabled>xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Primary</Header>
      <Button type="primary" size="mini" disabled>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="small" disabled>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="normal" disabled>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="large" disabled>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="xlarge" disabled>xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Destructive</Header>
      <Button type="destructive" size="mini" disabled>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="small" disabled>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="normal" disabled>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="large" disabled>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="xlarge" disabled>xLarge</Button>
    </div>
  )
};

export const Loading = () => {
  return (
    <div style={{padding: 30}}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" loading>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="small" loading>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="normal" loading>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="large" loading>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="basic" size="xlarge" loading>xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Primary</Header>
      <Button type="primary" size="mini" loading>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="small" loading>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="normal" loading>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="large" loading>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="primary" size="xlarge" loading>xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Destructive</Header>
      <Button type="destructive" size="mini" loading>Mini</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="small" loading>Small</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="normal" loading>Normal</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="large" loading>Large</Button>
      <Spacer type="vertical" size={20} />
      <Button type="destructive" size="xlarge" loading>xLarge</Button>
    </div>
  )
};

export const Block = () => {
  return (
    <div style={{padding: 30}}>
      <Header level={4}>Basic</Header>
      <Button type="basic" size="mini" block>Mini</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="small" block>Small</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="normal" block>Normal</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="large" block>Large</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="basic" size="xlarge" block>xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Primary</Header>
      <Button type="primary" size="mini" block>Mini</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="primary" size="small" block>Small</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="primary" size="normal" block>Normal</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="primary" size="large" block>Large</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="primary" size="xlarge" block>xLarge</Button>

      <Spacer type="horizontal" size={20} />
      
      <Header level={4}>Destructive</Header>
      <Button type="destructive" size="mini" block>Mini</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="destructive" size="small" block>Small</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="destructive" size="normal" block>Normal</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="destructive" size="large" block>Large</Button>
      <Spacer type="horizontal" size={20} />
      <Button type="destructive" size="xlarge" block>xLarge</Button>
    </div>
  )
};
