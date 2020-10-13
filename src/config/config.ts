export default {
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
  DB: {
    URI: process.env.MONGODB_URI,
  },
};
