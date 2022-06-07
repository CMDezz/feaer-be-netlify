const mongoose = require("mongoose");

const SexSchema = new mongoose.Schema({
  Name: { type: String, required: true },
});

const Sex = mongoose.model("Sex", SexSchema, "Sex");
module.exports = {
  Sex,
  SexSchema,
};
