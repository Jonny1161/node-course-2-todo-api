const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5b7253e75f36af0f8f210bfa'}).then((todo) => {

});

Todo.findByIdAndRemove('5b7253e75f36af0f8f210bfa').then((todo) => {
  console.log(todo);
});
