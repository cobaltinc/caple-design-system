import React from 'react';
import { Menu, Icon, Badge } from '../src';

export default {
  title: 'Component|Menu',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, width: 200 }}>
      <Menu>
        <Menu.Item title="My Profile" />
        <Menu.Item title="Notifications" badge={<Badge count={4} />} />
        <Menu.Item title="Admin Page" disabled />
        <Menu.Divider />
        <Menu.Item title="Settings" icon={<Icon type="gear" />} />
        <Menu.Item title="Logout" />
      </Menu>
    </div>
  );
};
