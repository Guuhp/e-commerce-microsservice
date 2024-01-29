import { urlencoded } from "express";
import { router } from "./infra/routes";

const express = require("express");

const PORT = process.env.PORT ?? 3001;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT,() => {
  console.log(`running is server client on PORT: ${PORT}`);
});
