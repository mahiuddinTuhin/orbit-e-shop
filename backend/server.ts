import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

/* config env */
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

const uri = process.env.DB_URI as string;

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

/* uncaught exception handling */
process.on("uncaughtException", (err) => {
  console.log("Error:" + err?.message);
  console.log("Stack:" + err?.stack);
  console.log("Name:" + err?.name);
  console.log("Shutting down the server for uncaught exception!");
});

/* unhandled promise rejection */
process.on("unhandledRejection", (err: any) => {
  console.log("Shutting down the server for: " + err?.message);
  console.log("Shutting down the server for uncaught exception!");

  server.close(() => {
    process.exit(1);
  });
});
