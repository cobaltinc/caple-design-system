import React from 'react';
import {
  Spinner,
  Card
} from '../src';

export default {
  title: 'Spinner',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Spinner />
    </div>
  )
};

export const Size = () => {
  return (
    <div style={{padding: 30}}>
      <Spinner size={100} />
    </div>
  )
};

export const Color = () => {
  return (
    <div style={{padding: 30}}>
      <Spinner color="red" />
      <Spinner color="green" />
      <Spinner color="blue" />
    </div>
  )
};
export const Wrap = () => {
  return (
    <div style={{padding: 30}}>
      <Spinner size={40}>
        <Card>
          <div style={{padding: 50, textAlign: 'center'}}>
            Card Content
          </div>
        </Card>
      </Spinner>
    </div>
  )
};