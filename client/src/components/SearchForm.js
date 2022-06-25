import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';

const StyledSearchForm = styled.div`
`;

export default function SearchForm({ params, onParamChange, handleSubmit }) {
  return (
    <StyledSearchForm className="d-flex justify-content-center">
      <Form style={{width: "100%"}} className="d-flex">
            <InputGroup>
              <Form.Group style={{width: "90%"}}>
                <Form.Control
                  placeholder='Search by bookName'
                  onChange={onParamChange}
                  value={params.bookName ? params.bookName : ''}
                  name='bookName'
                  type='text'
                />
              </Form.Group>
            <Button onClick={handleSubmit}>Search</Button>
            </InputGroup>
      </Form>
    </StyledSearchForm>
  );
}
