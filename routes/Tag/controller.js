const { Tag } = require("./../../models/Tag");

module.exports.getAllTag = (req, res, next) => {
  Tag.find()
    .then((t) => res.status(200).json(t))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewTag = (req, res, next) => {
  const { Name } = req.body;

  Tag.create({ Name })
    .then((t) => res.status(200).json(t))
    .catch((err) => res.status(500).json(err));
};

module.exports.deleteTag = (req, res, next) => {
  const { id } = req.body;
  Tag.deleteOne({ _id: id })
    .then(() => res.status(200).json("Deleted successfully!"))
    .catch((err) => res.status(500).json(err));
};
module.exports.editTag = (req, res, next) => {
  const { id, Name } = req.body;
  Tag.findById({ _id: id })
    .then((t) => {
      if (!t) Promise.reject("Tag was not found!");
      if (Name != null && Name != "") t.Name = Name;
      return t.save();
    })
    .then((t) => res.status(200).json(t))
    .catch((err) => res.status(500).json(err));
};
