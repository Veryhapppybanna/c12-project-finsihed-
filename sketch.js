var garden,gardenImg;
var rabbit,rabbitImg;
var apples, applesImg
var leafs, leafsImg
var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0) {
  if(select_sprites == 1) {
    createApples();
  }
  else{
    createleafs();
  }
}

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png")
  leafsImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
 }


 
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX 

  createApples();
  createleafs();
 

  drawSprites();
}

 
function createApples(){
 apple = createSprite(random(50,350),40,10,10);
 apple.addImage(applesImg);
 apple.scale = 0.15; 
 apple.velocityY = 3;
}

function createleafs(){
    leafs = createSprite(random(50,350),40,10,10);
    leafs.addImage(leafsImg);
    leafs.scale = 0.15; 
    leafs.velocityY = 3;
    leafs.Lifetime = 10
   }



 
