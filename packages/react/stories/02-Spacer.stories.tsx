import React from 'react';
import { Spacer, Button } from '../src';

export default {
  title: 'Component|Spacer',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button>Button 1</Button>
      <Spacer size={60} style={{ border: '10px dashed black' }} />
      <Button>Button 2</Button>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div style={{ padding: 30 }}>
      <Button>Button 1</Button>
      <Spacer type="vertical" size={60} style={{ border: '10px dashed black' }} />
      <Button>Button 2</Button>
    </div>
  );
};

export const HorizontalWithChildren = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer size="normal">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
        <Button>Button 5</Button>
      </Spacer>
    </div>
  );
};

export const VerticalWithChildren = () => {
  return (
    <div style={{ padding: 30, width: 300 }}>
      <Spacer type="vertical" size="normal">
        <Button block>Button 1</Button>
        <Button block>Button 2</Button>
        <Button block>Button 3</Button>
        <Button block>Button 4</Button>
        <Button block>Button 5</Button>
      </Spacer>
    </div>
  );
};
