import { Router } from "express";
import { Skills } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const skills = await Skills.findAll();
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description, level } = req.body;
    const newSkill = await Skills.create({ name, description, level });
    res.json(newSkill);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
