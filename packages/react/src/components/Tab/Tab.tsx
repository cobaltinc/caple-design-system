import React from 'react';
import classnames from 'classnames';
import TabItem, { TabItemProps } from './TabItem';
import ConfigContext from '../_config/ConfigContext';
import { convertReactNodeTo } from '../../utils';
import './Tab.style.scss';

export interface TabProps {
  children: React.ReactNode;
  active?: string;
  onChange?(title: string, index: number): void;
  className?: string;
  style?: React.CSSProperties;
}

export type ITab<P> = React.FunctionComponent<P> & {
  Item: typeof TabItem;
};

const Tab: ITab<TabProps> = ({ children, active, onChange, className = '', style }: TabProps) => {
  const { useContext, useEffect, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tab`;
  const classNames = classnames(classPrefix, className);

  const getActiveTab = (): [string, React.ReactNode] => {
    const tabs = convertReactNodeTo<TabItemProps>('Tab', 'Tab.item', children);
    const activeTab = tabs.find((element: any) => element.props.title === active);
    let select: string = (tabs[0] as any).props.title;
    let content: React.ReactNode = (tabs[0] as any).props.children;
    if (active && activeTab) {
      if (activeTab) {
        select = active;
        content = (activeTab as any).props.children;
      }
    }

    return [select, content];
  };

  const [defaultSelect, defaultContent] = getActiveTab();
  const [currentSelect, setCurrentSelect] = useState<string>(defaultSelect);
  const [currentContent, setCurrentContent] = useState<React.ReactNode>(defaultContent);

  useEffect(() => {
    const [select, content] = getActiveTab();
    setCurrentSelect(select);
    setCurrentContent(content);
  }, [active, children]);

  const onClick = (title: string, content: React.ReactNode, index: number) => {
    if (currentSelect === title) {
      return;
    }
    setCurrentSelect(title);
    setCurrentContent(content);
    onChange?.(title, index);
  };

  return (
    <div className={classNames} style={style}>
      <div className={`${classPrefix}--panes`}>
        {React.Children.toArray(children).map((element, index) => {
          const props = (element as React.ReactElement<TabItemProps>).props;
          const tabItemClassNames = classnames(`${prefix}-tab-item`, props.className, {
            [`${classPrefix}--active`]: currentSelect === props.title,
          });

          return (
            <div className={tabItemClassNames} style={props.style} onClick={() => onClick(props.title, props.children, index)} key={props.title}>
              {props.title}
            </div>
          );
        })}
      </div>
      <div className={`${classPrefix}--content`}>{currentContent}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
