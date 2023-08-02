import { Router } from "express";
import Character from "../models/Character.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (err) {
    console.error(err)
  }
});

export default router;