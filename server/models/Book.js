const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Author',  
    required: true 
  },
  title: { type: String, required: true },
  description: { type: String },
  genre: { type: String, required: true },
  ISBN: { type: String, required: true },
  status: { type: String, required: true },
}, { timestamps: true }); 

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
