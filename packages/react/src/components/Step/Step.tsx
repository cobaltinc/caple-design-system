import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import StepItem, { StepItemProps } from './StepItem';
import { convertReactNodeTo } from '../../utils';
import './Step.style.scss';

export interface StepProps {
  children: React.ReactNode;
  active?: number;
  loading?: boolean;
  onChange?(active: number): void;
  className?: string;
  style?: React.CSSProperties;
}

type ISwitch<P> = React.FunctionComponent<P> & {
  Item: typeof StepItem;
};

const Step: ISwitch<StepProps> = ({ children, active = 0, loading, onChange, className = '', style }) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-step`;
  const classNames = classnames(classPrefix, className);

  const items = convertReactNodeTo<StepItemProps>('Step', 'Step.Item', children).map((element: any, index) => {
    const props = (element as React.ReactElement<StepItemProps>).props;
    return StepItem.render({
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

Step.Item = StepItem;

export default Step;
