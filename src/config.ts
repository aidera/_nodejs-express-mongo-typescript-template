export default {
  port: process.env.NODE_ENV === "production" ? 80 : 5000,
  baseUrl: "http://localhost:5000",
  jwtSecret: "the cat walks trough my errors",
  mongoUri: "mongodb+srv://aidera:password1010@cluster0-r7sxs.mongodb.net/app?retryWrites=true",
};
