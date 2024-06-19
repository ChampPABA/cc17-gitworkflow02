const express = require("express");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

app.use();

app.use(errorMiddleware);

const port = 8000;
app.listen(port, () => console.log("Server up on", port));
