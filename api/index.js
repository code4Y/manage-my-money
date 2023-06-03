const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json('test ok3');
});

app.post('/api/transaction', (req, res) => {
    res.json(req.body);
});

app.listen(4000);