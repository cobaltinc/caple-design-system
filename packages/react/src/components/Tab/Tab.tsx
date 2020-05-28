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

  const [currentActive, setCurrentActive] = useState(active);
  useEffect(() => {
    if (active) {
      setCurrentActive(active);
    } else {
      const key = (convertReactNodeTo<TabItemProps>('Tab', 'Tab.Item', children)[0] as React.ReactElement<TabItemProps>)
        .key!!.toString()
        .replace(/[.$]/g, '');
      setCurrentActive(key);
    }
  }, [active]);

  const tabItems = convertReactNodeTo<TabItemProps>('Tab', 'Tab.Item', children).map((element, index) => {
    const item = element as React.ReactElement<TabItemProps>;
    const itemProps = item.props;
    const itemKey = item.key!!.toString().replace(/[.$]/g, '');
    return React.createElement(TabItem, {
      ...itemProps,
      key: itemKey,
      active: currentActive === itemKey,
      onClick: () => {
        if (!itemProps.disabled) {
          itemProps.onClick?.();
          setCurrentActive(itemKey);
          onChange?.(itemProps.title, index);
        }
      },
    });
  });

  return (
    <div className={classNames} style={style} {...props}>
      <div className={`${classPrefix}--panes`}>{tabItems}</div>
      <div className={`${classPrefix}--content`}>
        {
          tabItems.find(element => {
            const item = element as React.ReactElement<TabItemProps>;
            const itemKey = item.key!!.toString().replace(/[.$]/g, '');
            return currentActive === itemKey;
          })?.props.children
        }
      </div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
