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
  
