import React from 'react';
import classnames from 'classnames';
import BreadcrumbItem from './BreadcrumbItem';
import ConfigContext from '../_config/ConfigContext';
import { warning } from '../../utils';
import './Breadcrumb.style.scss';

export interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

type IBreadcrumb<P> = React.FunctionComponent<P> & {
  Item: typeof BreadcrumbItem;
};

const Breadcrumb: IBreadcrumb<BreadcrumbProps> = ({ children, className = '', style }: BreadcrumbProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-breadcrumb`;
  const classNames = classnames(classPrefix, className);

  const crumbs = React.Children.toArray(children)
    .filter((element: any) => {
      if (React.isValidElement<typeof BreadcrumbItem>(element) === false) {
        warning('Breadcrumb', "Only accepts Breadcrumb.Item as it's children.");
        return false;
      }

      return true;
    })
    .map((element: any, index, elements) => {
      return React.cloneElement(element, {
        hasSeperator: index !== elements.length - 1,
      });
    });

  return (
    <div className={classNames} style={style}>
      {crumbs}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
