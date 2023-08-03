import database from "../database.js";

import Character from "./Character.model.js";
import Item from "./Item.model.js";
import CharacterItem from "./CharacterItem.model.js";
import Skill from "./Skill.model.js";
import Task from "./Task.model.js";
import Question from "./QuestionModel.js";

// Define relationships
Character.belongsToMany(Item, { through: CharacterItem });
Item.belongsToMany(Character, { through: CharacterItem });

export { Character, Item, CharacterItem, Skill, Task, Question };

database.sync().then(() => {
  console.log(`Tables created.`);
});
