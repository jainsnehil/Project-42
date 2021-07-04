var iss,spaceCraft,hasDocked,bg;
var issImage,spaceCraftI,Sr,Sl,Su;

function preload(){
 bg=loadImage("Docking-undocking/spacebg.jpg")
 issImage=loadImage("Docking-undocking/iss.png")
 spaceCraftI=loadImage("Docking-undocking/spacecraft1.png")
 Sr=loadImage("Docking-undocking/spacecraft4.png")
 Su=loadImage("Docking-undocking/spacecraft3.png")
 Sl=loadImage("Docking-undocking/spacecraft2.png")
}

function setup() {
  createCanvas(1200,600);
  
  spaceCraft=createSprite(random(200,1100),450,50,50)
  spaceCraft.addImage(spaceCraftI)
  spaceCraft.scale=0.3;
 
 
  iss=createSprite(600,210,50,50)
  iss.addImage(issImage)
  iss.scale=0.8;

  hasDocked=false;

}

function draw() {
  background(bg); 
   console.log(spaceCraft.position.x)
   console.log(spaceCraft.position.y)

  if(!hasDocked){
    if(keyDown("Right_Arrow")){
      spaceCraft.position.x=spaceCraft.position.x+2
      spaceCraft.addImage(Sr)
    }else{
      spaceCraft.addImage(spaceCraftI)
    }
    if(keyDown("Left_Arrow")){
      spaceCraft.position.x=spaceCraft.position.x-2
      spaceCraft.addImage(Su)
    }
    if(keyDown("UP_Arrow")){
      spaceCraft.position.y=spaceCraft.position.y-2
      spaceCraft.addImage(Sl)
    }
    if(keyDown("Down_Arrow")){
      spaceCraft.y=spaceCraft.position.y+1
      spaceCraft.addImage(Sl)
    }
   
  }

  if(spaceCraft.position.x>542&&spaceCraft.position.x<548&& spaceCraft.position.y<298){
    hasDocked=true;
    spaceCraft.addImage(spaceCraftI)
    stroke("white")
    text("Docking Successfull",600,500,100,100)
  }

  

  drawSprites();

}