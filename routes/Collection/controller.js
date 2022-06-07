const res = require("express/lib/response");
const { Collection } = require("./../../models/Collection");

module.exports.getAllCollection = (req, res, next) => {
  Collection.find()
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewCollection = (req, res, next) => {
  const { Name } = req.body;
  Collection.create({ Name })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.deleteCollection = (req, res, next) => {
  const { id } = req.body;
  Collection.deleteOne({ _id: id })
    .then(() => res.status(200).json("Deleted Successfully"))
    .catch((err) => res.status(500).json(err));
};

module.exports.editCollection = (req, res, next) => {
  const { id, Name } = req.body;
  Collection.findById({ _id: id })
    .then((c) => {
      if (!c) Promise.reject("Collection not found!");
      if ((Name != null) & (Name != "")) c.Name = Name;
      return c.save();
    })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};
