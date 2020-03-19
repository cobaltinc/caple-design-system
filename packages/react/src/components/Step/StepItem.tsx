import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import { concatReactNodeToString } from '../../utils';
import './Step.style.scss';

export interface StepItemProps {
  title: string;
  icon?: IconProps | IconFeatherProps;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: React.CSSProperties;
};

export interface StepItemRenderProps {
  key: number;
  done: boolean;
  active: boolean;
  loading?: boolean;
}

const StepItem = (_: StepItemProps) => {
  return null;
};

StepItem.render = ({ title, icon, onClick, key, done, active, loading, className = '', style }: StepItemProps & StepItemRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-step-item`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--done`]: done,
    [`${classPrefix}--active`]: active
  });

  return (
    <React.Fragment key={key}>
      <li className={classNames}>
        {
          loading ?
            <Spinner className={`${classPrefix}--icon`} size={20} color="#5c6ac4" style={{backgroundColor: 'transparent'}} /> :
            <div className={`${classPrefix}--icon`}>
              {
                done ?
                  <Icon size={20} type="check-circle" color="#fff" /> : null
              }
            </div>
        }
        <Text size="small">{title}</Text>
      </li>
      <li className={`${classPrefix}--line`} />
    </React.Fragment>
  );
};

export default StepItem;
