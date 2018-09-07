class Game {
  constructor() {
    //new Board object.
    this.board = new Board();
    //players property will hold an array of two players.
    this.players = this.createPlayers();
    this.ready = false;
  }

  /** 
   * Creates two player objects
   * @return  {array}    An array of two player objects.
   */
  createPlayers() {
    const players = [new Player('Player 1', 1, '#e15258', true),
      new Player('Player 2', 2, '#e59a13')
    ];
    return players;
  }
}