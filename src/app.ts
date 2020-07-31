import express from "express";
import bodyParser from "body-parser";
import config from "./config";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes";

const app = express();

const PORT = config.port || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/api", routes);

// If there is a client part in client/
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`MongoDB connected`);
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}... `));
  });
