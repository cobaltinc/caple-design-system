import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { ExpandTransition } from '../_transition';
import Text from '../Text';
import Icon from '../Icon';
import './Card.style.scss';
import Spinner from '../Spinner';
import * as Colors from '@caple-ui/colors';

export type CollapsibleConfig = {
  expand: boolean;
  animate?: boolean;
  caretColor?: string;
};

export interface CardProps {
  children?: React.ReactNode;
  header?: string | React.ReactNode;
  footer?: React.ReactNode;
  collapsible?: boolean | CollapsibleConfig;
  onOpen?(): void;
  onClose?(): void;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  footerClassName?: string;
  footerStyle?: React.CSSProperties;
}

export default ({
  children,
  header,
  footer,
  collapsible = false,
  onOpen,
  onClose,
  loading = false,
  className = '',
  style,
  headerClassName = '',
  headerStyle,
  footerClassName = '',
  footerStyle,
  ...props
}: CardProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-card`;
  const classNames = classnames(classPrefix, className);

  const [expand, setExpand] = useState(typeof collapsible === 'object' ? collapsible.expand : true);

  const onClick = () => {
    expand ? onClose?.() : onOpen?.();
    setExpand(!expand);
  };

  const caretColor = (collapsible as CollapsibleConfig).caretColor;

  if ((collapsible as CollapsibleConfig).animate) {
    // TODO: transition 후 height 고정 버그 수정해야함
    children = (
      <ExpandTransition open={expand}>
        <div className={`${classPrefix}--content`}>{children}</div>
      </ExpandTransition>
    );
  } else {
    children = expand ? <div className={`${classPrefix}--content`}>{children}</div> : null;
  }

  return (
    <div className={classNames} style={style} {...props}>
      {header || collapsible ? (
        <div className={classnames(`${classPrefix}--header`, headerClassName)} style={headerStyle}>
          {header === undefined ? null : typeof header === 'string' ? (
            <Text strong color={Colors.InkLighter} className={`${classPrefix}--title`}>
              {header}
            </Text>
          ) : (
            header
          )}

          {loading ? (
            <div className={`${classPrefix}--collapse-dropdown`}>
              <Spinner size={20} />
            </div>
          ) : collapsible ? (
            <div className={`${classPrefix}--collapse-dropdown`} onClick={onClick}>
              <Icon type="caret-down" size={20} color={caretColor} className={classnames(`${classPrefix}--caret`, { [`reverse`]: expand })} />
            </div>
          ) : null}
        </div>
      ) : null}
      {children}
      {footer ? (
        <div className={classnames(`${classPrefix}--footer`, footerClassName)} style={footerStyle}>
          {footer}
        </div>
      ) : null}
    </div>
  );
};
