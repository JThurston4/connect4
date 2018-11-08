import GameServices from "./game-services.js"


let gameServices = new GameServices

function refreshScreen(turn) {
  /*if (turn == redsTurn) {
    this.blackTurn()
  } else {
    this.redTurn()
  }*/
  console.log("fucntion in controller running")
}



export default class GameController {
  constructor() {
    console.log("hello from the controller")
  }

  redTurn() {
    let redsTurn = gameServices.redTurn()
    refreshScreen(redsTurn)
  }

  blackTurn() {
    let blacksTurn = gameServices.blackTurn()
    refreshScreen(blacksTurn)
  }
}