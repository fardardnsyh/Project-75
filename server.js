import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
//DB
const app = express();
dotenv.config();

app.get('/', (req, res) => {
	res.send('Welcome');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => {
			console.log(`Server is Listening on port ${port}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
