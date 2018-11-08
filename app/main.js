import GameController from "./components/game-controller.js"




class App {
  constructor() {
    this.controller = {
      gameController: new GameController()
    }
  }
}




window.app = new App()