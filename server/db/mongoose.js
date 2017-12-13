var mongoose = require('mongoose');

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp2',
  mlab: 'mongodb://natwipool:n12321@ds135946.mlab.com:35946/todo-app-api'
};

mongoose.Promise = global.Promise;
mongoose.connect(db.localhost || db.mlab, { useMongoClient: true });

module.exports = { mongoose };