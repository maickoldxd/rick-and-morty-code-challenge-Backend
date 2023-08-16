import express from "express";
import routes from "./routes";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT ?? 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
