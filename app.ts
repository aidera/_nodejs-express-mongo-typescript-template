export {};

const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = config.get("port") || 5000;

app.use(express.json({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use("/api", require("./routes/index"));

// If there is a client part in client/
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}... `))
  } catch(e) {
    console.log("Server Error", e.message);
    process.exit(1); // Метод, который выходит из процесса выполнения приложения
  }
}

start();

