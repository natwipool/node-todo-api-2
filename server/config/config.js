var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp2';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest2';
} else if (env === 'production') {
  process.env.MONGODB_URI = 'mongodb://natwipool:n12321@ds135946.mlab.com:35946/todo-app-api';
}