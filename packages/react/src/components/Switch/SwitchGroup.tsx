import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { SwitchProps } from './Switch';
import { warning, convertReactNodeTo } from '../../utils';
import './Switch.style.scss';

// TODO: 너무 안좋은 코드인 것 같음. 나중에 리팩토링.

interface SwitchGroupProps {
  children: React.ReactNode;
  multiple?: boolean;
  onChange?(values: string[]): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, multiple = false, onChange, className = '', style, ...props }: SwitchGroupProps) => {
  const { useContext, useState, useEffect } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-switch-group`;
  const classNames = classnames(classPrefix, className);

  const convertReactNodeToSwitchs = (reactNode: React.ReactNode) =>
    convertReactNodeTo<SwitchProps>('Switch.Group', 'Switch', reactNode).map((element: any, index, elements) => {
      return React.cloneElement<SwitchProps>(element, {
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

  let switchs = convertReactNodeToSwitchs(children);
  const [checkes, setCheckes] = useState<boolean[]>(
    switchs.map((_, index) => {
      const checkedIndex = multiple ? -1 : switchs.findIndex((element: any) => element.props.checked === true);
      if (!multiple && checkedIndex === -1 && index === 0) {
        return true;
      } else {
        return checkedIndex !== -1 && checkedIndex === index ? true : false;
      }
    }),
  );

  switchs = switchs.map((element: any, index) => {
    return React.cloneElement<SwitchProps>(element, {
      checked: checkes[index],
    });
  });

  const onClick = (index: number) => {
    const changedCheckes = checkes.map((check, checkIndex) => {
      if (!multiple) {
        return index === checkIndex ? true : false;
      } else {
        return index === checkIndex ? !check : check;
      }
    });
    setCheckes(changedCheckes);

    const values = switchs.filter((_, switchIndex) => changedCheckes[switchIndex]).map(element => element.props.value);
    onChange?.(values);
  };

  useEffect(() => {
    switchs = convertReactNodeToSwitchs(children);
    switchs = switchs.map((element: any, index) => {
      return React.cloneElement<SwitchProps>(element, {
        checked: checkes[index],
      });
    });
  }, [children]);

  return (
    <div className={classNames} style={style} {...props}>
      {switchs.map((element, index) => {
        const switchProps = (element as React.ReactElement<SwitchProps>).props;
        const switchClassPrefix = `${prefix}-switch`;

        return (
          <label className={`${switchClassPrefix}--container`} key={index}>
            <input type="checkbox" name={switchProps.name} checked={checkes[index]} value={switchProps.value} onChange={() => null} />
            <button
              type="button"
              className={classnames(switchClassPrefix, switchProps.className)}
              style={switchProps.style}
              disabled={!!switchProps.disabled}
              onClick={() => onClick(index)}
            >
              {switchProps.title}
            </button>
          </label>
        );
      })}
    </div>
  );
};
