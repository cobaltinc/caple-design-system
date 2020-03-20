import React from 'react';
import { Text } from '../src';

export default {
  title: 'Text',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text>Text</Text>
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text size="large">Large</Text>
      <br />
      <Text size="normal">Normal</Text>
      <br />
      <Text size="small">Small</Text>
      <br />
      <Text size={40}>Custom size</Text>
      <br />
    </div>
  );
};

export const Decoration = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text strong>Strong</Text>
      <br />
      <Text underline>Underline</Text>
      <br />
      <Text code>Code</Text>
      <br />
      <Text delete>Delete</Text>
      <br />
      <Text mark>Mark</Text>
      <br />
      <Text strong underline code delete mark>
        Mixed
      </Text>
    </div>
  );
};

export const Color = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text color="red">Red</Text>
      <br />
      <Text color="green">Green</Text>
      <br />
      <Text color="blue">Blue</Text>
    </div>
  );
};

export const Paragraph = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </Text>
      <Text paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </Text>
    </div>
  );
};

export const Editable = () => {
  return (
    <div style={{ padding: 30 }}>
      <Text editable placeholder="Editable Text" />
    </div>
  );
};
