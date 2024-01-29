const express = require("express");

const PORT = process.env.PORT ?? 3003

const app = express();
app.use(express.json());

app.listen(() => {
  console.log(`running is server client on PORT: ${PORT}`);
});