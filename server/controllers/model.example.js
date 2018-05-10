const Model = require('../models').Model;

module.exports = {
  create(req, res) {
    if (!req.body.name) {
      return res.status(400).send({ message: "Bad request" });
    }
    return Model
      .create({...req.body})
      .then(Model => res.status(201).send(Model))
      .catch(error => {
        console.error(error.stack);
        return res.status(500).send({ message: "Unexpected error." });
      });
  },
  list(req, res) {
    return Model
      .findAll()
      .then(Model => res.status(200).send(Model))
      .catch(error => {
        console.error(error.stack);
        return res.status(500).send({ message: "Unexpected error." });
      });
  },
  retrieve(req, res) {
    if (!req.params.modelId) {
      return res.status(400).send({ message: "Bad request" });
    }
    return Model
      .findById(req.params.modelId)
      .then(Model => {
        if (!Model) {
          return res.status(404).send({
            message: 'Not found',
          });
        }
        return res.status(200).send(Model);
      })
      .catch(error => {
        console.error(error.stack);
        return res.status(500).send({ message: "Unexpected error." });
      });
  },
  update(req, res) {
    if (!req.params.modelId) {
      return res.status(400).send({ message: "Bad request" });
    }
    return Model
      .findById(req.params.modelId)
      .then(Model => {
        if (!Model) {
          return res.status(404).send({
            message: 'Not found',
          });
        }
        return Model
          .update({...req.body})
          .then(() => res.status(200).send(Model))
          .catch(error => {
            console.error(error.stack);
            return res.status(500).send({ message: "Unexpected error." });
          });
      })
      .catch(error => {
        console.error(error.stack);
        return res.status(500).send({ message: "Unexpected error." });
      });
  },
  destroy(req, res) {
    if (!req.params.modelId) {
      return res.status(400).send({ message: "Bad request" });
    }
    return Model
      .findById(req.params.modelId)
      .then(Model => {
        if (!Model) {
          return res.status(404).send({
            message: 'Not found',
          });
        }
        return Model
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => {
            console.error(error.stack);
            return res.status(500).send({ message: "Unexpected error." });
          });
      })
      .catch(error => {
        console.error(error.stack);
        return res.status(500).send({ message: "Unexpected error." });
      });
  }
};
