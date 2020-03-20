import React from 'react';
import { Tooltip, Text, Button, Input, Spacer } from '../src';

export default {
  title: 'Tooltip',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="bottomLeft">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};

export const Trigger = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="bottomLeft" trigger="click">
        <Button>Click me</Button>
      </Tooltip>

      <Spacer type="vertical" size={30} />

      <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="bottomLeft" trigger="hover">
        <Button>Hover me</Button>
      </Tooltip>

      <Spacer type="vertical" size={30} />

      <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="bottomLeft" trigger="focus">
        <Input.Text placeholder="Focus me" />
      </Tooltip>
    </div>
  );
};

export const Placement = () => {
  return (
    <div style={{ padding: 30 }}>
      <div style={{ width: 500, margin: '100px auto' }}>
        <Spacer type="vertical" size={50} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="topLeft">
          <Button>Top Left</Button>
        </Tooltip>
        <Spacer type="vertical" size={70} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Spacer type="vertical" size={70} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="topRight">
          <Button>Top Right</Button>
        </Tooltip>

        <Spacer size={30} />

        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="leftTop">
          <Button>Left Top</Button>
        </Tooltip>
        <Spacer type="vertical" size={280} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="rightTop">
          <Button>Right Top</Button>
        </Tooltip>

        <Spacer size={30} />

        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Spacer type="vertical" size={326} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="right">
          <Button>Right</Button>
        </Tooltip>

        <Spacer size={30} />

        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="leftBottom">
          <Button>Left Bottom</Button>
        </Tooltip>
        <Spacer type="vertical" size={236} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="rightBottom">
          <Button>Right Bottom</Button>
        </Tooltip>

        <Spacer size={30} />

        <Spacer type="vertical" size={50} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="bottomLeft">
          <Button>Bottom Left</Button>
        </Tooltip>
        <Spacer type="vertical" size={40} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Spacer type="vertical" size={50} />
        <Tooltip title="Peekaboo! I'm Tooltip. :D" placement="bottomRight">
          <Button>Bottom Right</Button>
        </Tooltip>
      </div>
    </div>
  );
};
