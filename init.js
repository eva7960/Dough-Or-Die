(function () {

  //creates asset manager and game container
  const overworld = new Overworld({
    element: document.querySelector(".game-container")
  });
  overworld.init();

})();