var speed1;

var weight1;
var thickness
var damage1;



function setup() {
     createCanvas(1300, 800);
     thickness = Math.round(random(20, 30))




     bullet = createSprite(100, 100, 40, 5);



     speed1 = Math.round(random(15, 20))

     weight1 = Math.round(random(500, 600))


     damage1 = Math.round(0.5 * weight1 * speed1 * speed1 / (thickness * thickness * thickness));

     console.log(damage1)
}

function draw() {
     background(0);
     bullet.velocityX = speed1;

     wall1 = createSprite(1200, 200, thickness, height / 2);

     if (collide(wall1, bullet)) {
    
          bullet.velocityX = 0;
    
     

     
          if (damage1 < 6) {
             wall1.shapeColor = "green";
        }
   
        if (damage1 > 6) {
             wall1.shapeColor = "red";
        }

     }
     drawSprites();
}
