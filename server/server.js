const path = require('path');
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const publicPath = path.join(__dirname, '..', 'public');
const schema = require('../schema/schema');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server started & running on port ${PORT}`);
});
