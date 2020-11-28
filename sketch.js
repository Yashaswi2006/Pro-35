//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog1;
function preload()
{

  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}

function setup() {
	createCanvas(500, 500);
  dog1 = createSprite(250,300,100,100);
  dog1.addImage(dog);
  dog1.scale=0.2
}


function draw() {  

  background(46, 139, 87);

  //add styles here
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog1.addImage(dogHappy);
  }
  
  drawSprites();
  stroke(1);
  fill("Black");
  textSize(25);
  text("Note: Press UP_ARROW Key to feed Drago Milk",50,30);
  text("Food remaining: "+foodStock,100,100);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}