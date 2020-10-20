var car;
var wall;
var speed;
var weight;


function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,40,15);
  car.velocityX=speed;
  car.shapeColor=color("white");

  wall=createSprite(650,200,30,height/2);
  wall.shapeColor=color("white");
}

function draw() {
  background("black");  
 
  if (wall.x-car.x < (car.width+wall.width)/2){

   car.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22509;
   if (deformation>180)
   {
     car.shapeColor=color(255,0,0);
   }

   if (deformation<180 && deformation>100)
   {
     car.shapeColor=color(230,230,0);
   }

   if (deformation<100)
   {
     car.shapeColor=color(0,225,0);
   }


}
 

 
 
  drawSprites();
}