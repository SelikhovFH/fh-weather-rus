import React, { FC } from 'react';
import arrowRight from '../img/pagination/arrow-right.svg';
import dotActive from '../img/pagination/dot-active.svg';
import dot from '../img/pagination/dot.svg';
import arrowLeft from '../img/pagination/arrow-left.svg';
import { PaginationProps } from '../../types';

const Pagination: FC<PaginationProps> = ({
  setSelectedPage,
  selectedPage,
  pagesLength,
}) => {
  const dots: string[] = new Array(pagesLength).fill('');

  return (
    <div className='flex justify-center mb-20'>
      <img
        onClick={() => setSelectedPage(selectedPage - 1)}
        className='mr-5 cursor-pointer'
        src={arrowLeft}
        alt=''
      />
      {dots.map((_, i) => (
        <img
          key={i}
          className='mx-1'
          src={i === selectedPage ? dotActive : dot}
          alt=''
        />
      ))}
      <img
        onClick={() => setSelectedPage(selectedPage + 1)}
        className='ml-5 cursor-pointer'
        src={arrowRight}
        alt=''
      />
    </div>
  );
};

export default Pagination;
