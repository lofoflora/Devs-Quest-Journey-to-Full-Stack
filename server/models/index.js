import database from "../database.js";
import Character from "./Character.model.js";
import Item from "./Item.model.js";
import Skills from "./Skill.model.js";
import CharacterItem from "./CharacterItem.model.js";

// Mettez ici tous les modèles et les relations
Character.belongsToMany(Item, { through: CharacterItem });
Item.belongsToMany(Character, { through: CharacterItem });

export { Character };
export { Item };
export { Skills };

database.sync().then(() => {
  console.log(`Tables created.`);
});
