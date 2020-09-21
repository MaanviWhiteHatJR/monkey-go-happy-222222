 
  var monkey;
var ground;

var bananaGroup, bananaImage;
var obstaclesGroup, obstacleImage;

var score=0;


var survivalTime=0;



function setup() {
  createCanvas(400, 400);
}
  
function preload(){
  
}

function draw() {
  background(220);

monkey = createSprite(100,340,20,50);
monkey.setAnimation("monkey");
monkey.scale=0.1;

ground = createSprite(400,350,800,10);
ground.velocityX=-4;
ground.x=ground.width/2;

bananaGroup = new Group();
obstaclesGroup = new Group();

score = 0;





function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if (bananaGroup.isTouching(monkey)) {
   bananaGroup.destroyEach(); 
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnbanana();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/60) 
  text("Survival Time: "+ survivalTime, 100,50);
}



function spawnbanana() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
    banana.scale=0.05;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.setAnimation("Stone");
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


  

}