var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var player,imgPlayer;
var moeda0,moeda1,moeda2,moeda3,moeda4,moeda5,moeda6,moeda7,moeda8,moeda9,imgMoeda;
var chaoInvisivel,ImgFundo;
var chao,imgChao;
var boss,imgBoss;
var engine,world;
var Canvas
var EstadoJogo = 1;
var menu;
var grupoMoedas = [];
var fundodomenu


function preload(){
  ImgFundo = loadImage("gamingbackground2.png");
  //imgChao = loadImage();
  imgPlayer = loadImage("");
}
function setup(){
  Canvas = createCanvas(1920,933);
  chao = createSprite(960,830,50,50);
  player = createSprite(100,645,30,100);
  player.addImage("ImagemPlayer",imgPlayer);
  player.scale = 3
  engine = Engine.create();
  world = engine.world;
  menu = new Menu();
  chaoInvisivel = createSprite(960,700,1920,10);
  chaoInvisivel.visible = false
  grupoMoedas = new Group();
}
function draw(){
  background(ImgFundo);
  player.velocityY += 1
  player.collide(chaoInvisivel);
  
  if(EstadoJogo === 1){
    chao.velocityX = -5
    var SelecionarGrupoMoedas = Math.round(random(1,3));
    if (frameCount % 150 == 0) {
      if (SelecionarGrupoMoedas == 1) {
        gerarMoedasCirculo();
       
      } else if (SelecionarGrupoMoedas == 2) {
        gerarMoedasCirculo();
       
      } else {
        gerarMoedasCirculo();
        
      }
  }
  if(chao.x < 360){
    chao.x = 960
  }
  if(keyDown("SPACE") && player.y > 450 && EstadoJogo === 1){
    player.velocityY -= 2
  }
  grupoMoedas.setVelocityXEach(-5);
  if(keyDown("UP_ARROW")){
    EstadoJogo = 2
  }
  
  }
  if(EstadoJogo === 2 ){
    chao.velocityX = 0
    menu.display();
    grupoMoedas.setVelocityXEach(0);
    if(keyDown("RIGHT_ARROW") && EstadoJogo === 2){
      menu.hide();
      EstadoJogo = 1
    }
  }
  drawSprites();
}
function gerarMoedasCirculo(){

    moeda0 = createSprite(2110,270,50,50);  
    moeda1 = createSprite(2050,270,50,50);
    moeda2 = createSprite(1990,330,50,50);
    moeda3 = createSprite(2170,330,50,50);
    moeda4 = createSprite(1990,390,50,50);
    moeda5 = createSprite(2170,390,50,50);
    moeda6 = createSprite(2050,450,50,50);
    moeda7 = createSprite(2110,450,50,50);


    grupoMoedas.add(moeda0);   
    grupoMoedas.add(moeda1);
    grupoMoedas.add(moeda2);
    grupoMoedas.add(moeda3);
    grupoMoedas.add(moeda4);
    grupoMoedas.add(moeda5);
    grupoMoedas.add(moeda6);
    grupoMoedas.add(moeda7);

    
    
    
}
