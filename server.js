const express = require("express");
const errorMiddleware = require("./middlewares/error-middleware");
const notFoundMiddleware = require("./middlewares/not-found");
const app = express();

app.use();

// app.use("/login", อ๊อดเราเตอร์)

// app.use("/register", รีจิสเตอร์เร้าเต้อ) ยังทำไม่เสร็จ

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 8000;
app.listen(port, () => console.log("Server up on", port));
