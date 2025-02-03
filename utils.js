const utils = {
  withGrid(n) {
    return n * 16;
  },

  asGridCoord(x,y) {
    return `${x*16},${y*16}`
  },

  nextPosition(initalX, initalY, direction) {
    let x = initalX;
    let y = initalY;
    const size = 16;
    if(direction == "left") {
      x -= size;
    }
    if(direction == "right") {
      x += size;
    }
    if(direction == "up") {
      y -= size;
    }
    if(direction == "down") {
      y += size;
    }
    return {x,y};
  },

  currentPosition (initalX, initalY, direction) {
    return {x,y};
  },

  oppositeDirection(direction) {
    if(direction == "right") {
      return "left";
    }
    if(direction == "left") {
      return "right";
    }
    if(direction == "up") {
      return "down";
    }
    if(direction == "down") {
      return "up";
    }
  },

  emitEvent(name, detail) {
    const event = new CustomEvent(name, {
       detail
    });
    document.dispatchEvent(event);
  }
}