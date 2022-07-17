const { Discount } = require("../../models/Discount");
const { Product } = require("./../../models/Product");

module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((p) => {
      return res.status(200).json(p);
    })
    .catch((err) => res.status(500).json(err));
};
module.exports.getProductsBySex = (req, res, next) => {
  let { sex } = req.query;
  Product.find()
    .populate("Discount Tag")
    .populate({
      path: "Sex",
      match: {
        Name: sex,
      },
    })
    .then((p) => {
      return p.filter((p) => p.Sex != null);
    })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.createNewProduct = (req, res, next) => {
  const {
    Name,
    Price,
    Desc,
    Collection,
    Album,
    Sex,
    Image,
    SizeAndStock,
    Category,
    ImageDetail,
    Tag,
    TotalSold,
  } = req.body;
  Product.create({
    Name,
    Price,
    Desc,
    Collection,
    Album,
    Sex,
    Tag,
    TotalSold,
    ImageDetail,
    Category,
    Image,
    SizeAndStock,
    FinalPrice: Price,
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
  const {
    id,
    Name,
    Price,
    Desc,
    Collection,
    Album,
    Sex,
    Image,
    Category,
    SizeAndStock,
    ImageDetail,
    Tag,
    Discount,
  } = req.body;
  Product.findById(id)
    .then((p) => {
      if (!p) Promise.reject("Product not found");
      if (Name != null && Name != "") p.Name = Name;
      if (Price != null && Price >= 0) p.Price = Price;
      if (Desc != null) p.Desc = Desc;
      if (Tag != null) p.Tag = Tag;
      if (Collection != null) p.Collection = Collection;
      if (Category != null) p.Category = Category;
      if (Album != null) p.Album = Album;
      if (Sex != null) p.Sex = Sex;
      if (ImageDetail != null && ImageDetail.length > 0)
        p.ImageDetail = ImageDetail;
      if (Image != null && Image.length > 0) p.Image = Image;
      if (SizeAndStock != null) p.SizeAndStock = SizeAndStock;
      if (Discount != null && Discount != "") {
        p.Discount = Discount;
      }

      return p.save();
    })
    .then((p) => p.populate("Discount Sex"))
    .then((p) => {
      if (p.Discount.KindOfDiscount === "donggia") {
        p.FinalPrice = p.Discount.Value;
      } else if (p.Discount.KindOfDiscount === "giamgia") {
        p.FinalPrice = Math.floor((p.Price * (100 - p.Discount.Value)) / 100);
      } else {
        p.FinalPrice = p.Price;
      }
      return p.save();
    })
    // .populate("Discount")
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

//get 8 newest products
module.exports.getNewestProducts = (req, res, next) => {
  Product.find()
    .populate("Discount Tag")
    .sort({ $natural: -1 })
    .limit(8)
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

//get 8 top sellers products
module.exports.getTopSellerProducts = (req, res, next) => {
  Product.find()
    .populate("Discount Tag")
    .sort({ TotalSold: -1 })
    .limit(8)
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};
//get 8 products by tag

module.exports.getProductsByTag = (req, res, next) => {
  const { tag } = req.query;
  Product.find()
    .lean()
    .sort({ $natural: -1 })
    .populate("Discount")
    .populate({
      path: "Tag",
      match: {
        Name: tag,
      },
    })
    .then((p) => {
      return p.filter((p) => p.Tag.length > 0);
    })
    .then((p) => {
      return res.status(200).json(p);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.getProductsByCategory = (req, res, next) => {
  const { category } = req.query;

  Product.find()
    .populate("Tag Discount")
    .populate({
      path: "Category",
      match: {
        Name: category,
      },
    })
    .then((p) => {
      return p.filter((p) => p.Category.length > 0);
    })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.getProductById = (req, res, next) => {
  const { id } = req.query;

  Product.findOne({ _id: id })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.getProductsByTagId = (req, res, next) => {
  const { id } = req.query;
  Product.find()
    .populate("Discount")
    .populate({
      path: "Tag",
      match: { _id: id },
    })
    .then((p) => {
      return p.filter((p) => p.Tag.length > 0);
    })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.getProductsByCategoryId = (req, res, next) => {
  const { id } = req.query;
  Product.find()
    .populate("Discount")
    .populate({
      path: "Category",
      match: { _id: id },
    })
    .then((p) => {
      return p.filter((p) => p.Category.length > 0);
    })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.getProductsByName = (req, res, next) => {
  const { keyword } = req.query;
  Product.find({ Name: { $regex: new RegExp(keyword, "i") } })
    .populate("Discount Tag")
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.getProductsByCollections = (req, res, next) => {
  const { name } = req.query;
  Product.find()
    .populate("Discount Tag")
    .populate({
      path: "Collection",
      match: { Name: name },
    })
    .then((p) => {
      return p.filter((p) => p.Collection.length > 0);
    })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};

module.exports.getProductsByDiscount = (req, res, next) => {
  let { discount } = req.query;
  // let discount = "Giảm giá 10%";
  Product.find()
    .populate({
      path: "Discount",
      match: { Name: discount },
    })
    .then((p) => {
      return p.filter((p) => p.Discount != null);
    })
    .then((p) => res.status(200).json(p))
    .catch((err) => res.status(500).json(err));
};
