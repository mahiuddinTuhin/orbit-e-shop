import dotenv from "dotenv";
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

/*  uncaught exception handling  */
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
