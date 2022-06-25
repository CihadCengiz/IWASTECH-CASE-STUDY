import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from './SearchForm';
import { findBooksByName } from '../actions/books';
import Book from './Book';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import BooksPagination from './BooksPagination';

export default function SearchResult() {
  const [params, setParams] = useState({});
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const totalItems = useSelector((state) => state.books.totalItems);
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(0);
  const [isVisible, setVisible] = useState(false);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value, bookOrder: order };
    });
  }

  function handleSubmit() {
    dispatch(
      findBooksByName(params.bookName ? params.bookName : null, order, page)
    );
    if (totalItems) totalItems < 5 ? setVisible(false) : setVisible(true);
  }

  function handleOrderChange(e) {
    const value = e.target.id;
    setParams((prevParams) => {
      return { ...prevParams, bookOrder: order };
    });
    setOrder(value);
  }

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    setPage(page - 1);
  }

  useEffect(() => {
    handleSubmit();
  }, [order, page, totalItems]);

  return (
    <Container fluid className='pt-3'>
      <Row>
        <Col>IWASTECH</Col>
        <Col xs={6}>
          <SearchForm
            handleSubmit={handleSubmit}
            params={params}
            onParamChange={handleParamChange}
          />
        </Col>
        <Col>
          <div className='float-end'>
            <Link to='/newRecord'>
              <Button>Add New Record</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col sm={10}>
          <Container fluid className='d-flex justify-content-center mt-3'>
            <Col sm={8}>
              {books
                ? books.map((book) => {
                    return <Book key={book.id} book={book} />;
                  })
                : ''}
              <br />
              <div className={isVisible ? 'd-flex justify-content-center' : 'd-none'}>
                <BooksPagination
                  itemsPerPage={5}
                  totalItems={totalItems}
                  setPage={setPage}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
              </div>
            </Col>
            <Col sm={1}>
              <DropdownButton id='dropdown-basic-button' title='Order By'>
                <Dropdown.Item id='ASC' onClick={handleOrderChange}>
                  Name Ascending
                </Dropdown.Item>
                <Dropdown.Item id='DESC' onClick={handleOrderChange}>
                  Name Descending
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Container>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
