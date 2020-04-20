import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Text from '../Text';
import './Stepper.style.scss';

export interface StepperItemProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface StepperItemRenderProps {
  done?: boolean;
  active?: boolean;
  zIndex: number;
}

const StepperItem = (_: StepperItemProps) => {
  return null;
};

StepperItem.render = ({ title, className = '', style, done, active, zIndex, ...props }: StepperItemProps & StepperItemRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-stepper-item`;
  const classNames = classnames(`${classPrefix}`, className, {
    [`${classPrefix}--done`]: done,
    [`${classPrefix}--active`]: active,
  });

  return (
    <li className={classNames} style={{ ...style, zIndex }} {...props}>
      <Icon type="check-circle" size={14} className={`${classPrefix}--icon`} />
      <Text size="small">{title}</Text>
    </li>
  );
};

export default StepperItem;
