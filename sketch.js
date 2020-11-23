var movingrectangle;
var fixedrectangle;
var rect1,rect2,rect3,rect4;
var object1,object2;


function setup() {
  createCanvas(1200,800);
  fixedrectangle=createSprite(600, 400, 50, 80);
  fixedrectangle.shapeColor="black";
  movingrectangle=createSprite(800,400,80,30);
  movingrectangle.shapeColor="black"
  rect1=createSprite(100,100,50,50);
  rect1.shapeColor="black";
  rect2=createSprite(200,100,50,50);
  rect2.shapeColor="black";
  rect3=createSprite(300,100,50,50);
  rect3.shapeColor="black";
  rect4=createSprite(400,100,50,50);
  rect4.shapeColor="black";
}

function draw() {
  background("red");
  movingrectangle.x=mouseX ;
  movingrectangle.y=mouseY;
  if(isTouching(movingrectangle,rect2)){
    rect2.shapeColor="pink";
    movingrectangle.shapeColor="pink";
  }
  else
  {
    movingrectangle.shapeColor="black";
    rect2.shapeColor="black";
  }
  

  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.width/2+object1.width/2&&
    object2.y-object1.y<object2.width/2+object1.width/2 ){
   return true;
}
else
{
  return false;
}
}