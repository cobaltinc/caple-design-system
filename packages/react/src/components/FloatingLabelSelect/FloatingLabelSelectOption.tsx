import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { concatReactNodeToString } from '../../utils';
import FloatingLabelSelectContext from './FloatingLabelSelectContext';

export interface FloatingLabelSelectOptionProps {
  children: React.ReactNode;
  id: string;
  value: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, id, value, disabled, className, style, ...props }: FloatingLabelSelectOptionProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const { state, dispatch } = useContext(FloatingLabelSelectContext);
  const classPrefix = `${prefix}-floating-label-select`;
  const classNames = classnames(`${classPrefix}-option`, className, {
    [`${classPrefix}-option--selected`]: state?.active?.id === id,
    [`${classPrefix}-option--disabled`]: disabled,
  });
  const title = concatReactNodeToString(children);

  const handleClick = () => {
    if (disabled) return;
    dispatch?.({ active: { id, title, value } });
  };

  return (
    <div onClick={handleClick} className={classNames} style={style} {...props}>
      {title}
    </div>
  );
};
