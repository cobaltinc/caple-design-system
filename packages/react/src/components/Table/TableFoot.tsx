import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Table.style.scss';

export interface TableFootProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, className = '', style }: TableFootProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-table-tfoot`;
  const classNames = classnames(classPrefix, className);
  
  return (
    <tfoot className={classNames}>
      {children}
    </tfoot>
  );
};
