import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import Icon from '../Icon';
import Text from '../Text';
import { IconProps } from '../Icon/Icon';
import { IconFeatherProps } from '../Icon/IconFeather';
import { concatReactNodeToString } from '../../utils';
import { InkLighter, SkyDark } from '@caple-ui/colors';
import './Breadcrumb.style.scss';

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  style?: React.CSSProperties;
}

export interface BreadcrumbItemRenderProps {
  active: boolean;
  hasSeperator: boolean;
}

const BreadcrumbItem = (_: BreadcrumbItemProps) => {
  return null;
};

BreadcrumbItem.render = ({
  children,
  href,
  onClick,
  className = '',
  style,
  active,
  hasSeperator,
  ...props
}: BreadcrumbItemProps & BreadcrumbItemRenderProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-breadcrumb-item`;
  const classNames = classnames(classPrefix, className);

  const isIcon = React.isValidElement<IconProps | IconFeatherProps>(children);

  return (
    <span className={classNames} style={style} {...props}>
      <a href={href} className={`${classPrefix}--text`} onClick={onClick}>
        {isIcon ? (
          React.cloneElement(children as React.ReactElement<IconProps | IconFeatherProps>, { size: 20, color: InkLighter })
        ) : (
          <Text strong={active} size="large">
            {concatReactNodeToString(children)}
          </Text>
        )}
      </a>
      {hasSeperator ? <Icon type="chenvron-right" color={SkyDark} className={`${classPrefix}--separator`} /> : null}
    </span>
  );
};

export default BreadcrumbItem;
