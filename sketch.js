function preload(){
    bg= loadImage("image/iss.png");
    sleep= loadAnimation("image/sleep.png");
    brush= loadAnimation("image/brush.png");
    gym= loadAnimation("image/gym21.png","images/22.png");
    eat= loadAnimation("image/eat.png");
    drink= loadAnimation("image/drink.png");
    move= loadAnimation("image/brush.png");

}

function setup() {
 astronaut = creatSprite(300,230);
 astronaut.addAnimation("sleeping,sleep");
 astronaut.scale = 0.1;
     UP_ARROW = Brushing;
     DOWN_ARROW = Gymming;
     LEFT_ARROW = Eating;
     RIGHT_ARROW =  BatHing;
     M_KEY = Moving;

     if(KeyDown("UP_ARROW")){
         astronaut.addAnimation("brushing",brush);
         astronaut.changeAnimation("brushing",brush);
         astronaut.y = 350;
         astronaut.velocityX = 0;
         astronaut.velocityY = 0;
     }

}
 
function draw(){

}