import express, { Request, Response } from "express";
import { constructResponse } from "./constructResponse";

const app = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

app.get("/hello", (req: Request, res: Response) => {
  const message = constructResponse("weavix.<br />All your base are belong to us.");
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

