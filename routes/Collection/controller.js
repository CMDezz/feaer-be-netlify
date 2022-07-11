const res = require("express/lib/response");
const { Collection } = require("./../../models/Collection");

module.exports.getAllCollection = (req, res, next) => {
  Collection.find()
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewCollection = (req, res, next) => {
  const { Name, Title, Desc, Image } = req.body;
  Collection.create({ Name, Title, Desc, Image })
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
  const { id, Name, Title, Desc, Image } = req.body;
  Collection.findById({ _id: id })
    .then((c) => {
      if (!c) Promise.reject("Collection not found!");
      if ((Name != null) & (Name != "")) c.Name = Name;
      if ((Image != null) & (Image != "")) c.Image = Image;
      if ((Title != null) & (Title != "")) c.Title = Title;
      if ((Desc != null) & (Desc != "")) c.Desc = Desc;

      return c.save();
    })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};
