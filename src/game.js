import * as board from 'board.js';

var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0xd1cfe2});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// start animating
animate();
function animate() {
    requestAnimationFrame(animate);

    // render the container
    renderer.render(stage);
}

board.drawBoard()