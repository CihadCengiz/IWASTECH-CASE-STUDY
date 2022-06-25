const db = require("../db/models");
const Category = db.category;
const Op = db.Sequelize.Op;
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };
  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: categories } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, categories, totalPages, currentPage };
  };
// Create and Save a new Author
exports.create = (req, res) => {
   // Validate request
   if (!req.body.categoryName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Author
  const category = {
    categoryName: req.body.categoryName,
  };
  // Save Author in the database
  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Book."
      });
    });
};
// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
    const categoryName = req.query.categoryName;
    var condition = categoryName ? { categoryName: { [Op.like]: `%${categoryName}%` } } : null;
    Category.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Authors."
        });
      });
};
// Find a single Author with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Category.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Author with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Author with id=" + id
        });
      });
};
// Update an Author by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Author was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Author with id=${id}. Maybe Author was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Author with id=" + id
        });
      });
};
// Delete an Author with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Author was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Author with id=${id}. Maybe Author was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Author with id=" + id
        });
      });
};
// Delete all Authors from the database.
exports.deleteAll = (req, res) => {
    Category.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Authors were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Authors."
          });
        });
};
// Find all published Authors
exports.findAllPublished = (req, res) => {
    Category.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Authors."
      });
    });
};