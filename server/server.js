const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`App is listening to http://localhost:${PORT}`));