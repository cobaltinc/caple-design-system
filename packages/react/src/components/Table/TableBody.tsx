import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { TableRowProps } from './TableRow';
import { convertReactNodeTo } from '../../utils';
import './Table.style.scss';

export interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, className = '', style }: TableBodyProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-table-body`;
  const classNames = classnames(classPrefix, className);

  const rows = convertReactNodeTo<TableRowProps>('Table.Head', 'Table.Row', children);

  return <tbody className={classNames}>{rows}</tbody>;
};
