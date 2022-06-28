var pacman,lowerWall,upperWall,leftWall;







function setup(){
  createCanvas(950, 470);
  pacman=createSprite(550,height/2,50,60);
  lowerWall=createSprite(550,450,1200,40);
  upperWall=createSprite(550,20,1200,40);
  leftWall=createSprite(15,235,40,390);
  
  
  
  
  


}


function draw(){
  background(220);
  
  if(keyDown("right")){
  pacman.x+=5;
 }
 if(keyDown("left")){
  pacman.x-=5;
 }
 if(keyDown("up")){
  pacman.y-=5;
 }
 if(keyDown("down")){
  pacman.y+=5;
 }
   
    
  drawSprites();
  
}



