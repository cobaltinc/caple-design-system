import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ExitHandler } from 'react-transition-group/Transition';
import ConfigContext from '../_config/ConfigContext';
import './Transition.style.scss';

interface Props {
  children: React.ReactNode;
  show: boolean;
  onExited?: ExitHandler;
}

export default ({ children, show, onExited }: Props) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);

  return (
    <CSSTransition in={show} timeout={240} onExited={onExited} classNames={`${prefix}-transition--fade`}>
      {children}
    </CSSTransition>
  );
};
