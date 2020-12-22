const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

//error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal Server Occured");
  next(err);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
