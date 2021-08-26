  if (frameCount % 240 === 0) {
    var porta = createSprite(200, -50);
    var escalador = createSprite(200,10);
    var blocoInvisivel = createSprite(200,15);
    blocoInvisivel.width = escalador.width;
    blocoInvisivel.height = 2;
    
    porta.x = Math.round(random(120,400));
    escalador.x = porta.x;
    blocoInvisivel.x = porta.x;
    
    porta.addImage(imagemDaPorta);
    escalador.addImage(imagemDeEscalador);
    
    porta.velocityY = 1;
    escalador.velocityY = 1;
    blocoInvisivel.velocityY = 1;
    
    fantasma.depth = porta.depth;
    fantasma.depth +=1;
   
    //atribuir tempo de vida à variável
    porta.lifetime = 800;
    escalador.lifetime = 800;
    blocoInvisivel.lifetime = 800;

    
    //adicione cada porta ao grupo
    grupoDePortas.add(porta);
    blocoInvisivel.debug = true;
    grupoDeEscaladores.add(escalador);
    grupoDeBlocoInvisivel.add(blocoInvisivel);
