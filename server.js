import express from "express";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;