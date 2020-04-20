import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import StepperItem, { StepperItemProps } from './StepperItem';
import { convertReactNodeTo } from '../../utils';
import './Stepper.style.scss';

export interface StepperProps {
  children?: React.ReactNode;
  active?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Stepper = ({ children, active = 0, className = '', style, ...props }: StepperProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-stepper`;
  const classNames = classnames(`${classPrefix}`, className);

  const items = convertReactNodeTo<StepperItemProps>('Stepper', 'Stepper.Item', children).map((element: any, index, elements) => {
    const itemProps = (element as React.ReactElement<StepperItemProps>).props;
    return (
      <React.Fragment key={index}>
        {StepperItem.render({ ...itemProps, done: index + 1 < active, active: active === index + 1, zIndex: elements.length - index })}
      </React.Fragment>
    );
  });

  return (
    <ul className={classNames} style={style} {...props}>
      {items}
    </ul>
  );
};

Stepper.Item = StepperItem;

export default Stepper;
