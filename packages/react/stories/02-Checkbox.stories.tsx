import React from 'react';
import {
  Checkbox,
  Header,
  Spacer,
} from '../src';

export default {
  title: 'Checkbox',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Checkbox />
    </div>
  )
};

export const Label = () => {
  return (
    <div style={{padding: 30}}>
      <Checkbox label="Checkbox" />
    </div>
  )
};

export const Block = () => {
  return (
    <div style={{padding: 30}}>
      <Header level={4}>Pizza Toppings</Header>
      <Checkbox label="Pepperoni" block style={{marginTop: 20}} />
      <Checkbox label="Beef" block style={{marginTop: 10}} />
      <Checkbox label="Mushroom" block style={{marginTop: 10}} />
    </div>
  )
};

export const Error = () => {
  return (
    <div style={{padding: 30}}>
      <Checkbox error block />
      <Checkbox label="Error" error block style={{marginTop: 10}} />
    </div>
  )
};

export const Disabled = () => {
  return (
    <div style={{padding: 30}}>
      <Checkbox disabled block />
      <Checkbox label="Disabled" disabled block style={{marginTop: 10}} />
    </div>
  )
};
