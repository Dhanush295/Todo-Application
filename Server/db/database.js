const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

const todoSchema = new mongoose.Schema({
  title : String,
  description : String
});


const USERS = mongoose.model('Users', userSchema);
const TODO = mongoose.model("Todo", todoSchema);
module.exports = {USERS, TODO}