const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/', function (req, res) {
    console.log(path.join(__dirname, '..', '..', './public', 'index.html'));
    res.sendFile(path.join(__dirname, '..', '..', './build', 'index.html'));
});

app.listen(process.env.PORT || 9999, () => console.log('server is running'));
