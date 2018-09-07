class Token {
  constructor(index, owner) {
    //properties of a token are dependent on the player that owns it.
    this.owner = owner;

    //each token object of a given player will now have a unique ID
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  /** 
   * Gets associated htmlToken.
   * @return  {element}   Html element associated with token object.
   */
  get htmlToken() {
    return document.getElementById(this.id);
  }

  /** 
   * Draws new HTML token.
   */
  drawHTMLToken() {
    const token = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }
}