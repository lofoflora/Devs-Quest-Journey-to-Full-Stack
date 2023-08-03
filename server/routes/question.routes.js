// routes/questions.routes.js
import { Router } from 'express';
import { Question } from '../models/index.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
