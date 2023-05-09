import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs"; // Module to load environment variables
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050; // access the port varialbe from .env
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
