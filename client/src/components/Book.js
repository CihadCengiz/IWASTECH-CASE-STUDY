import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Book({ book }) {
  return (
    <Container>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Container className='d-flex justify-content-between'>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.publisher.publisherName}</Card.Text>
          </Container>
          <Container className='d-flex justify-content-between'>
          <Card.Text className='mb-2'>{book.author.authorName}</Card.Text>
          <Card.Text>{book.category.categoryName}</Card.Text>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}
