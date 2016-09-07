System.register(['board.js'], function (_export, _context) {
    "use strict";

    var board, renderer, stage;

    function animate() {
        requestAnimationFrame(animate);

        // render the container
        renderer.render(stage);
    }

    return {
        setters: [function (_boardJs) {
            board = _boardJs;
        }],
        execute: function () {
            renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0xd1cfe2 });

            document.body.appendChild(renderer.view);

            // create the root of the scene graph
            stage = new PIXI.Container();


            // start animating
            animate();board.drawBoard();
        }
    };
});