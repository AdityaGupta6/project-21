function collide(object1,object2){
    if (object1.x - object2.x < object1.width / 2 + object2.width / 2&&object2.x - object1.x < object1.width / 2 + object2.width / 2) {
  return true;
    }
    else if(object1.x - object2.x < object1.height / 2 + object2.height / 2&&object2.x - object1.x < object1.height / 2 + object2.height / 2) {
         object2.velocityY = 0;
    }

}