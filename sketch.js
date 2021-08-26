var imagemDaTorre, torre;
var imagemDaPorta, porta,grupodeportas;
var imagemDoEscalador,escalador,grupodeescaladores;
function preload(){
  
  imagemDaTorre = loadImage("tower.png");
  imagemDaPorta = loadImage("door.png");
  imagemDoEscalador = loadImage("climber.png");
}
function setup(){
  createCanvas(600,600);
  
  torre = createSprite(300,300);
  torre.addImage("tower",imagemDaTorre);
  torre.velocityY = 1;
  grupodeportas = new Group ();
  grupodeescaladores = new Group ();
}

function draw(){
  background(200);
  
  if(torre.y > 400){
      torre.y = 300
  }
  
  gerarPortas();
  drawSprites();
}
function gerarPortas(){ 
   if (frameCount % 240 === 0) {
  var porta = createSprite(200, -50);
  var escalador = createSprite(200,10);
 
  
  porta.x = Math.round(random(120,400));
  escalador.x = porta.x;
  
  
  porta.addImage(imagemdaporta);
  escalador.addImage(imagemdeescalador);
  
  porta.velocityY = 1;
  escalador.velocityY = 1;
  

 
  //atribuir tempo de vida à variável
  porta.lifetime = 800;
  escalador.lifetime = 800;
 

  
  //adicione cada porta ao grupo
  grupodeportas.add(porta);
  grupodeescaladores.add(escalador);
   }
  }
