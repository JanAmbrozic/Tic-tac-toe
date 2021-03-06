import * as board from 'board.js';
import TWEEN from 'tween.js';

console.log(TWEEN)
let renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0xf6f5ae});
document.body.appendChild(renderer.view);

// create the root of the scene graph
let stage = new PIXI.Container();

// start animating
animate();
function animate(time) {
    requestAnimationFrame(animate);
    //update tweens
    TWEEN.update(time);
    // render the container
    renderer.render(stage);
}

board.drawBoard(stage)
