import mongoose, { ConnectionOptions } from "mongoose";

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(`${process.env.MONGODB_URI}`, dbOptions);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb Connection established");
});

connection.on("error", (error) => {
  console.log("Mongodb Connection error", error);
  process.exit();
});
