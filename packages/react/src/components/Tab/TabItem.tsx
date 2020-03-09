import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';

export interface TabItemProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  style?: React.CSSProperties;
};

interface TabItemRenderProps {
  key: string | number;
  active: boolean;
  onClick(): void;
};

const TabItem = (_: TabItemProps) => {
  return null;
};

TabItem.render = ({ title, className = '', style, key, active, onClick }: TabItemProps & TabItemRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tab-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--active`]: active,
  });

  return (
    <div key={key} className={classNames} style={style} onClick={() => onClick()}>
      {title}
    </div>
  );
};

export default TabItem;