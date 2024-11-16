const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
