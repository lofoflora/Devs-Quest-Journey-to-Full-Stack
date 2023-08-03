import { Router } from "express";
import { Character } from "../models/index.js";

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

router.get("/:id", async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    res.json(character);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/items", async (req, res) => {
  try {
    const character = await Character.findOne({ where: { id: req.params.id } });
    const items = await character.getItems();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});
export default router;
