import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Skeleton.style.scss';

export interface SkeletonParagraphProps {
  line?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ line = 3, className = '', style, ...props }: SkeletonParagraphProps) => {
  const { useContext } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-skeleton`;

  const sizeStyle = {
    width: '100%',
    height: 16,
    marginBottom: 4,
  };

  return (
    <div className={className} style={style} {...props}>
      {Array.from(Array(line), (_, index) =>
        index !== line - 1 ? (
          <div className={classPrefix} style={sizeStyle} key={index} />
        ) : (
          <div className={classPrefix} style={{ width: '64%', height: 16 }} key={index} />
        ),
      )}
    </div>
  );
};
