const express = require('express');

const app = express();

const mongoUri = 'mongodb+srv://washedonshore:<db_password>@cluster0.z348e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});