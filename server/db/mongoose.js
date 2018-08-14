var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://Jonny1161:Harvest00#@ds119702.mlab.com:19702/todoapp1161'
// }
// mongoose.connect(process.env.PORT ? db.mlab : db.localhost);
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
}
