import React from 'react';
import { Popover, Text, Button, Input, Spacer } from '../src';

export default {
  title: 'Popover',
};

const CommonPopoverContent = () => (
  <div>
    <Text paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.
    </Text>
  </div>
);

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Popover content={<CommonPopoverContent />} width={300} placement="bottomLeft">
        <Button>Click me</Button>
      </Popover>
    </div>
  );
};

export const Trigger = () => {
  return (
    <div style={{ padding: 30 }}>
      <Popover content={<CommonPopoverContent />} width={300} placement="bottomLeft">
        <Button>Click me</Button>
      </Popover>

      <Spacer type="vertical" size={30} />

      <Popover content={<CommonPopoverContent />} width={300} placement="bottomLeft" trigger="hover">
        <Button>Hover me</Button>
      </Popover>

      <Spacer type="vertical" size={30} />

      <Popover content={<CommonPopoverContent />} width={300} placement="bottomLeft" trigger="focus">
        <Input.Text placeholder="Focus me" />
      </Popover>
    </div>
  );
};

export const Placement = () => {
  return (
    <div style={{ padding: 30 }}>
      <div style={{ width: 500, margin: '100px auto' }}>
        <Spacer type="vertical" size={50} />
        <Popover content={<CommonPopoverContent />} width={300} placement="topLeft" trigger="hover">
          <Button>Top Left</Button>
        </Popover>
        <Spacer type="vertical" size={70} />
        <Popover content={<CommonPopoverContent />} width={300} placement="top" trigger="hover">
          <Button>Top</Button>
        </Popover>
        <Spacer type="vertical" size={70} />
        <Popover content={<CommonPopoverContent />} width={300} placement="topRight" trigger="hover">
          <Button>Top Right</Button>
        </Popover>

        <Spacer size={30} />

        <Popover content={<CommonPopoverContent />} width={300} placement="leftTop" trigger="hover">
          <Button>Left Top</Button>
        </Popover>
        <Spacer type="vertical" size={280} />
        <Popover content={<CommonPopoverContent />} width={300} placement="rightTop" trigger="hover">
          <Button>Right Top</Button>
        </Popover>

        <Spacer size={30} />

        <Popover content={<CommonPopoverContent />} width={300} placement="left" trigger="hover">
          <Button>Left</Button>
        </Popover>
        <Spacer type="vertical" size={326} />
        <Popover content={<CommonPopoverContent />} width={300} placement="right" trigger="hover">
          <Button>Right</Button>
        </Popover>

        <Spacer size={30} />

        <Popover content={<CommonPopoverContent />} width={300} placement="leftBottom" trigger="hover">
          <Button>Left Bottom</Button>
        </Popover>
        <Spacer type="vertical" size={236} />
        <Popover content={<CommonPopoverContent />} width={300} placement="rightBottom" trigger="hover">
          <Button>Right Bottom</Button>
        </Popover>

        <Spacer size={30} />

        <Spacer type="vertical" size={50} />
        <Popover content={<CommonPopoverContent />} width={300} placement="bottomLeft" trigger="hover">
          <Button>Bottom Left</Button>
        </Popover>
        <Spacer type="vertical" size={40} />
        <Popover content={<CommonPopoverContent />} width={300} placement="bottom" trigger="hover">
          <Button>Bottom</Button>
        </Popover>
        <Spacer type="vertical" size={50} />
        <Popover content={<CommonPopoverContent />} width={300} placement="bottomRight" trigger="hover">
          <Button>Bottom Right</Button>
        </Popover>
      </div>
    </div>
  );
};

export const Controlling = () => {
  const { useState } = React;
  const [visible, setVisible] = useState(false);

  const PopoverContent = () => (
    <div>
      <Text paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </Text>

      <Button onClick={() => setVisible(false)}>Close</Button>
    </div>
  );

  return (
    <div style={{ padding: 30 }}>
      <Popover content={<PopoverContent />} defaultVisible={visible} onVisibleChange={setVisible} width={300} placement="bottomLeft">
        <Button>Click me</Button>
      </Popover>
    </div>
  );
};
