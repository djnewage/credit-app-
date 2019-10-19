const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send({Learning: "IS FUN!!!"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);