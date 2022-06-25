import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from "react-redux";
import {retrieveCategories} from "../actions/categories";
import {retrieveAuthors} from "../actions/authors";
import {retrievePublishers} from "../actions/publishers";
import {Link} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import {createBook} from "../actions/books";

export default function NewRecord() {
  const [params, setParams] = useState({})
  const [defaultValue, setDefaultValue] = useState('Select value');
  const categories = useSelector((state) => state.categories);
  const authors = useSelector((state) => state.authors);
  const publishers = useSelector((state) => state.publishers);
  const dispatch = useDispatch();

  function handleNameChange(e){
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value}
    })
    console.log(params)

  }

  function handleAdd() {
    dispatch(createBook(params.bookName, params.authorId, params.publisherId, params.categoryId))
  }

  function handleSelect(e) {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevParams) => {
      return { ...prevParams, [param]: value}
    })
    console.log(param,value)
  }

  useEffect(() => {
    dispatch(retrieveCategories())
    dispatch(retrieveAuthors())
    dispatch(retrievePublishers())
  },[])


  return (
    <Container fluid>
      <Row>
        <Col>IWASTECH</Col>
        <Col xs={6}><Link to="/" className="go-back" ><BsArrowLeft />&nbsp;Return to List Page</Link></Col>
        <Col></Col>
      </Row>
      <Row className="mt-5">
        <Col></Col>
        <Col xs={6}>
      <Form.Group className='mb-3'>
        <Form.Label>Book</Form.Label>
        <Form.Control type="text" placeholder="Enter book name" name="bookName" onChange={handleNameChange}/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Category</Form.Label>
        <Form.Select name="categoryId" onChange={handleSelect}>
        <option value="">Select</option>
        {/* {category.categoryName} */}
          {categories.map((category) => {
            return <option value={category.id} key={category.id}>{category.categoryName}</option>
          })}
          </Form.Select>
      </Form.Group>
          <Form.Group className='mb-3'>
        <Form.Label>Author</Form.Label>
        <Form.Select name="authorId" onChange={handleSelect}>
        <option value="">Select</option>
          {authors.map((author) => {
            return <option id={author.id} value={author.id} key={author.id}>{author.authorName}</option>
          })}
          </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Publisher</Form.Label>
        <Form.Select name="publisherId" id={publishers.publisherId} onChange={handleSelect}>
          <option value="">Select</option>
          {publishers.map((publisher) => {
            return <option value={publisher.id} key={publisher.id}>{publisher.publisherName}</option>
          })}
          </Form.Select>
      </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Button className="float-end" size="md" onClick={handleAdd}>Add</Button>          
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
