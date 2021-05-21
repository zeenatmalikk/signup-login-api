const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const router = require("./Router/Testrouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

const db_url =
  "mongodb+srv://ecommerce:123456abcd@cluster0.wav1d.mongodb.net/ecommerce?retryWrites=true&w=majority";
const databaseconnection = async () => {
  try {
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,

    });
    console.log("db conected");
  }
  
  catch (error) {
    console.log(error);
  }
};

databaseconnection();

PORT = 4000;
app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
