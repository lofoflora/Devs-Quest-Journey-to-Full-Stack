import { Router } from "express";
import { Character, Item, Skills } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, specialization } = req.body;
    const newCharacter = await Character.create({ name, specialization });
    res.json(newCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/item", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/item", async (req, res) => {
  try {
    const { name, bonus, malus, price } = req.body;
    const newItem = await Item.create({ name, bonus, malus, price });
    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/skills", async (req, res) => {
  try {
    const skills = await Skills.findAll();
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/skills", async (req, res) => {
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
