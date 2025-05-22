var jump,jumpimg
var fondoimg,mar,sump
var marine,marineimage,barcoGroup
var dead
var score=0
var sad,sadImage,zoropnj
var PLAY=1 
var END= 0
var gameState=PLAY
var reset,resetImage
function preload(){
jumpimg=loadAnimation("luffy 2.jpg")
fondoimg=loadImage("fondo.jpg")
marineimage=loadImage("marine.png")
sump=loadSound("music.mp3")
dead=loadSound("dead.mp3")
sadImage=loadImage("sad.png")
resetImage=loadImage("reset.png")
jumps=loadAnimation("kaidobest.jpg")
zoropnj=loadAnimation("zoro.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
mar=createSprite(width/2,250,width,120)
mar.addImage(fondoimg)
jump=createSprite(499,height-80,20,20)
jump.addAnimation("jump",jumpimg)
jump.addAnimation("zoro",zoropnj)
jump.scale=0.19
zoropnj.scale=0,10
score=0
invisuelo=createSprite(width/2,height-40,width,125)
invisuelo.visible=false
 barcoGroup=createGroup()
 sad=createSprite(width/2,height/2- 50);
 sad.addImage(sadImage);
 sad.scale = 0.90
 reset=createSprite(width/2,height/2- 5);
 reset.addImage(resetImage)
 reset. scale=.99
 jump.setCollider("circle",0,0,30)
 jump.debug=false
 jump.addAnimation("y se murio ):",jumps)
}
function draw(){
  background(fondoimg)

  if(gameState===PLAY){
  sad.visible=false
  reset.visible=false
  sump.setVolume(0.1)
  jump.collide(invisuelo)
if(keyDown("space")&&jump.y>=350){
 jump.velocityY=-16

score=score+1





}
jump.velocityY=jump.velocityY+0.8


//if(jump.isTouching(barcoGroup)){


  //jump.velocityY=-16
//}
if(barcoGroup.isTouching(jump)){
gameState=END

}


barcos()
  } else if(gameState=== END){
    
sump.pause()
sad.visible=true
reset.visible=true
jump.velocityY=0
jump.changeAnimation("y se murio ):",jumps)
barcoGroup.setVelocityXEach(0)
  }
  if(mousePressedOver(reset)){

rest()


  }
drawSprites()
textSize(30)
fill("black")
  text("score: "+score,20,50)
}
function barcos()
{
if(frameCount % 60 ===0){
  marine = createSprite(1200, height - 85, 20, 20)

  marine.addImage(marineimage)
  marine.scale = 0.50


marine.velocityX=-(6+3*score/200)
barcoGroup.add(marine)
}
}

function rest(){

reset.visible=false
sad.visible=false
gameState=PLAY
score=0

barcoGroup.destroyEach()
jump.changeAnimation("jump",jumpimg)

}

