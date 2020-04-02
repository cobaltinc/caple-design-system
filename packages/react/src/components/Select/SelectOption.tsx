import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { concatReactNodeToString } from '../../utils';

export interface SelectOptionProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SelectOptionsRenderProps {
  key: string | number;
  selected: boolean;
  onClick(): void;
}

const SelectOption = (_: SelectOptionProps) => {
  return null;
};

SelectOption.render = ({ children, disabled, key, selected, onClick }: SelectOptionProps & SelectOptionsRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-select`;
  const classNames = classnames(`${classPrefix}-option`, {
    [`${classPrefix}-option--selected`]: selected,
    [`${classPrefix}-option--disabled`]: disabled,
  });
  const title = concatReactNodeToString(children);

  return (
    <div key={key} className={classNames} onClick={onClick}>
      {title}
    </div>
  );
};

export default SelectOption;
