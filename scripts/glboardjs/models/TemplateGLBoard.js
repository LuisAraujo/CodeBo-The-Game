import GameData from "./GameData.js";
import PlayerData from "./PlayerData.js";

export default class TemplateGLBoard {
  constructor() {
    this.game_data = new GameData();
    this.player_data = new PlayerData();
  }
}
