var car,wall; 
var speed,weidht;

function setup() {
  createCanvas(1600,400);
 
  car=createSprite(50,200,50,50)
  wall=createSprite(1000, 200,60,100);


speed=random(55,90);
weidth=random(400,1500);

car.velocityX= speed;


}

function draw() {
  background("yellow");

  if(wall,x=car,x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weidht * speed * speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }
if(deformation<180 && deformation>100){
  car.shapeColor="yellow";
}
if(deformation<100){
  car.shapeColor="green"
}

}

drawSprites();
  }
  
 
