import { BaseService } from "./base.collection";

class GameCollection extends BaseService<IGame> {
  constructor() {
    super("Game");
  }
}

export { GameCollection };
