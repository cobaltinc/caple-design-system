import React from 'react';
import { Dropdown, Button, Menu, Badge, Icon } from '../src';

export default {
  title: 'Component|Dropdown',
};

const ProfileMenu = () => {
  return (
    <Menu style={{ width: 200 }}>
      <Menu.Item title="My Profile" />
      <Menu.Item title="Notifications" badge={<Badge count={4} />} />
      <Menu.Item title="Admin Page" disabled />
      <Menu.Divider />
      <Menu.Item title="Settings" icon={<Icon type="gear" />} />
      <Menu.Item title="Logout" />
    </Menu>
  );
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Dropdown placement="bottom-left" menu={<ProfileMenu />}>
        <Button>Profile</Button>
      </Dropdown>
    </div>
  );
};
