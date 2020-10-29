import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Pagination.style.scss';
import Button from '../Button';
import Icon from '../Icon';

export interface PaginationProps {
  activePage?: number;
  itemsCountPerView?: number;
  totalItemsCount: number;
  showFirst?: boolean;
  showLast?: boolean;
  onChange?(page: number): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({
  activePage = 1,
  itemsCountPerView = 10,
  totalItemsCount,
  showFirst = true,
  showLast = true,
  onChange,
  className = '',
  style,
  ...props
}: PaginationProps) => {
  const { useContext, useState, useEffect } = React;
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

  useEffect(() => {
    setCurrentPage(activePage);
  }, [activePage]);

  const handleChangePage = (page: number) => {
    onChange?.(page);
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onChange?.(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      onChange?.(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const Bullet = () => {
    return (
      <div className={`${classPrefix}--bullet`}>
        {[0, 1, 2].map((_, index) => (
          <div key={index} className={`${classPrefix}--circle`} />
        ))}
      </div>
    );
  };

  return (
    <div className={classNames} style={style} {...props}>
      <Button className={classnames(`${classPrefix}--arrow`, { [`${classPrefix}--disabled`]: currentPage === 1 })} onClick={handlePrevPage}>
        <Icon type="chevron-left" color={currentPage === 1 ? '#D9D9D9' : '#000000'} />
      </Button>

      {currentPage > 3 && totalPage > pages.length && showFirst ? (
        <>
          <div className={classnames(`${classPrefix}--page`, { [`${classPrefix}--active`]: 1 === currentPage })} onClick={() => handleChangePage(1)}>
            1
          </div>
          <Bullet />
        </>
      ) : null}

      {pages.map(index => (
        <div
          className={classnames(`${classPrefix}--page`, { [`${classPrefix}--active`]: index === currentPage })}
          key={index}
          onClick={() => handleChangePage(index)}
        >
          {index}
        </div>
      ))}

      {totalPage - 2 > currentPage && totalPage > pages.length && showLast ? (
        <>
          <Bullet />
          <div
            className={classnames(`${classPrefix}--page`, { [`${classPrefix}--active`]: totalPage === currentPage })}
            onClick={() => handleChangePage(totalPage)}
          >
            {totalPage}
          </div>
        </>
      ) : null}

      <Button className={classnames(`${classPrefix}--arrow`, { [`${classPrefix}--disabled`]: currentPage === totalPage })} onClick={handleNextPage}>
        <Icon type="chevron-right" color={currentPage === totalPage ? '#D9D9D9' : '#000000'} />
      </Button>
    </div>
  );
};
