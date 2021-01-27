import React, { useReducer, useEffect, useContext } from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { RadioProps } from './Radio';
import { convertReactNodeTo } from '../../utils';
import './Radio.style.scss';
import RadioContext, { RadioItemType, RadioReducer } from './RadioContext';

interface RadioGroupProps {
  children: React.ReactNode;
  defaultActive?: string;
  onChange?(items?: RadioItemType | RadioItemType[]): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, defaultActive, onChange, className = '', style, ...props }: RadioGroupProps) => {
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-radio-group`;
  const classNames = classnames(classPrefix, className);

  const [state, dispatch] = useReducer(RadioReducer, {
    active: (() => {
      if (defaultActive) {
        const radioItems = React.Children.toArray(children).map((radioComponent: any) => {
          const radioProps = (radioComponent as React.ReactElement<RadioProps>).props;
          return {
            id: radioProps.id ?? '',
            value: radioProps.value,
            title: radioProps.title,
          };
        }) as RadioItemType[];

        return radioItems.find(radioItem => radioItem.id && radioItem.id === defaultActive);
      }
    })(),
  });

  const radios = convertReactNodeTo<RadioProps>('Radio.Group', 'Radio', children).map((element, index, elements) => {
    const radioComponent = element as React.ReactElement<RadioProps>;
    return React.cloneElement<RadioProps>(radioComponent, {
      checked: radioComponent.props.id === (state?.active as any)?.id,
      style: {
        ...radioComponent.props.style,
      },
    });
  });

  useEffect(() => {
    onChange?.(state.active);
  }, [state.active]);

  return (
    <RadioContext.Provider value={{ state, dispatch }}>
      <div className={classNames} style={style} {...props}>
        {radios}
      </div>
    </RadioContext.Provider>
  );
};
