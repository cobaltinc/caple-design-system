import React from 'react';
import { Menu } from '../src';

export default {
  title: 'Component|Menu',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Menu>
        <Menu.Item title="Menu 1" />
        <Menu.Item title="Menu 2" />
        <Menu.Item title="Menu 3" />
        <Menu.Item title="Menu 4" />
        <Menu.Item title="Menu 5" />
      </Menu>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Menu>
        <Menu.Item title="Menu 1" disabled />
        <Menu.Item title="Menu 2" disabled />
        <Menu.Item title="Menu 3" />
        <Menu.Item title="Menu 4" disabled />
        <Menu.Item title="Menu 5" />
      </Menu>
    </div>
  );
};

export const Active = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Menu defaultActive="Menu 3">
        <Menu.Item title="Menu 1" />
        <Menu.Item title="Menu 2" />
        <Menu.Item title="Menu 3" />
        <Menu.Item title="Menu 4" />
        <Menu.Item title="Menu 5" />
      </Menu>
    </div>
  );
};

export const Styling = () => {
  const menuItemStyle: React.CSSProperties = {
    color: 'red',
    paddingLeft: 10,
  };
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Menu defaultActive="Menu 3" itemHeight={30}>
        <Menu.Item title="Menu 1" style={menuItemStyle} />
        <Menu.Item title="Menu 2" style={menuItemStyle} />
        <Menu.Item title="Menu 3" style={menuItemStyle} />
        <Menu.Item title="Menu 4" style={menuItemStyle} />
        <Menu.Item title="Menu 5" style={menuItemStyle} />
      </Menu>
    </div>
  );
};
