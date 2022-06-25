const db = require('../db/models');
const Book = db.book;
const Op = db.Sequelize.Op;
const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: books } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, books, totalPages, currentPage };
};
// Create and Save a new Author
exports.create = (req, res) => {
  // Validate request
  if (!req.body.bookName) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  // Create a Author
  const book = {
    bookName: req.body.bookName,
    authorId: req.body.authorId,
    publisherId: req.body.publisherId,
    categoryId: req.body.categoryId,
  };
  // Save Author in the database
  Book.create(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Book.',
      });
    });
};
// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
  const { page, size, bookName, bookOrder } = req.query;
  // const bookName = req.query.bookName;
  // const bookOrder = req.query.bookOrder
  var condition = bookName
    ? { bookName: { [Op.like]: `%${bookName}%` } }
    : null;
  const { limit, offset } = getPagination(page, size);

  Book.findAndCountAll({
    order: [['bookName', bookOrder || 'ASC']],
    where: condition,
    limit,
    offset,
    include: [db.author, db.publisher, db.category],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Authors.',
      });
    });
};
// Find a single Author with an id
exports.findOne = (req, res) => {
  const bookName = req.params.value;
  const bookOrder = req.params.bookOrder;
  Book.findOne({ where: { bookName: bookName } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Book with bookName=${bookName}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Book with bookName=${bookName}.`,
      });
    });
};
// Update an Author by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Book.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Author was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Author with id=${id}. Maybe Author was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Author with id=' + id,
      });
    });
};
// Delete an Author with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Book.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Author was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Author with id=${id}. Maybe Author was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Author with id=' + id,
      });
    });
};
// Delete all Authors from the database.
exports.deleteAll = (req, res) => {
  Book.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Authors were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Authors.',
      });
    });
};
// Find all published Authors
exports.findAllPublished = (req, res) => {
  Book.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Authors.',
      });
    });
};
