import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import ProgressIndicatorItem, { ProgressIndicatorItemProps } from './ProgressIndicatorItem';
import { convertReactNodeTo } from '../../utils';
import './ProgressIndicator.style.scss';

export interface ProgressIndicatorProps {
  children: React.ReactNode;
  active?: number;
  loading?: boolean;
  onChange?(active: number): void;
  className?: string;
  style?: React.CSSProperties;
}

const ProgressIndicator = ({ children, active = 0, loading, onChange, className = '', style }: ProgressIndicatorProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-step`;
  const classNames = classnames(classPrefix, className);

  const items = convertReactNodeTo<ProgressIndicatorItemProps>('ProgressIndicator', 'ProgressIndicator.Item', children).map((element: any, index) => {
    const props = (element as React.ReactElement<ProgressIndicatorItemProps>).props;
    return ProgressIndicatorItem.render({
      ...props,
      done: index + 1 < active,
      active: active === index + 1,
      loading: active === index + 1 && loading,
      key: index + 1,
    });
  });

  return (
    <ul className={classNames} style={style}>
      {items}
    </ul>
  );
};

ProgressIndicator.Item = ProgressIndicatorItem;

export default ProgressIndicator;
