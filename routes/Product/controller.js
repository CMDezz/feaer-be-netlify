const { Product } = require("./../../models/Product");

module.exports.getProducts = (req, res, next) => {
  Product.find()
    .populate("Sex")
    .then((p) => {
      console.log(p);
      return res.status(200).json(p);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewProduct = (req, res, next) => {
  const { Name, Price, Desc, Collection, Album, Sex, Image, SizeAndStock } =
    req.body;
  Product.create({
    Name,
    Price,
    Desc,
    Collection,
    Album,
    Sex,
    Image,
    SizeAndStock,
  })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.deleteProduct = (req, res, next) => {
  const { id } = req.body;

  Product.deleteOne({ _id: id })
    .then(() => res.status(200).json("Deleted successfully"))
    .catch((err) => res.status(500).json(err));
};

module.exports.editProduct = (req, res, next) => {
  const { id, Name, Price, Desc, Collection, Album, Sex, Image, SizeAndStock } =
    req.body;
  Product.findById(id)
    .then((p) => {
      if (!p) Promise.reject("Product not found");
      if (Name != null && Name != "") p.Name = Name;
      if (Price != null && Price >= 0) p.Price = Price;
      if (Desc != null) p.Desc = Desc;
      if (Collection != null) p.Collection = Collection;
      if (Album != null) p.Album = Album;
      if (Sex != null) p.Sex = Sex;
      if (Image != null && Image.length > 0) p.Image = Image;
      if (SizeAndStock != null) p.SizeAndStock = SizeAndStock;

      return p.save();
    })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};
