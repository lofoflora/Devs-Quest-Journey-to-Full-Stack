import { Router } from "express";
import { Item } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description, bonus, malus, price } = req.body;
    const newItem = await Item.create({
      name,
      description,
      bonus,
      malus,
      price,
    });
    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
