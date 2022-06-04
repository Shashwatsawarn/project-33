function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function preload(){
  backImage=loadImage("snow1.jpg")

}
function draw() {
  background(backImage);  
  drawSprites();

}