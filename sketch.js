var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var obstacleTop, obstacleBottom, obstacleTopImg, obstacleBottom1, obstacleBottom2;
var gameOver, gameOverOmg;
var restart, restartImg;
var backgroundImg;
var score=0;
//GameState 
var PLAY =1;
var END = 0;
var gameState=PLAY;

function preload(){
  bgImg = loadImage("assets/bg.png");
  bgImg2= loadImage("assets/bg2.jpg");
  obsTop1= loadImage("assets/obsTop1.png");
  obsTop2= loadImage("assets/obsTop2.png");
  obsBottom1= loadImage("assets/obsBottom1.png");
  obsBottom2= loadImage("assets/obsBottom2.png");
  obsBottom3= loadImage("assets/obsBottom3.png");
  gameOverImg= loadImage("assets/gameOver.png");
  restartImg= loadImage("assets/restart.png");
  jumpSound=loadSound("assets/jump.mp3");
  dieSound=loadSound("assets/die.mp3");
  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
 
//intializing groups 
topObstaclesGroup=new Group ();
bottomObstaclesgroup=new Group ();
barGroup = new Group();

//gameOver=createsprite 


}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}
function Bar(){
  if(world.frameCount%60===0){
   var bar=createSprite(400,200,10,800);
   bar.velocityX= -6;
   bar.depth=balloon.depth;
   bar.lifetime=70;
   bar.visible=false;
   barGroup.add(bar);
  }
}

function Score(){
    if(balloon.isTouching(barGroup)){
      score=score+1;

    }
    textSize(30);
    fill ("yellow");
    text("Score : "+score,250,50);
}