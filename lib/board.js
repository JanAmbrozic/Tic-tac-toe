System.register(['tween.js'], function (_export, _context) {
  "use strict";

  var TWEEN;


  function drawBoard(stage) {

    let graphics = new PIXI.Graphics();
    stage.addChild(graphics);

    // set a fill and line style
    graphics.beginFill(0xFF3300);
    graphics.lineStyle(20, 0x2e86ab, 1);

    //draw vertical lines
    let coords = { x: 0, y: 200 };
    var tweenA = new TWEEN.Tween(coords).to({ x: 600, y: 200 }, 500).onUpdate(function () {
      graphics.moveTo(this.x, this.y);
      graphics.lineTo(60, 200);

      graphics.moveTo(620 - this.x, this.y + 200);
      graphics.lineTo(600, 400);
    }).onComplete(() => {
      graphics.endFill();
    });

    //draw horizontal lines
    coords = { x: 400, y: 30 };
    var tweenB = new TWEEN.Tween(coords).to({ x: 400, y: 560 }, 500).onUpdate(function () {
      graphics.moveTo(this.x, this.y);
      graphics.lineTo(400, 100);

      graphics.moveTo(this.x - 200, 600 - this.y);
      graphics.lineTo(200, 560);
    }).onComplete(() => {
      graphics.endFill();
    });

    tweenA.chain(tweenB).start();
  }

  return {
    setters: [function (_tweenJs) {
      TWEEN = _tweenJs.default;
    }],
    execute: function () {
      _export('drawBoard', drawBoard);
    }
  };
});