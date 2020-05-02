const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = '5ead6bbb92cdddc84c7de5e3'

if (!ObjectID.isValid(id)) {
	console.log('Id is not valid!')
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	if (!todos) {
// 		return console.log('Id not found!')
// 	}
// 	console.log('Todos')
// 	console.log(todos)
// })

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found!')
// 	}
// 	console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found!')
// 	}
// 	console.log('Todo by Id', todo)
// }).catch((e) => console.log(e))

User.findById('5ea724ccd3f2d7c423678e34').then((user) => {
	if (!user) {
		return console.log('Unable to find user')
	}
	console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
	console.log(e)
})