import React from 'react';
import { Select, Spacer } from '../src';

export default {
  title: 'Component|Select',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 300 }}>
      <Select placeholder="Select your option">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 30, maxWidth: 300 }}>
      <Select placeholder="Select your option" size="tiny">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>

      <Spacer size={30} />

      <Select placeholder="Select your option" size="small">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>

      <Spacer size={30} />

      <Select placeholder="Select your option" size="normal">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>

      <Spacer size={30} />

      <Select placeholder="Select your option" size="large">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>

      <Spacer size={30} />

      <Select placeholder="Select your option" size="xlarge">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  );
};

export const BorderType = () => {
  return (
    <div style={{ padding: 30, maxWidth: 300 }}>
      <Select placeholder="Select your option">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>

      <Spacer size={30} />

      <Select placeholder="Select your option" borderType="underline">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>

      <Spacer size={30} />

      <Select placeholder="Select your option" borderType="none">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  );
};

export const Loading = () => {
  return (
    <div style={{ padding: 30, maxWidth: 300 }}>
      <Select placeholder="Select your option" loading>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30, maxWidth: 300 }}>
      <Select placeholder="Select your option" disabled>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  );
};

export const OptionDisabled = () => {
  return (
    <div style={{ padding: 30, maxWidth: 300 }}>
      <Select placeholder="Select your option">
        <Select.Option value="1" disabled>
          Option 1
        </Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3" disabled>
          Option 3
        </Select.Option>
      </Select>
    </div>
  );
};
