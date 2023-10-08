const express = require('express');
const database = require('./database');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!')
})

// app.post("User", async (request, response) => {
// 	const user = new User(request.body);
// 	try {
// 	  await user.save();
// 	  response.send(user);
// 	} catch (error) {
// 	  response.status(500).send(error);
// 	}
// })

app.get("/users", async (request, response) => {
	const userModel = database.mongoose.model('User', database.userSchema);
	const users = await userModel.find({});
	try {
		response.send(users);
	} catch (error) {
		response.status(500).send(error);
	}
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
	dbConnection = database.database
})