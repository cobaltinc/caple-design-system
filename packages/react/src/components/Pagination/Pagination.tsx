import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Pagination.style.scss';
import Button from '../Button';
import Icon from '../Icon';

export interface BadgeProps {
  activePage?: number;
  itemsCountPerView?: number;
  totalItemsCount: number;
  onChange(page: number): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ activePage = 1, itemsCountPerView = 10, totalItemsCount, onChange, className = '', style }: BadgeProps) => {
  const { useContext, useState } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-pagination`;
  const classNames = classnames(classPrefix, className);

  const [currentPage, setCurrentPage] = useState(activePage);

  const totalPage = Math.ceil(totalItemsCount / itemsCountPerView);
  let pages = [];

  if (totalPage <= 5) {
    pages = Array.apply(null, Array(totalPage)).map((_, index) => index + 1);
  } else if (currentPage < 3) {
    pages = [1, 2, 3, 4, 5];
  } else if (totalPage - 2 < currentPage) {
    pages = [totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage];
  } else {
    pages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  }

  const handleChangePage = (page: number) => {
    onChange?.(page);
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onChange?.(currentPage + 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      onChange?.(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={classNames} style={style}>
      <Button className={`${classPrefix}--arrow`} onClick={handlePrevPage}>
        <Icon type="arrow-left" />
      </Button>

      {pages.map(index => (
        <div
          className={classnames(`${classPrefix}--page`, { [`${classPrefix}--active`]: index === currentPage })}
          key={index}
          onClick={() => handleChangePage(index)}
        >
          {index}
        </div>
      ))}

      <Button className={`${classPrefix}--arrow`} onClick={handleNextPage}>
        <Icon type="arrow-right" />
      </Button>
    </div>
  );
};
