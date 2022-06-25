module.exports = (app) => {
  const authors = require('./controllers/authorController.js');
  const books = require('./controllers/bookController.js');
  const categories = require('./controllers/categoryController.js');
  const publishers = require('./controllers/publisherController.js');
  var router = require('express').Router();
  app.use('/api/', router);

  // Create a new Author
  router.post('/authors', authors.create);
  // Retrieve all Authors
  router.get('/authors', authors.findAll);
  // Retrieve all published Authors
  router.get('/authors/published', authors.findAllPublished);
  // Retrieve a single Author with id
  router.get('/authors/:id', authors.findOne);
  // Update an Author with id
  router.put('/authors/:id', authors.update);
  // Delete an Author with id
  router.delete('/authors/:id', authors.delete);
  // Delete all Authors
  router.delete('/authors', authors.deleteAll);

  // Create a new Book
  router.post('/books', books.create);
  // Retrieve all Books
  router.get('/books', books.findAll);
  // Retrieve all published Books
  router.get('/books/published', books.findAllPublished);
  // Retrieve a single Book with id
  router.get('/books/:bookName', books.findOne);
  // Update a Book with id
  router.put('/books/:id', books.update);
  // Delete a Book with id
  router.delete('/books/:id', books.delete);
  // Delete all Books
  router.delete('/books', books.deleteAll);

  // Create a new Book
  router.post("/categories", categories.create);
  // Retrieve all Books
  router.get("/categories", categories.findAll);
  // Retrieve all published Books
  router.get("/categories/published", categories.findAllPublished);
  // Retrieve a single Book with id
  router.get("/categories/:id", categories.findOne);
  // Update a Book with id
  router.put("/categories/:id", categories.update);
  // Delete a Book with id
  router.delete("/categories/:id", categories.delete);
  // Delete all Books
  router.delete("/categories", categories.deleteAll);

    // Create a new Book
    router.post("/publishers", publishers.create);
    // Retrieve all Books
    router.get("/publishers", publishers.findAll);
    // Retrieve all published Books
    router.get("/publishers/published", publishers.findAllPublished);
    // Retrieve a single Book with id
    router.get("/publishers/:id", publishers.findOne);
    // Update a Book with id
    router.put("/publishers/:id", publishers.update);
    // Delete a Book with id
    router.delete("/publishers/:id", publishers.delete);
    // Delete all Books
    router.delete("/publishers", publishers.deleteAll);
};
