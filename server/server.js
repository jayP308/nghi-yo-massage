const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`app is listening to http://localhost:${PORT}`));
