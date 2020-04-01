import React from 'react';
import { Navigation, Icon } from '../src';

export default {
  title: 'Component|Navigation',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation style={{ backgroundColor: 'white' }}>
        <Navigation.Item title="Navigation 1" key="navigation1" />
        <Navigation.Item title="Navigation 2" key="navigation2" />
        <Navigation.Item title="Navigation 3" key="navigation3" />
        <Navigation.Item title="Navigation 4" key="navigation4" />
        <Navigation.Item title="Navigation 5" key="navigation5" />
      </Navigation>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation style={{ backgroundColor: 'white' }}>
        <Navigation.Item title="Navigation 1" disabled key="navigation1" />
        <Navigation.Item title="Navigation 2" disabled key="navigation2" />
        <Navigation.Item title="Navigation 3" key="navigation3" />
        <Navigation.Item title="Navigation 4" disabled key="navigation4" />
        <Navigation.Item title="Navigation 5" key="navigation5" />
      </Navigation>
    </div>
  );
};

export const Active = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation defaultActive="navigation3" style={{ backgroundColor: 'white' }}>
        <Navigation.Item title="Navigation 1" key="navigation1" />
        <Navigation.Item title="Navigation 2" key="navigation2" />
        <Navigation.Item title="Navigation 3" key="navigation3" />
        <Navigation.Item title="Navigation 4" key="navigation4" />
        <Navigation.Item title="Navigation 5" key="navigation5" />
      </Navigation>
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation defaultActive="Navigation 3" style={{ backgroundColor: 'white' }}>
        <Navigation.Item icon={<Icon type="star" />} title="Navigation 1" key="navigation1" />
        <Navigation.Item icon={<Icon type="gear" />} title="Navigation 2" key="navigation2" />
        <Navigation.Item icon={<Icon type="android" />} title="Navigation 3" key="navigation3" />
        <Navigation.Item icon={<Icon type="apple" />} title="Navigation 4" key="navigation4" />
        <Navigation.Item icon={<Icon type="phone" />} title="Navigation 5" key="navigation5" />
      </Navigation>
    </div>
  );
};

export const SubItem = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation style={{ backgroundColor: 'white' }}>
        <Navigation.Item icon={<Icon type="star" />} title="Navigation 1" key="navigation1">
          <Navigation.SubItem title="SubItem 1" key="subitem1" />
          <Navigation.SubItem title="SubItem 2" key="subitem2" />
          <Navigation.SubItem title="SubItem 3" key="subitem3" disabled />
        </Navigation.Item>
        <Navigation.Item icon={<Icon type="gear" />} title="Navigation 2" key="navigation2" />
        <Navigation.Item icon={<Icon type="android" />} title="Navigation 3" key="navigation3" />
        <Navigation.Item icon={<Icon type="apple" />} title="Navigation 4" key="navigation4" />
        <Navigation.Item icon={<Icon type="phone" />} title="Navigation 5" key="navigation5" />
      </Navigation>
    </div>
  );
};

export const Styling = () => {
  const NavigationItemStyle: React.CSSProperties = {
    color: 'red',
    paddingLeft: 10,
  };
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation defaultActive="Navigation 3" style={{ backgroundColor: 'white' }}>
        <Navigation.Item title="Navigation 1" key="navigation1" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 2" key="navigation2" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 3" key="navigation3" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 4" key="navigation4" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 5" key="navigation5" style={NavigationItemStyle} />
      </Navigation>
    </div>
  );
};
