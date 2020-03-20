import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Slider.style.scss';
import Tooltip from '../Tooltip';

export interface SliderProps {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  disabled?: boolean;
  onChange?(value: number): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ min, max, step = 0.1, defaultValue, disabled, onChange, className = '', style }: SliderProps) => {
  const { useContext, useRef, useState, useEffect } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-slider`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled,
  });

  const sliderRef = useRef<HTMLDivElement>(null);
  const [draggable, setDraggable] = useState(false);
  const [value, setValue] = useState(defaultValue ? defaultValue : min);

  const handleMouseDown = () => {
    if (disabled === true) return;
    setDraggable(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (draggable === false || !sliderRef.current) return;

    const handleOffset = event.pageX - sliderRef.current.offsetLeft;
    const sliderWidth = sliderRef.current.offsetWidth;

    const track = handleOffset / sliderWidth;
    if (track < 0) {
      setValue(min);
    } else if (track > 1) {
      setValue(max);
    } else {
      setValue(Math.round((min + (max - min) * track) / step) * step);
    }

    onChange?.(value);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  const handleMouseUp = () => {
    setDraggable(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <div ref={sliderRef} className={classNames} style={style}>
      <div className={`${classPrefix}--rail`} />
      <div className={`${classPrefix}--track`} style={{ width: `${percentage}%` }} />
      <div className={`${classPrefix}--handle`} onMouseDown={handleMouseDown} style={{ left: `${percentage}%` }} />
    </div>
  );
};
