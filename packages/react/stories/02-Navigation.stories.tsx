import React from 'react';
import { Navigation, Icon } from '../src';

export default {
  title: 'Component|Navigation',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation style={{ backgroundColor: 'white' }}>
        <Navigation.Item title="Navigation 1" index="navigation1" />
        <Navigation.Item title="Navigation 2" index="navigation2" />
        <Navigation.Item title="Navigation 3" index="navigation3" />
        <Navigation.Item title="Navigation 4" index="navigation4" />
        <Navigation.Item title="Navigation 5" index="navigation5" />
      </Navigation>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation style={{ backgroundColor: 'white' }}>
        <Navigation.Item title="Navigation 1" disabled index="navigation1" />
        <Navigation.Item title="Navigation 2" disabled index="navigation2" />
        <Navigation.Item title="Navigation 3" index="navigation3" />
        <Navigation.Item title="Navigation 4" disabled index="navigation4" />
        <Navigation.Item title="Navigation 5" index="navigation5" />
      </Navigation>
    </div>
  );
};

export const Active = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation defaultActive="navigation3" style={{ backgroundColor: 'white' }}>
        <Navigation.Item title="Navigation 1" index="navigation1" />
        <Navigation.Item title="Navigation 2" index="navigation2" />
        <Navigation.Item title="Navigation 3" index="navigation3" />
        <Navigation.Item title="Navigation 4" index="navigation4" />
        <Navigation.Item title="Navigation 5" index="navigation5" />
      </Navigation>
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation defaultActive="Navigation 3" style={{ backgroundColor: 'white' }}>
        <Navigation.Item icon={<Icon type="star" />} title="Navigation 1" index="navigation1" />
        <Navigation.Item icon={<Icon type="gear" />} title="Navigation 2" index="navigation2" />
        <Navigation.Item icon={<Icon type="android" />} title="Navigation 3" index="navigation3" />
        <Navigation.Item icon={<Icon type="apple" />} title="Navigation 4" index="navigation4" />
        <Navigation.Item icon={<Icon type="phone" />} title="Navigation 5" index="navigation5" />
      </Navigation>
    </div>
  );
};

export const Group = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation defaultActive="subitem2" style={{ backgroundColor: 'white' }}>
        <Navigation.Group icon={<Icon type="star" />} title="Navigation 1">
          <Navigation.Item icon={<Icon type="star" />} title="SubItem 1" index="subitem1" />
          <Navigation.Item title="SubItem 2" index="subitem2" />
          <Navigation.Item title="SubItem 3" index="subitem3" disabled />
        </Navigation.Group>
        <Navigation.Item icon={<Icon type="gear" />} title="Navigation 2" index="navigation2" />
        <Navigation.Group icon={<Icon type="android" />} title="Navigation 3">
          <Navigation.Item title="SubItem 1" index="subitem4" />
          <Navigation.Group icon={<Icon type="android" />} title="Navigation 3">
            <Navigation.Item title="SubItem 1" index="subitem4" />
            <Navigation.Item title="SubItem 2" index="subitem5" />
          </Navigation.Group>
          <Navigation.Item title="SubItem 2" index="subitem5" />
        </Navigation.Group>
        <Navigation.Item icon={<Icon type="apple" />} title="Navigation 4" index="navigation4" />
        <Navigation.Item icon={<Icon type="phone" />} title="Navigation 5" index="navigation5" />
      </Navigation>
    </div>
  );
};
