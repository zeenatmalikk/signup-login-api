const mongoose = require("mongoose");
const modeltest = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
    trim: true,
  },
  last_name: {
    type: String,
    require: true,
    trim: true,
  },
  pass_word: {
    type: String,
    require: true,
    trim: true,
  },
  re_enter_password: {
    type: String,
    require: true,
    trim: true,
  },
  email:{
    type: String,
    require: true,
    trim: true,
  }
});

module.exports = mongoose.model("modelstruct",modeltest );
// npm i react-responsive-carousel


// https://github.com/BuggPlayer/reactjs-auth-material