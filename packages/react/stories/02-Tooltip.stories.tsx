import React from 'react';
import { Tooltip, Button, Input, Spacer } from '../src';

export default {
  title: 'Component|Tooltip',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="bottom-left">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};

export const Trigger = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="bottom-left" trigger="click">
        <Button>Click me</Button>
      </Tooltip>

      <Spacer type="vertical" size={30} />

      <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="bottom-left" trigger="hover">
        <Button>Hover me</Button>
      </Tooltip>

      <Spacer type="vertical" size={30} />

      <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="bottom-left" trigger="focus">
        <Input.Text placeholder="Focus me" style={{ width: 120 }} />
      </Tooltip>
    </div>
  );
};

export const Placement = () => {
  return (
    <div style={{ padding: 30 }}>
      <div style={{ width: 500, margin: '100px auto' }}>
        <Spacer size={50} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="top-left">
          <Button>Top Left</Button>
        </Tooltip>
        <Spacer size={70} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Spacer size={70} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="top-right">
          <Button>Top Right</Button>
        </Tooltip>

        <Spacer type="vertical" size={30} />

        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="left-top">
          <Button>Left Top</Button>
        </Tooltip>
        <Spacer size={280} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="right-top">
          <Button>Right Top</Button>
        </Tooltip>

        <Spacer type="vertical" size={30} />

        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Spacer size={326} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="right">
          <Button>Right</Button>
        </Tooltip>

        <Spacer type="vertical" size={30} />

        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="left-bottom">
          <Button>Left Bottom</Button>
        </Tooltip>
        <Spacer size={236} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="right-bottom">
          <Button>Right Bottom</Button>
        </Tooltip>

        <Spacer type="vertical" size={30} />

        <Spacer size={50} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="bottom-left">
          <Button>Bottom Left</Button>
        </Tooltip>
        <Spacer size={40} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Spacer size={50} />
        <Tooltip content="Peekaboo! I'm Tooltip. :D" placement="bottom-right">
          <Button>Bottom Right</Button>
        </Tooltip>
      </div>
    </div>
  );
};
