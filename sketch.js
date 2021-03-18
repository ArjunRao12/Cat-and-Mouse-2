var tom, jerry, bg, tomImg, jerryImg
var jerrywalk,jerryLast,tomwalk,tomlast
function preload() {
    tomImg = loadImage("images/cat1.png");
    tomwalk = loadAnimation("images/cat2.png","images/cat3.png");
    tomlast = loadImage("images/cat4.png");
    jerrywalk = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerrylast = loadImage("images/mouse4.png");
    jerryImg = loadImage("images/mouse1.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(820,590);
    bg = createSprite(410,300);
    bg.addImage(bgImg);
    bg.scale = 0.85
    jerry = createSprite(150,500);
    jerry.addImage(jerryImg);
    jerry.scale = 0.15;
    tom = createSprite(660,500);
    tom.addImage(tomImg);
    tom.scale = 0.15;
   

    //create tom and jerry sprites here
}

function draw() {
    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2){
       tom.velocityX = 0; 
       tom.addImage(tomlast);
      jerry.addImage(jerryLast);
       tom.x = 800;
    }
    if(keyDown(LEFT_ARROW)){
        tom.velocityX = -5;
        tom.changeAnimation(tomwalk);
        jerry.changeAnimation(jerrywalk);
    }
    drawSprites();
}