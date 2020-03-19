import React from 'react';
import {
  Step,
} from '../src';

export default {
  title: 'Step',
};

export const Default = () => {
  return (
    <div style={{width: 300, padding: 30}}>
      <Step active={2}>
        <Step.Item title="Test 1" />
        <Step.Item title="Test 2" />
        <Step.Item title="Test 3" />
      </Step>
    </div>
  )
};

export const Loading = () => {
  return (
    <div style={{width: 300, padding: 30}}>
      <Step active={2} loading>
        <Step.Item title="Test 1" />
        <Step.Item title="Test 2" />
        <Step.Item title="Test 3" />
      </Step>
    </div>
  )
};