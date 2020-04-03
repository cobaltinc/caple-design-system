import React from 'react';
import { Menu, Icon, Badge } from '../src';

export default {
  title: 'Component|Menu',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, width: 200 }}>
      <Menu>
        <Menu.Item title="My Profile" icon={<Icon.Feather type="user" />} />
        <Menu.Item title="Notifications" icon={<Icon.Feather type="star" />} badge={<Badge count={4} />} />
        <Menu.Item title="Admin Page" icon={<Icon.Feather type="key" />} disabled />
        <Menu.Divider />
        <Menu.Item title="Settings" icon={<Icon.Feather type="settings" />} />
        <Menu.Item title="Logout" icon={<Icon.Feather type="log-out" />} />
      </Menu>
    </div>
  );
};
