import React, { useReducer } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { SwitchProps } from './Switch';
import { convertReactNodeTo } from '../../utils';
import './Switch.style.scss';
import SwitchContext, { SwitchItemType, SwitchReducer } from './SwitchContext';

interface SwitchGroupProps {
  children: React.ReactNode;
  multiple?: boolean;
  defaultActive?: string | string[];
  onChange?(values?: SwitchItemType | SwitchItemType[]): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, multiple = false, defaultActive, onChange, className = '', style, ...props }: SwitchGroupProps) => {
  const { useContext, useEffect } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-switch-group`;
  const classNames = classnames(classPrefix, className);

  const [state, dispatch] = useReducer(SwitchReducer, {
    multiple,
    active: (() => {
      if (defaultActive) {
        if (Array.isArray(defaultActive)) {
          return React.Children.toArray(children)
            .map((switchComponent: any) => {
              const switchProps = (switchComponent as React.ReactElement<SwitchProps>).props;
              return {
                id: switchProps.id ?? '',
                value: switchProps.value,
                title: switchProps.title,
              };
            })
            .filter(switchItem => switchItem.id && defaultActive.includes(switchItem.id)) as SwitchItemType[];
        } else {
          const switchItems = React.Children.toArray(children).map((switchComponent: any) => {
            const switchProps = (switchComponent as React.ReactElement<SwitchProps>).props;
            return {
              id: switchProps.id ?? '',
              value: switchProps.value,
              title: switchProps.title,
            };
          }) as SwitchItemType[];

          return switchItems.find(switchItem => switchItem.id && switchItem.id === defaultActive);
        }
      } else if (multiple) {
        return [];
      }
    })(),
  });

  const switchs = convertReactNodeTo<SwitchProps>('Switch.Group', 'Switch', children).map((element, index, elements) => {
    const switchComponent = element as React.ReactElement<SwitchProps>;
    return React.cloneElement<SwitchProps>(switchComponent, {
      checked: !multiple
        ? switchComponent.props.id === (state?.active as any)?.id
        : (state?.active as any).map((item: any) => item.id).includes(switchComponent.props.id),
      style: {
        ...switchComponent.props.style,
        borderTopRightRadius: index !== elements.length - 1 ? 0 : undefined,
        borderBottomRightRadius: index !== elements.length - 1 ? 0 : undefined,
        borderTopLeftRadius: index !== 0 ? 0 : undefined,
        borderBottomLeftRadius: index !== 0 ? 0 : undefined,
        marginLeft: index !== 0 ? -1 : undefined,
      },
    });
  });

  useEffect(() => {
    console.log(state.active);
    onChange?.(state.active);
  }, [state.active]);

  return (
    <SwitchContext.Provider value={{ state, dispatch }}>
      <div className={classNames} style={style} {...props}>
        {switchs}
      </div>
    </SwitchContext.Provider>
  );
};
