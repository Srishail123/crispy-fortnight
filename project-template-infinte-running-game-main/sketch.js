var rock, track, road, Iground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  runnerImg = loadImage("runner.png");
  rockImg = loadImage("rock.png");
  roadImg = loadImage("road.jpeg");

}

function setup() {
 road=createSprite(200,200,400,400);
 road.addImage(roadImg);
 road.velocityX = 4;
 road.scale=1.5

runner=createSprite(50,300,10,10);
runner.addImage(runnerImg);
runner.scale=0.08
runner.collide(Iground);

Iground=createSprite(30,380,800,100);
Iground.visible=false;



runner.debug = true;
score=0
}

function draw() {
  createCanvas(400,400);
  background(180)

text("Score: "+ score, 500,50);

 if(road.x > 297 ){
    road.x = width/2;
  }



if (gameState === PLAY) {
  score = score + Math.round(getFrameRate()/60);
spawnRocks()
if(keyDown("space")&& runner.y >= 100) {
  runner.velocityY = -12;

  if(rock.isTouching(runner)){
    gameState = END;
  }
}

}

if (gameState === END) {
  runner.velocityX=0
  runner.velocityY=0
  rock.setLifetimeEach(-1); 
  text ("press up arrow to play again")
}

if (keyDown(UP_ARROW)) {
gameState = PLAY
}

runner.velocityY = runner.velocityY + 0.8

drawSprites();
}
function spawnRocks() {
  if (frameCount % 60 === 0){
   rock = createSprite(600,165,10,40);
   rock.x=Math.round(random(370,350)),
   rock.addImage(rockImg);
   rock.velocityX = -(6 + score/100);
}
}