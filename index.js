const express = require("express");

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 8000;

app.get('/', (req, res) => res.send('Hello World'));
app.listen(PORT, () => {
  console.log(`[server 1]: Server is running at https://localhost:${PORT}`);
});
