import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Tag.style.scss';

export type ColorPreset =
  | 'lightgreen'
  | 'blue'
  | 'indigo'
  | 'amber'
  | 'red'
  | 'ink'
  | 'indigodark'
  | 'indigolight'
  | 'cyanlight'
  | 'amberDark'
  | 'amberDarker';

export interface TagProps {
  text: string;
  color: ColorPreset;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ text, color, className = '', style, ...props }: TagProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-tag`;
  const classNames = classnames(classPrefix, `${classPrefix}--preset-${color}`, className);

  return (
    <span className={classNames} style={style} {...props}>
      {text}
    </span>
  );
};
