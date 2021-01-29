// var Book = require('../models/book');
// var Author = require('../models/author');
// var Genre = require('../models/genre');
// var BookInstance = require('../models/bookinstance');
var models = require("../models");
var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            models.Book.count().then(count=>{
                callback(null,count);
            }); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            models.BookInstance.count().then(count=>{
                callback(null,count);
            });
        },
        book_instance_available_count: function(callback) {
            models.BookInstance.count({ where: {status: 'available'}}).then(count=>{
                callback(null,count);
            });
        },
        author_count: function(callback) {
            models.Author.count().then(count=>{
                callback(null,count);
            });
        },
        genre_count: function(callback) {
            models.Genre.count().then(count=>{
                callback(null,count);
            });
        }
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};
// Display list of all books.
exports.book_list = function(req, res) {
    models.Book.findAll({ include: [ models.Author]}).then(list_books=>{
        //  console.log(list_books.Author);
        res.render('book_list',{title:'Book List',book_list:list_books});
      });
    
    
    
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
