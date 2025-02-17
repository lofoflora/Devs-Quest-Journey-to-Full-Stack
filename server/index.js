import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Routes
import routesCharacter from "./routes/character.routes.js";
import routesItem from "./routes/item.routes.js";
import routesSkills from "./routes/skill.routes.js"
import routesTask from "./routes/task.routes.js"
import routesQuestion from "./routes/question.routes.js"

// Middlewares
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", (req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Routes used
app.use("/api/characters", routesCharacter);
app.use("/api/items", routesItem);
app.use("/api/skills", routesSkills);
app.use('/api/tasks', routesTask)
app.use('/api/questions', routesQuestion)

app.listen(PORT, () =>
  console.log("Backend started at http://localhost:" + PORT)
);
