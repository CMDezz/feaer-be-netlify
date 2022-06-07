const { Category } = require("./../../models/Category");

module.exports.getAllCategory = (req, res, next) => {
  Category.find()
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewCategory = (req, res, next) => {
  const { Name } = req.body;
  Category.create({ Name })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.deleteCategory = (req, res, next) => {
  const { id } = req.body;
  Category.deleteOne({ _id: id })
    .then(() => res.status(200).json("Deleted Successfully"))
    .catch((err) => res.status(500).json(err));
};
module.exports.editCategory = (req, res, next) => {
  const { id, Name } = req.body;
  Category.findById({ _id: id })
    .then((c) => {
      if (!c) Promise.reject("Category not found");
      if (Name != null && Name != "") c.Name = Name;
      return c.save();
    })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};
