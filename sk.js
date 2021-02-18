var tom1,tom2,tom3,tom4;
var jerry1,jerry2,jerry3;jerry4;
var ground,ground_image;
function preload() {
    //load the images here
   tom1 = loadImage("cat1.png")  
   tom2 = loadImage("cat2.png")
   tom3 = loadImage("cat3.png")
   tom4 = loadImage("cat4.png")
 jerry1 = loadImage("mouse1.png")
 jerry2 = loadImage("mouse2.png")
 jerry3 = loadImage("mouse3.png")
 jerry4 = loadImage("mouse4.png")
 ground_image = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    drawSprites()

    ground=createSprite(100,200,500,600)
    ground.addImage(ground_image)

}

function draw() {

    background(220);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry1.x < (tom.width -jerry1.width)/2){
        tom1.addImage.("cat3")
        tom1.changeAnimation("cat3")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
