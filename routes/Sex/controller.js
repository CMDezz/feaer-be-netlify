const { Sex } = require("./../../models/Sex");

module.exports.getAllSex = (req, res, next) => {
  Sex.find()
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewSex = (req, res, next) => {
  const { Name } = req.body;
  Sex.create({ Name })
    .then((c) => res.status(200).json(c))
    .catch((err) => res.status(500).json(err));
};

module.exports.deleteSex = (req, res, next) => {
  const { id } = req.body;
  Sex.deleteOne({ _id: id })
    .then(() => res.status(200).json("Deleted Successfully"))
    .catch((err) => res.status(500).json(err));
};

module.exports.editSex = (req, res, next) => {
  const { id, Name } = req.body;
  Sex.findById({ _id: id })
    .then((s) => {
      if (!s) Promise.reject("Sex not found!");
      if (Name != null && Name != "") s.Name = Name;
      return s.save();
    })
    .then((s) => res.status(200).json(s))
    .catch((err) => res.status(500).json(err));
};
