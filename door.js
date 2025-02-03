class Door { //if player touches the box (goes through the door) the level will switch to the shooter 
    constructor(game,x,y) {
        Object.assign(this, {game, x, y});
        this.BB = new BoundingBox(8,34,12,10);
    }
}