const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const PORT = 3005;

app.use('/graphql', graphqlHTTP({}));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
