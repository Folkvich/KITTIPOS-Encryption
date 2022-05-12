const express = require('express');
const port = 3333;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/main.html")
});

app.get('/MonoalphabeticCipher', (req, res) => {
    res.sendFile(__dirname + "/MonoalphabeticCipher.html")
});

app.get('/CeacarsCipher', (req, res) => {
    res.sendFile(__dirname + "/CeacarsCipher.html")
});

app.get('/Rsa', (req, res) => {
    res.sendFile(__dirname + "/Rsa.html")
});

app.get('/RailFenceCipher', (req, res) => {
    res.sendFile(__dirname + "/RailFenceCipher.html")
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});