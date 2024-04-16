const mongoose = require("mongoose");

const chifoumiSchema = mongoose.Schema({
  id: Number,
  choix: String,
  win: Number,
  lose: Number,
  tie: Number,
});
module.exports = mongoose.model("Chifoumi", chifoumiSchema);
