
const Book = require('../models/Book.js');
const Author = require('../models/Author.js');
const { books, authors } = require("../sampleData.js");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

// Author Type
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// Book Type
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    author: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    genre: { type: GraphQLString },
    ISBN: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books.find((book) => book.id === args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors.find((author) => author.id === args.id);
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,  
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args) {  
   
        const author = new Author({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return author.save();  
      },
    },
    updateAuthor: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Author.findByIdAndUpdate(args.id, {
          name: args.name,
          email: args.email,
          phone: args.phone
        }, { new: true });  
      }
    },
    deleteAuthor: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Author.findByIdAndRemove(args.id);  
      }
    },
    addBook: {
      type: BookType,
      args: {
        author: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        genre: { type: GraphQLString },
        ISBN: { type: GraphQLString },
        status: { type: GraphQLString },
      },
      resolve(parent, args) {
    
        const book = new Book({
          author: args.author,
          title: args.title,
          description: args.description,
          genre: args.genre,
          ISBN: args.ISBN,
          status: args.status,
        });

        return book.save(); 
      },
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
        author: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        genre: { type: GraphQLString },
        ISBN: { type: GraphQLString },
        status: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Book.findByIdAndUpdate(args.id, {
          author: args.author,
          title: args.title,
          description: args.description,
          genre: args.genre,
          ISBN: args.ISBN,
          status: args.status,
        }, { new: true });  
      }
    },
    deleteBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Book.findByIdAndRemove(args.id);  
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
