const dotenv = require("dotenv");
dotenv.config();
// mongodb+srv://adminZ:<password>@cluster0.tmsao.mongodb.net/test
let port;
// let mongodbUri = "mongodb://0.0.0.0/feaer";
let mongodbUri;

// console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case "local":
    port = process.env.LOCAL_PORT;
    mongodbUri = process.env.LOCAL_MONGODB_URI;

    break;

  case "staging":
    port = process.env.STAGING_PORT;
    mongodbUri = process.env.STAGING_MONGODB_URI;
    break;
}

module.exports = {
  port,
  mongodbUri,
};
