
//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

//MongoDB v3
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')

	const db = client.db('TodoApp')

	db.collection('Todos').findOneAndUpdate()
	// client.close()
})