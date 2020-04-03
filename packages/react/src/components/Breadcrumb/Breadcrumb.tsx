import React from 'react';
import classnames from 'classnames';
import BreadcrumbItem, { BreadcrumbItemProps } from './BreadcrumbItem';
import ConfigContext from '../_config/ConfigContext';
import { convertReactNodeTo } from '../../utils';
import './Breadcrumb.style.scss';

export interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Breadcrumb = ({ children, className = '', style }: BreadcrumbProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-breadcrumb`;
  const classNames = classnames(classPrefix, className);

  const crumbs = convertReactNodeTo<BreadcrumbItemProps>('Breadcrumb', 'Breadcrumb.Item', children).map((element: any, index, elements) => {
    const props = (element as React.ReactElement<BreadcrumbItemProps>).props;
    return (
      <React.Fragment key={index}>
        {BreadcrumbItem.render({ ...props, active: index === elements.length - 1, hasSeperator: index !== elements.length - 1 })}
      </React.Fragment>
    );
  });

  return (
    <div className={classNames} style={style}>
      {crumbs}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
