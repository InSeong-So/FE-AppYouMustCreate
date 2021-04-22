const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const indexRouter = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// DB DDL 적용
// require("./database/models/index.js").sequelize.sync();

// set
const PORT = process.env.PORT || 8226;

// app.set("port", PORT);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

module.exports = app;
