//Express has a built in router which can handle our 
//requests and modularize our code
const express = require('express')
const router = express.Router()
const db = require('./db_config')

router.post('/api/postCookie', (req,res) => {
	//Use the create method on the table
	//Make sure your columns match the ones you
	//defined in your schema
	db.Cookies.create({
		kind: req.body.kind,
		delicious: req.body.delicious
	})
	//Sequelize methods return a promise
	//which holds the value you just created 
	//or the values you want to get. You can send 
	//this data back to the client or see it in postman
	.then(cookie => res.send(cookie))
	//We use catch to handle errors, we can also send
	//the error to the client
	.catch(error => res.send(error))


})

/***************
TASK:

Below, complete 2 routes: '/api/addUser', which adds a single
user to the DB and '/api/getAllUsers', which returns 
all the users that exist in the database. Refer to the postCookie
code below for an example. Also, refer to the
sequelize docs for more information.
****************/


//In postman, make sure you're making a POST
//request and your localhost address points to localhost:3000
//Under the address bar, click on 'Body', then raw to pass 
//in an example object. Make sure you set it as 
//'JSON application/JSON' instead of 'text'
router.post('/api/addUser', (req, res) => {

})

//In postman, make sure you're making a GET request
router.get('/api/getAllUsers', (req, res) => {

})


//***EXTRA CREDIT! Get one user from the database***
router.get('/api/getOneUser/:name/', (req,res) => {

})


module.exports = router