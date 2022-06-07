const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
  Name: [{ type: String, required: true }],
});

const Tag = mongoose.model("Tag", TagSchema, "Tag");

module.exports = {
  Tag,
  TagSchema,
};
