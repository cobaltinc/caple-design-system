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

export const Ghost = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tab ghost>
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

export const Scroll = () => {
  return (
    <div style={{ width: 500, padding: 30 }}>
      <Tab active="tab4" scrollable>
        <Tab.Item title="Tab 1" key="tab1">
          Content 1
        </Tab.Item>
        <Tab.Item title="Tab 2" key="tab2">
          Content 2
        </Tab.Item>
        <Tab.Item title="Tab 3" key="tab3">
          Content 3
        </Tab.Item>
        <Tab.Item title="Tab 4" key="tab4">
          Content 4
        </Tab.Item>
        <Tab.Item title="Tab 5" key="tab5">
          Content 5
        </Tab.Item>
        <Tab.Item title="Tab 6" key="tab6">
          Content 6
        </Tab.Item>
        <Tab.Item title="Tab 7" key="tab7">
          Content 7
        </Tab.Item>
        <Tab.Item title="Tab 8" key="tab8">
          Content 8
        </Tab.Item>
        <Tab.Item title="Tab 9" key="tab9">
          Content 9
        </Tab.Item>
        <Tab.Item title="Tab 10" key="tab10">
          Content 10
        </Tab.Item>
      </Tab>
    </div>
  );
};
