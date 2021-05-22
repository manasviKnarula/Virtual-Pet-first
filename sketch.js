var  dog, happyDog, database, foodS, foodStock;
var happyDogImg, dogImg;

function preload()
{
happyDogImg = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(700, 700);

  dog = createSprite(300,300)
  dog.addImage("dog",dogImg)
  dog.scale=0.5;
  database= firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value", readStock);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage("dog",happyDogImg)
  } 
  fill("white")
  textSize(30)
  strokeWeight(4);
  text("Food left:" + foodS,200,500)
  drawSprites();
  fill("white")
  textSize(30)
  strokeWeight(4);
  text("Press the Up arrow to feed Drago",100,100)
}




