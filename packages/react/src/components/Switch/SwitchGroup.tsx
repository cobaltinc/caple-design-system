import React, { useReducer } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { SwitchProps } from './Switch';
import { warning, convertReactNodeTo } from '../../utils';
import './Switch.style.scss';
import SwitchContext, { SwitchReducer } from './SwitchContext';

interface SwitchGroupProps {
  children: React.ReactNode;
  multiple?: boolean;
  defaultActive?: string | string[];
  onChange?(values: string[]): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, multiple = false, defaultActive, onChange, className = '', style, ...props }: SwitchGroupProps) => {
  const { useContext, useState, useEffect } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-switch-group`;
  const classNames = classnames(classPrefix, className);

  const [state, dispatch] = useReducer(SwitchReducer, {
    multiple,
    active: defaultActive
      ? Array.isArray(defaultActive)
        ? []
        : {
            id: defaultActive,
            title: '',
            value: '',
          }
      : undefined,
  });

  const switchs = convertReactNodeTo<SwitchProps>('Switch.Group', 'Switch', children).map((element: any, index, elements) => {
    return React.cloneElement<SwitchProps>(element, {
      checked: !multiple ? element.props.id === (state.active as any)?.id : element.props.checked,
      style: {
        ...element.props.style,
        borderTopRightRadius: index !== elements.length - 1 ? 0 : undefined,
        borderBottomRightRadius: index !== elements.length - 1 ? 0 : undefined,
        borderTopLeftRadius: index !== 0 ? 0 : undefined,
        borderBottomLeftRadius: index !== 0 ? 0 : undefined,
        marginLeft: index !== 0 ? -1 : undefined,
      },
    });
  });

  return (
    <SwitchContext.Provider value={{ state, dispatch }}>
      <div className={classNames} style={style} {...props}>
        {switchs}
      </div>
    </SwitchContext.Provider>
  );
};
