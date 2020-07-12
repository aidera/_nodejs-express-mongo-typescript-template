export {};

const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("port") || 5000;

app.use(express.json({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use("/api", require("./routes/index"));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(5000, () => console.log(`Server has been started on port ${PORT}... `))
  } catch(e) {
    console.log("Server Error", e.message);
    process.exit(1); // Метод, который выходит из процесса выполнения приложения
  }
}

start();

