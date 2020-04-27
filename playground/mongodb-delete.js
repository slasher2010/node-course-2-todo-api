
//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

//MongoDB v3
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')

	const db = client.db('TodoApp')

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result)
	// })

	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result)
	// })

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result)
	// })

	// db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
	// 	console.log(result)
	// })

	// db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
	// 	console.log(result)
	// })

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5ea697565172873974b5d89e')
	}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2))
	})
	db.close()
})