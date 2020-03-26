import React from 'react';
import { Navigation } from '../src';

export default {
  title: 'Component|Navigation',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation>
        <Navigation.Item title="Navigation 1" />
        <Navigation.Item title="Navigation 2" />
        <Navigation.Item title="Navigation 3" />
        <Navigation.Item title="Navigation 4" />
        <Navigation.Item title="Navigation 5" />
      </Navigation>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation>
        <Navigation.Item title="Navigation 1" disabled />
        <Navigation.Item title="Navigation 2" disabled />
        <Navigation.Item title="Navigation 3" />
        <Navigation.Item title="Navigation 4" disabled />
        <Navigation.Item title="Navigation 5" />
      </Navigation>
    </div>
  );
};

export const Active = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Navigation defaultActive="Navigation 3">
        <Navigation.Item title="Navigation 1" />
        <Navigation.Item title="Navigation 2" />
        <Navigation.Item title="Navigation 3" />
        <Navigation.Item title="Navigation 4" />
        <Navigation.Item title="Navigation 5" />
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
      <Navigation defaultActive="Navigation 3" itemHeight={30}>
        <Navigation.Item title="Navigation 1" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 2" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 3" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 4" style={NavigationItemStyle} />
        <Navigation.Item title="Navigation 5" style={NavigationItemStyle} />
      </Navigation>
    </div>
  );
};
