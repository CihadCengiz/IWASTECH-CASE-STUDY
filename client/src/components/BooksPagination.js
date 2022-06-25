import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

export default function BooksPagination({
    itemsPerPage,
  totalItems,
  setPage,
  nextPage,
  prevPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PageItem className='page-item' onClick={prevPage}>
        Previous
      </PageItem>
      {pageNumbers.map((page) => (
        <PageItem className='' key={page} onClick={() => setPage(page - 1)}>
          {page}
        </PageItem>
      ))}
      <PageItem className='page-item' onClick={nextPage}>
          Next
      </PageItem>
    </Pagination>
  );
}
