import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import { concatReactNodeToString } from '../../utils';
import './Breadcrumb.style.scss';

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  hasSeperator?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const BreadcrumbItem = ({ children, href, onClick, hasSeperator, className = '', style }: BreadcrumbItemProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-breadcrumb-item`;
  const classNames = classnames(classPrefix, className);

  const isIcon = React.isValidElement<IconProps | IconFeatherProps>(children);

  return (
    <span className={classNames}>
      <a href={href} className={`${classPrefix}--text`} style={style} onClick={onClick}>
        {isIcon ? (
          React.cloneElement(children as React.ReactElement<IconProps | IconFeatherProps>, { size: 20, color: '#637381' })
        ) : (
          <Text strong size="large">
            {concatReactNodeToString(children)}
          </Text>
        )}
      </a>
      {hasSeperator ? (
        <span className={`${classPrefix}--separator`}>
          <Icon type="chenvron-right" color="#C4CDD5" />
        </span>
      ) : null}
    </span>
  );
};

export default BreadcrumbItem;
