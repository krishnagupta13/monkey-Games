
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
   ground=createSprite(300,260,600,20)
    ground.velocityX = -5;
   invisibleGround = createSprite(300,270,600,20) 
    invisibleGround.visible = false;
   monkey=createSprite(100,250,30,30)
    monkey.addAnimation("running",monkey_running)
    monkey.scale=0.1;
    
    obstacleGroup = createGroup();
  
}


function draw() {
 background(180);
  if(ground.x < ground.width/2){
     ground.x = ground.width/2
     }
  if(keyDown("space") && monkey.y>=200){
    monkey.velocityY = -12;
   }
  if(monkey.isTouching(obstacleGroup)){
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround);
  
   spawnObstacles();
  spawnBananas();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 80 === 0){
    var obstacle = createSprite(600,235,30,30)
    obstacle.velocityX=-4
    obstacle.addImage("obs",obstacleImage)
    obstacle.scale = 0.09 ;
    obstacleGroup.add(obstacle);
  }
    
}
function spawnBananas(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,185,30,30)
    banana.velocityX=-4;
    banana.addImage("bananas",bananaImage)
    banana.scale = 0.08;
  }
  
 
    
}







