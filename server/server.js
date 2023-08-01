import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import assetsRouter from "./assets-router.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use("/", express.static(path.join(__dirname, "../public")));
app.use("/src", assetsRouter);

app.get("/api/v1", (req, res) => {
  res.json({
    project: "Dev's Quest: Journey to Full Stack",
  });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
  console.log(``);
  console.log(`App running:`);
  console.log(`> Local: \x1b[36mhttp://localhost:${PORT}/\x1b[0m`);
  console.log(`> API: \x1b[36mhttp://localhost:${PORT}/api/v1/\x1b[0m`);
});
