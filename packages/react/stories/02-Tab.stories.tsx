import React from 'react';
import { Tab, Icon } from '../src';

export default {
  title: 'Component|Tab',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tab>
        <Tab.Item icon={<Icon type="apple" />} title="Tab 1" subtitle="SubTitle" key="tab1">
          Content 1
        </Tab.Item>
        <Tab.Item icon={<Icon type="apple" />} title="Tab 2" key="tab2">
          Content 2
        </Tab.Item>
        <Tab.Item icon={{ activeIcon: <Icon type="apple" />, inactiveIcon: <Icon type="android" /> }} title="Tab 3" key="tab3">
          Content 3
        </Tab.Item>
      </Tab>
    </div>
  );
};

export const Active = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tab active="tab3">
        <Tab.Item title="Tab 1" key="tab1">
          Content 1
        </Tab.Item>
        <Tab.Item title="Tab 2" key="tab2">
          Content 2
        </Tab.Item>
        <Tab.Item title="Tab 3" key="tab3">
          Content 3
        </Tab.Item>
      </Tab>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tab>
        <Tab.Item title="Tab 1" key="tab1">
          Content 1
        </Tab.Item>
        <Tab.Item title="Tab 2" key="tab2" disabled>
          Content 2
        </Tab.Item>
        <Tab.Item title="Tab 3" key="tab3" disabled>
          Content 3
        </Tab.Item>
      </Tab>
    </div>
  );
};
