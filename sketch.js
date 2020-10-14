var movobj,fixobj;

function setup() {
  createCanvas(800,800);
  movobj= createSprite(400, 400, 50, 50);
  fixobj=createSprite(400,300,50,100);
  movobj.debug=true;
  fixobj.debug=true;
}

function draw() {
  background("yellow");
  movobj.y=World.mouseY;  
  movobj.x=World.mouseX; 

  if(movobj.x-fixobj.x<=((fixobj.width/2) +( movobj.width/2))
      &&( fixobj.x-movobj.x<=((fixobj.width/2) +( movobj.width/2)))){
     movobj.shapeColor="black";
     fixobj.shapeColor="black";
  }
  if(movobj.y-fixobj.y<=((fixobj.height/2) +( movobj.height/2))
      &&( fixobj.y-movobj.y<=((fixobj.height/2) +( movobj.height/2)))){
     movobj.shapeColor="black";
     fixobj.shapeColor="black";
  }
  else{
    movobj.shapeColor="red";
     fixobj.shapeColor="red";
  }
  drawSprites();
}