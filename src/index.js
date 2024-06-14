const express = require("express");
const morgan = require("morgan");
const {
  PORT,
  DB_ALTER,
  DB_FORCE,
  NODE_ENV,
} = require("./configs/server.config");

const apiRouter = require("./routes/api.router");
const db = require("./configs/db.config");
const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.static("public"));

app.use("/api", apiRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  if (NODE_ENV === "development") {
    if (DB_FORCE === true) {
      await db.sync({ force: true });
    } else if (DB_ALTER === true) {
      await db.sync({ alter: true });
    } else {
      await db.sync();
    }
  }
  console.log("Db is connected");
});
