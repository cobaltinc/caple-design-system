import React from 'react';
import {
  Link
} from '../src';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Link',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Link href="https://design.caple.ai" target="_blank">https://design.caple.ai</Link>
    </div>
  )
};

export const Disabled = () => {
  return (
    <div style={{padding: 30}}>
      <Link href="https://design.caple.ai" target="_blank" disabled>https://design.caple.ai</Link>
    </div>
  )
};

export const onClick = () => {
  return (
    <div style={{padding: 30}}>
      <Link onClick={action('click-event')}>https://design.caple.ai</Link>
    </div>
  )
};