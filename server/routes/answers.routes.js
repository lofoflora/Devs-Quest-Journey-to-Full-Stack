// routes/answers.routes.js
import { Router } from 'express';
import { Question } from '../models/index.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { questionId, selectedOption } = req.body;

    // Recherche de la question dans la base de données
    const question = await Question.findByPk(questionId);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Vérification de la réponse
    const isCorrect = selectedOption === question.correctOption;

    // Vous pouvez ajouter ici la logique pour augmenter le niveau du joueur

    res.json({ isCorrect });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
