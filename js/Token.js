class Token {
  constructor(index, owner) {
    //properties of a token are dependent on the player that owns it.
    this.owner = owner;

    //each token object of a given player will now have a unique ID
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }
}