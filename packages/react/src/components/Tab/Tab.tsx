import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import TabItem, { TabItemProps } from './TabItem';
import { convertReactNodeTo } from '../../utils';
import './Tab.style.scss';

export interface TabProps {
  children: React.ReactNode;
  active?: string;
  onChange?(title: string, index: number): void;
  className?: string;
  style?: React.CSSProperties;
}

interface SelectItem {
  title: string;
  content: React.ReactNode;
}

const Tab = ({ children, active, onChange, className = '', style, ...props }: TabProps) => {
  const { useContext, useEffect, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tab`;
  const classNames = classnames(classPrefix, className);

  const getActiveTab = (): SelectItem => {
    const tabs = convertReactNodeTo<TabItemProps>('Tab', 'Tab.Item', children);
    const activeTab = tabs.find((element: any) => element.props.title === active);
    let title: string = (tabs[0] as any).props.title;
    let content: React.ReactNode = (tabs[0] as any).props.children;
    if (active && activeTab) {
      if (activeTab) {
        title = active;
        content = (activeTab as any).props.children;
      }
    }

    return { title, content };
  };

  const [currentItem, setCurrentItem] = useState<SelectItem>(getActiveTab());

  useEffect(() => {
    setCurrentItem(getActiveTab());
  }, [active, children]);

  const handleTabItemClick = (title: string, content: React.ReactNode, index: number) => {
    if (currentItem.title === title) {
      return;
    }
    setCurrentItem({ title, content });
    onChange?.(title, index);
  };

  const tabItems = convertReactNodeTo<TabItemProps>('Tab', 'Tab.Item', children).map((element, index) => {
    const itemProps = (element as React.ReactElement<TabItemProps>).props;
    return React.createElement(TabItem, {
      ...itemProps,
      key: index,
      active: currentItem.title === itemProps.title,
      onClick: () => {
        if (!itemProps.disabled) {
          itemProps.onClick?.();
          handleTabItemClick(itemProps.title, itemProps.children, index);
        }
      },
    });
  });

  return (
    <div className={classNames} style={style}>
      <div className={`${classPrefix}--panes`}>{tabItems}</div>
      <div className={`${classPrefix}--content`}>{currentItem.content}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
