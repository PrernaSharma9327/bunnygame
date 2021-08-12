var player;
var score=0;
var snakeGroup;

function preload() {

  //load game assets
  backgroundImg= loadImage("images/bg.png");
  bunnyImg = loadImage("images/bunnyImg.png");
  carrotImg = loadImage("images/carrot.png");
  snakeImg = loadImage("images/snake.png")
 
}


function setup() {
  createCanvas(600,600);

  player = createSprite(40,550,15,15);
  player.addImage(bunnyImg);
  player.scale= 0.2;

  carrot = createSprite(530,60,30,30);
  carrot.scale = 0.2;
  carrot.addImage(carrotImg);

  // snake = createSprite(300,300);
  // snake.addImage(snakeImg);
  snakeGroup= new Group();
  // bg = createSprite(600,600);
  // bg.addImage(backgroundImg);
  
  brick1 = createSprite(80,280);
}

function draw() {
background(backgroundImg);
if (keyDown("up")){
  player.y= player.y-3;
}
if (keyDown("down")){
  player.y= player.y+3;
}
if (keyDown("right")){
  player.x= player.x+3;
}
if (keyDown("left")){
  player.x= player.x-3;
}
if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
  text("NO CHEATING!!",200,200);
  player.x=30;
  player.y=30;
}
generatesnakes();

for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Snake destroyed: "+score,350,50);
}

function generatesnakes(){
if(frameCount % 30===0){
  console.log(frameCount);
  var snake = createSprite(random(60,300),random(290,300),40,5);
  snake.velocityX=random(-4,4);
  snake.velocityY=random(-4,4);
  snakeGroup.add(snake);
  snake.addImage(snakeImg);
  snake.scale=random(0.1,0.3);
  }
}

