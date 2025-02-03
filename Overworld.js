class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
   this.map = null;
 }

  startGameLoop() {
    const step = () => {
      //Clear off the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //make camera
      const camera = this.map.gameObjects.hero;

      //update objects relative to camera before drawing 
      Object.values(this.map.gameObjects).forEach(object => {
      object.update({
        arrow: this.directionInput.direction,
        map: this.map,
      })
    })

      //Draw Lower layer
      this.map.drawLowerImage(this.ctx); //REMEMBER TO ADD CAMERA BACK

      //Draw Game Objects
      Object.values(this.map.gameObjects).forEach(object => {
        object.sprite.draw(this.ctx); //REMEMBER TO ADD CAMERA BACK
      })

      //Draw Upper layer
      this.map.drawUpperImage(this.ctx); //REMEMBER TO ADD CAMERA BACK

      requestAnimationFrame(() => {
        step();
      })
    }
    step();
 }

 bindActionInput() {
  new KeyPressListener("Enter", () => {
    this.map.checkForActionCutScene()
  })
 }

  bindHeroPositionCheck() {
    document.addEventListener("PersonWalkingComplete", e => {
      if (e.detail.whoId == "hero") {
        this.map.checkForFootstepCutscene();
      }
    })
  }

  startMap(mapConfig) {
    this.map = new OverworldMap(mapConfig);
    this.map.overworld = this;
    this.map.mountObjects();
  }

 init() {
  // this.map = new OverworldMap(window.OverworldMaps.Shop);
  // this.map.mountObjects();
  this.startMap(window.OverworldMaps.Shop);

  this.bindActionInput();
  this.bindHeroPositionCheck();

  this.directionInput = new DirectionInput();
  this.directionInput.init();

  this.startGameLoop();

  this.map.startCutScene([
    {type: "textMessage", text: "Get ready for your first day on the job!"},
    {who: "npc1", type: "walk", direction: "up"},
    {who: "npc1", type: "walk", direction: "up"},
    {who: "npc1", type: "walk", direction: "up"},
    {who: "npc1", type: "walk", direction: "up"},
    {who: "npc1", type: "walk", direction: "up"},
  ])
 }
}