var bullet, wall;
var  thickness, speed, weight;
var wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(25,30);

 bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1350,200,60,thickness,height/2);
 
bullet.velocityX = 5;






thickness=random(22,83);

}

function draw() {
  background("black");
  
  
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5 * speed*speed/(thickness*thickness*thickness);


   if(damage>10)
   {
     wall.shapeColor=color(255,0,0);

   }

   if(damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
  }
  


  drawSprites();


  hascollided(bullet,wall);
}

function hascollided(bullet,wall)
{

  bulletRightEdge=bullet.x +bullet.width;
  bulletLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}

