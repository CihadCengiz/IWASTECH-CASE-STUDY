import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResult from './components/SearchResult';
import NewRecord from './components/NewRecord';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Routes>
          <Route exact path={'/'} element={<SearchResult />} />
          <Route exact path={'/newRecord'} element={<NewRecord />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
