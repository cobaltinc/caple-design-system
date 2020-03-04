import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import { ExpandTransition } from '../_transition';
import Text from '../Text';
import Icon from '../Icon';
import './Collapse.style.scss';

export interface CollapseProps {
  children: React.ReactNode;
  title: string;
  defaultExpand?: boolean;
  animate?: boolean;
  titleColor?: string;
  indicatorTitle?: string;
  indicatorColor?: string;
  caretColor?: string;
  onOpen?(): void;
  onClose?(): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, title, defaultExpand = false, animate = true, titleColor, indicatorTitle, indicatorColor = '#5C6AC4', caretColor, onOpen, onClose, className = '', style }: CollapseProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-collapse`;
  const classNames = classnames(classPrefix, className);

  const [expand, setExpand] = useState(!!defaultExpand);
  const onClick = () => {
    expand ? onClose?.() : onOpen?.();
    setExpand(!expand);
  };

  if (animate) {
    // TODO: transition 후 height 고정 버그 수정해야함
    children = (
      <ExpandTransition open={expand}>
        <div className={`${classPrefix}--content`}>
          {children}
        </div>
      </ExpandTransition>
    );
  } else {
    children = expand ?
      <div className={`${classPrefix}--content`}>
        {children}
      </div> :
      null;
  }

  return (
    <div className={classNames} style={style}>
      <div className={`${classPrefix}--header`}>
        <Text strong color={titleColor} className={`${classPrefix}--title`}>{title}</Text>
        <div className={`${classPrefix}--collapse-dropdown`} onClick={onClick}>
          {indicatorTitle ? <Text size="small" color={indicatorColor} className={`${classPrefix}--indicator`}>{indicatorTitle}</Text> : null}
          <Icon type="caret-down" size={20} color={caretColor} className={classnames(`${classPrefix}--caret`, {[`reverse`]: expand})} />
        </div>
      </div>
      {children}
    </div>
  );
};
