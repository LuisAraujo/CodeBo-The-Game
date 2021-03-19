/*
@class Codebo
@desc representa o codebo
*/

function Codebo(x, y, actualx, actualy, classename, z, codebo_dir) {
  h = 50;
  w = 50;

  //animation of codebo
  sprite = [
    new Animation(
      [
        'codebo_sp1',
        'codebo_sp1',
        'codebo_sp1',
        'codebo_sp2',
        'codebo_sp3',
        'codebo_sp4',
        'codebo_sp5',
        'codebo_sp6',
      ],
      5
    ),

    new Animation(
	[
		'codebo_back_sp1'
	],
	5),
	
    new Animation(
	[
		'codebo_left_sp1'
	], 
	5),

    new Animation(
      [
        'codebo_right_sp1',
        'codebo_right_sp2',
        'codebo_right_sp3',
        'codebo_right_sp4',
        'codebo_right_sp5',
        'codebo_right_sp6',
      ],
      5
    ),
  ];
  
  //contantes de direcao
  this.directions = {
    FRONT: 0,
    BACK: 1,
    LEFT: 2,
    RIGHT: 3,
  };

  //flag está na pilha
  this.is_stacked = false;
  //acoes
  this.actions;
  //acao atual
  this.actualaction = -1;
  //level atual (altura do codebo)
  this.actuallevel = 1;
  //
  this.currentexec = 0;
  //flag pausa
  this.inpause = false;
  //direcao atual
  this.actualdirection = 0;
  
  //referencia ao map
  this.map;
  //x e y 
  this.actualx = actualx;
  this.actualy = actualy;
  
  //x e y iniciais (posicao na matriz)
  this.startx = x;
  this.starty = y;
  
  //x e y iniciais (posicao no canvas)
  this.startactualx = actualx;
  this.startactualy = actualy;
  
  this.actualitem = null;
  
  this.end = false;
 
  //chama o super 
  GameObject.call(this, sprite, x, y, classename, h, w, 0, z);
  
  //configura a posicao inicial do codebo (REPETIDO?)
  if(codebo_dir == 0){
	  this.codebo_dir = this.directions.FRONT;
	  this.setFrontDirection();
  }else if (codebo_dir == 1){
	  this.codebo_dir = this.directions.BACK;
		this.setBackDirection();	  
  }else if(codebo_dir == 2){
	  this.codebo_dir = this.directions.LEFT;
	  this.setLeftDirection();
  }else {
	  this.codebo_dir = this.directions.RIGHT;
	  this.setRightDirection();
  }
  
}

//fazendo herança
Codebo.prototype = Object.create(GameObject.prototype);

//configura a pause
Codebo.prototype.pause = function () {
  this.inpause = true;
};

//pega o estado de pause
Codebo.prototype.getPause = function(){
	return this.inpause;
}

//retorna do pause
Codebo.prototype.remot = function () {
  this.inpause = false;
};

//reset estado do robo
Codebo.prototype.reset = function () {
  this.is_stacked = false;
  this.actions;
  this.actuallevel = 1;
  this.currentexec = 0;
  this.inpause = false;
  this.actualdirection = this.codebo_dir;
  this.actualitem = null;
  this.stopCommands();
  this.startPosition();
  this.setAnimationByIndex(this.codebo_dir);

};

//inicia o robo
Codebo.prototype.start = function () {
	
  this.remot();

  _this = this;
  
  //controla o id da execução atual 
  this.currentexec++;
  
  //chama a funcao para rodar os comandos
  setTimeout(function () {
	  //chama o run code com o id da execução atual
    _this.runCommands(_this.currentexec);
  
  }, TimeExecuteAction);

   if(this.codebo_dir == 0)
	   this.setFrontDirection();
   else if(this.codebo_dir == 1)
	   this.setBackDirection();
   else if(this.codebo_dir == 2)
	   this.setLeftDirection();
   else if(this.codebo_dir == 3)
	   this.setRightDirection();
   
};

//configura as ações o mapa
Codebo.prototype.setCommands = function (actions, map) {
  this.actions = actions;
  this.map = map;
};

//pega a ação inicial
Codebo.prototype.getCurrentAction = function(){
	return this.actualaction;
}

//roda o comando
Codebo.prototype.runCommands = function (exec) {
  
  //verifica se não existe uma execução anterior ou se está em pause
  if (exec != this.currentexec || this.inpause) {
    return;
  }
  
  //incrementa a acao atual
  this.actualaction++;
  
  //pega a acao atual no array de acoes
  var action = actions[this.actualaction];
  // var action = this.actions[this.actualaction];  não seria this?
  
  //chama o hightlight referente ao comando atual
  printHightlight();
  
  //verifica caso para action
  if (action == 'forward') {
    
	//se não estiver na pilha 
	if (this.is_stacked === false) {
      
	  //Direção para Frente? 
      if (this.actualdirection == this.directions.FRONT) {
        
		//fora do mapa
		if(this.map[this.actualy + 1] == undefined){
			consoleWarning("Impossível seguir!", this.actualaction);
			return;
		}
		
		//é um block?
		if( this.map[this.actualy + 1][this.actualx] > 10){
			//se não é indefinido e está no mesmo nivel
			if ( 
			  this.map[this.actualy + 1] != undefined &&
			  this.map[this.actualy + 1][this.actualx]%10 == this.getLevel() 
			){
				
			  //mode x e y	
			  this.x += 35;
			  this.y += 17.5;

			  //this.actualx
			  this.actualy += 1;
			
			//sobre o item
			}else{
				consoleWarning("Impossível seguir!", this.actualaction);
			}
			
		//é um elemento não-bloco (ex: ponte)
		}else if ( 
			  this.map[this.actualy + 1][this.actualx] > 0 &&
			  this.map[this.actualy + 1][this.actualx] < 10
			) {
				
			  this.x += 35;
			  this.y += 17.5;

			  //this.actualx
			  this.actualy += 1;
			  
			  
	    }else{
			consoleWarning("Impossível seguir!", this.actualaction);
		}
		
		
	//Direção para Fundo? 
	 } else if (this.actualdirection == this.directions.BACK) {
		//fora do mapa
		if( this.map[this.actualy - 1] == undefined ){
			consoleWarning("Impossível seguir!", this.actualaction);
			return;
		}
			
		//é um bloco?
		if(this.map[this.actualy - 1][this.actualx] > 10){
			//verifica nivel
			if (
			  this.map[this.actualy - 1] != undefined &&
			  this.map[this.actualy - 1][this.actualx]%10 == this.getLevel()
			) {
			  this.x -= 35;
			  this.y -= 17.5;

			  this.actualy -= 1;
			}else {
				consoleWarning("Impossível seguir!", this.actualaction);
			}
			
		//é um não-bloco
		}else if ( 
			  this.map[this.actualy - 1][this.actualx] < 10 &&
			  this.map[this.actualy - 1][this.actualx] > 0
			) {
				
			this.x -= 35;
			this.y -= 17.5;

			this.actualy -= 1;
		
		}else{
				consoleWarning("Impossível seguir!", this.actualaction);
		}
	 
	//Direção para Direita? 	 
	  } else if (this.actualdirection == this.directions.RIGHT) {
        //fora do mapa
		if( this.map[this.actualy] == undefined ){
				consoleWarning("Impossível seguir!", this.actualaction);
				return;
			}
			
		//é um block
		if( this.map[this.actualy][this.actualx - 1] > 10){
			
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx - 1]%10 == this.getLevel()
			) {
			  this.x -= 36;
			  this.y += 18;

			  this.actualx -= 1;
			  //this.actualy
			}else {
				consoleWarning("Impossível seguir!", this.actualaction);
			}
		
		//é um não-bloco
		}else if ( 
			  this.map[this.actualy][this.actualx-1] < 10 &&
			  this.map[this.actualy][this.actualx-1] > 0
			) {
		
			this.x -= 36;
			this.y += 18;

			this.actualx -= 1;

		}else{
				consoleWarning("Impossível seguir!", this.actualaction);
		}

	//Direção para Esquerda? 
	 } else if (this.actualdirection == this.directions.LEFT) {
        //fora do mapa
		if( this.map[this.actualy] == undefined ){
			consoleWarning("Impossível seguir!", this.actualaction);
			return;
		}
		
		//é um bloco
		if(this.map[this.actualy][this.actualx + 1] > 10){
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx + 1]%10 == this.getLevel()
			) {
			  this.x += 36;
			  this.y -= 18;

			  this.actualx += 1;
			 
			}else {
				consoleWarning("Impossível seguir!", this.actualaction);
			}
			
		//é um não-bloco
		}else if ( 
			  this.map[this.actualy][this.actualx + 1] < 10 &&
			  this.map[this.actualy][this.actualx + 1] > 0
			) {
				
			this.x += 36;
			this.y -= 18;

			this.actualx += 1;
		
		}else{
			consoleWarning("Impossível seguir!", this.actualaction);
		}
      }

		//realiza ajuste no mapa para mudar o z dos blocos e codebo
		levels[currentLevel]
		.getMap()
		.adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
        
        //verifica se o bloco possui um item 		
		var item = levels[currentLevel].getMap().getItem();
		//get item?
		if( (item != undefined) && (this.actualx == item.refx) && (this.actualy == item.refy) && (item.active) ){	
			//pega item
			this.getItem(item);	
		}
	

	//se estiver na pilha	
    }else{	
		consoleWarning("Codebo está na pilha!", this.actualaction);
	}
  
  //LEFT  
  } else if (action == 'left') {
    
	//muda a direção
	if (this.actualdirection == this.directions.FRONT) {
      this.setLeftDirection();
    } else if (this.actualdirection == this.directions.LEFT) {
      this.setBackDirection();
    } else if (this.actualdirection == this.directions.RIGHT) {
      this.setFrontDirection();
    } else if (this.actualdirection == this.directions.BACK) {
      this.setRightDirection();
    }

	//ajusta mapa
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
 
 
 //RIGHT
 } else if (action == 'right') {
	
	//muda a direção
    if (this.actualdirection == this.directions.FRONT) {
      this.setRightDirection();
    } else if (this.actualdirection == this.directions.RIGHT) {
      this.setBackDirection();
    } else if (this.actualdirection == this.directions.BACK) {
      this.setLeftDirection();
    } else if (this.actualdirection == this.directions.LEFT) {
      this.setFrontDirection();
    }
	
	//ajusta mapa
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
 
 //NOVA PILHA
 } else if (action == 'stack_new') {
	 
	 //verifica se o nivel a frente é do mesmo nivel do codebo
    if (
      this.actualdirection == this.directions.FRONT &&
      this.map[this.actualy + 1][this.actualx] > 10 &&
	  this.map[this.actualy + 1][this.actualx]%10  == this.getLevel()
    ){
    
		levels[currentLevel].getMap().setLevel( this.actualx, this.actualy + 1, 
		(this.map[this.actualy + 1][this.actualx]%10)*-1 );
    
	 //verifica se o nivel a direita é do mesmo nivel do codebo
	}else if (
      this.actualdirection == this.directions.RIGHT &&
      this.map[this.actualy][this.actualx - 1] > 10 &&
	   this.map[this.actualy][this.actualx -1]%10  == this.getLevel()
    ){
    
		levels[currentLevel].getMap().setLevel(this.actualx - 1, this.actualy, 
		(this.map[this.actualy][this.actualx - 1]%10)*-1
	  );
	  
     //verifica se o nivel ao fundo é do mesmo nivel do codebo
	}else if (
      this.actualdirection == this.directions.BACK &&
      this.map[this.actualy - 1][this.actualx] > 10 &&
	  this.map[this.actualy - 1][this.actualx]%10  == this.getLevel()
    ){
     
	 levels[currentLevel].getMap().setLevel(this.actualx, this.actualy - 1, 
		(this.map[this.actualy - 1][this.actualx]%10)*-1
	  );
	  
     //verifica se o nivel a esquerda é do mesmo nivel do codebo
	}else if (
      this.actualdirection == this.directions.LEFT &&
      this.map[this.actualy][this.actualx + 1] > 10 &&
	   this.map[this.actualy][this.actualx +1]%10  == this.getLevel()
    ){
     
	 levels[currentLevel].getMap().setLevel(this.actualx + 1, this.actualy, 
	 levels[currentLevel].getMap().setLevel(this.actualx + 1, this.actualy, 
		(this.map[this.actualy][this.actualx + 1]%10)*-1
	  );
    
	}else{
		consoleWarning("pilha não criada!", this.actualaction);
	}
	
	//recria o mapa com o novo item
    levels[currentLevel].getMap().create();
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
 
 
 //INSERIR BLOCO NA PILHA
 } else if (action == 'stack_block_push') {
    
	if (
      this.actualdirection == this.directions.FRONT &&
      levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] < 0
    ) {
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx,
          this.actualy + 1,
          parseInt(levels[currentLevel].getMap().map[this.actualy + 1][this.actualx]) - 1
        );
    
	} else if (
      this.actualdirection == this.directions.RIGHT &&
      this.map[this.actualy][this.actualx - 1] < 0
    ) {
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx - 1,
          this.actualy,
          parseInt(levels[currentLevel].getMap().map[this.actualy][this.actualx - 1]) - 1
        );
    } else if (
      this.actualdirection == this.directions.BACK &&
      this.map[this.actualy - 1][this.actualx] < 0
    ) {
      console.log(this.actualy, this.actualx);
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx,
          this.actualy - 1,
          parseInt(levels[currentLevel].getMap().map[this.actualy - 1][this.actualx]) - 1
        );
    } else if (
      this.actualdirection == this.directions.LEFT &&
      this.map[this.actualy][this.actualx + 1] < 0
    ) {
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx + 1,
          this.actualy,
          parseInt(levels[currentLevel].getMap().map[this.actualy][this.actualx + 1]) - 1
        );
    }else{
		
		consoleError("Impossível inserir em uma pilha!", this.actualaction);
		this.pause();
		
	}

    levels[currentLevel].getMap().create();
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
 
  //INSERIR CODEBO NA PILHA
 } else if (action == 'stack_character_push') {
    
	if (
      this.actualdirection == this.directions.FRONT &&
      levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] < 0
    ) {
      
	  var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy + 1][this.actualx]
      );

      //up level
      this.actualy += 1;

      //move to front
      this.x += 35;
      this.y += 17.5;
      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      
	  levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
		
		 this.is_stacked = true;
    
	} else if (
      this.actualdirection == this.directions.RIGHT &&
      this.map[this.actualy][this.actualx - 1] < 0
    ) {
      var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy][this.actualx - 1]
      );

      //up level
      this.actualx -= 1;

      //move to right
      this.x -= 36;
      this.y += 18;

      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
		
		 this.is_stacked = true;
    } else if (
      this.actualdirection == this.directions.BACK &&
      this.map[this.actualy - 1][this.actualx] < 0
    ) {
      var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy - 1][this.actualx]
      );

      //up level
      this.actualx -= 1;

      //move to back
      this.x -= 35;
      this.y -= 17.5;

      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
	
		this.is_stacked = true;
		 
    } else if (
      this.actualdirection == this.directions.LEFT &&
      this.map[this.actualy][this.actualx + 1] < 0
    ) {
      var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy][this.actualx + 1]
      );

      //up level
      this.actualx += 1;

      //move to back
      this.x += 36;
      this.y -= 18;

      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
     this.is_stacked = true;
	}else{
		consoleError("Impossível inserir em uma pilha.", this.actualaction);
		this.pause();
	}
	
   
    levels[currentLevel].getMap().create();
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
  
  
  //REMOVER DA PILHA
  } else if (action == 'stack_pop') {
    
	if (this.is_stacked) {
      
	  console.log('POP is working!', this.actualdirection);
      //O Codebô está empilhado
     

      if (this.actualdirection == this.directions.FRONT) {
        
		//is a bloco
		if(this.map[this.actualy + 1][this.actualx] > 10){
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy + 1][this.actualx]%10 == this.getLevel()
			) {
			  console.log('POP front!');
			   this.is_stacked = false;
			  this.x += 35;
			  this.y += 17.5;

			  //this.actualx
			  this.actualy += 1;
			}else{
				
				consoleError("Codebo não pode sair da pilha!", this.actualaction);
				this.pause();
			}
			
		}else{
			consoleError("Codebo não pode sair da pilha!", this.actualaction);
		    this.pause();
		}
			
      } else if (this.actualdirection == this.directions.BACK) {
        console.log('POP back!');
		//is a block
		if(this.map[this.actualy - 1][this.actualx]  > 10){
			if (
			  this.map[this.actualy - 1] != undefined &&
			  this.map[this.actualy - 1][this.actualx]%10 == this.getLevel()
			) {
			   this.is_stacked = false;
			   
			  this.x -= 35;
			  this.y -= 17.5;

			  this.actualy -= 1;
			}else{
				
				consoleError("Codebo não pode sair da pilha!", this.actualaction);
				this.pause();
			}
			
			
		}else{
			consoleError("Codebo não pode sair da pilha!", this.actualaction);
		    this.pause();
		}
			
      } else if (this.actualdirection == this.directions.RIGHT) {
        console.log('POP right!');
       
	    if( this.map[this.actualy][this.actualx - 1] > 10 ){
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx - 1]%10 == this.getLevel()
			) {
				
				 this.is_stacked = false;
			  this.x -= 36;
			  this.y += 18;

			  this.actualx -= 1;
			  //this.actualy
			}else{
				
				consoleError("Codebo não pode sair da pilha!", this.actualaction);
				this.pause();
			}
			
		}else{
			consoleError("Codebo não pode sair da pilha!", this.actualaction);
		    this.pause();
		}
		
      } else if (this.actualdirection == this.directions.LEFT) {
        console.log('POP left!');
        if(this.map[this.actualy][this.actualx + 1] > 10){
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx + 1]%10 == this.getLevel()
			) {
				
				 this.is_stacked = false;
			  this.x += 36;
			  this.y -= 18;

			  this.actualx += 1;
			  //this.actualy+=1;
			}else{
				
				consoleError("Codebo não pode sair da pilha!", this.actualaction);
				this.pause();
			}
			
		}else{
			consoleError("Codebo não pode sair da pilha!", this.actualaction);
		    this.pause();
		}
	  
      }
	  
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    
	
	} else {
      
	  
	  if (
        this.actualdirection == this.directions.FRONT &&
        levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] < -1
      ) {
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx,
            this.actualy + 1,
            parseInt( levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] ) + 1
          );
     
	 } else if (
        this.actualdirection == this.directions.RIGHT &&
        this.map[this.actualy][this.actualx - 1] < -1
      ) {
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx - 1,
            this.actualy,
            parseInt(levels[currentLevel].getMap().map[this.actualy][this.actualx - 1]) + 1
          );
      } else if (
        this.actualdirection == this.directions.BACK &&
        this.map[this.actualy - 1][this.actualx] < -1
      ) {
        console.log(this.actualy, this.actualx);
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx,
            this.actualy - 1,
            parseInt(levels[currentLevel].getMap().map[this.actualy - 1][this.actualx]) + 1
          );
      } else if (
        this.actualdirection == this.directions.LEFT &&
        this.map[this.actualy][this.actualx + 1] < -1
      ) {
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx + 1,
            this.actualy,
            parseInt(levels[currentLevel].getMap().map[this.actualy][this.actualx + 1]) + 1
          );
      
	  }else{
		   consoleError("Erro ao desempilhar!!", this.actualaction);
		   this.pause();
	  }

      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    }


  //COLOCA ITEM NO MAP
  } else if (action == 'set_item') {
	  console.log(this)
	  if(this.actualitem != null){
	
			if (
			  this.actualdirection == this.directions.FRONT &&
			  this.map[this.actualy + 1][this.actualx] == 10
			){
			  levels[currentLevel].getMap().setLevel(this.actualx, this.actualy + 1, 1);
			  this.removeItem();
			  
			}else if (
			  this.actualdirection == this.directions.RIGHT &&
			  this.map[this.actualy][this.actualx - 1] == 10
			){
				levels[currentLevel].getMap().setLevel(this.actualx - 1, this.actualy, 1);
				this.removeItem();
			
			}else if (
			  this.actualdirection == this.directions.BACK &&
			  this.map[this.actualy - 1][this.actualx] == 10
			){
			  levels[currentLevel].getMap().setLevel(this.actualx, this.actualy - 1, 1);
			  this.removeItem();
			  
			}else if (
			  this.actualdirection == this.directions.LEFT &&
			  this.map[this.actualy][this.actualx + 1] == 10
			){
			  levels[currentLevel].getMap().setLevel(this.actualx + 1, this.actualy, 1);
			  this.removeItem();
			}
			
			levels[currentLevel].getMap().create();
			levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
	  }
	} 
 
 
	//is in the end?
	if((this.actualx == levels[currentLevel].posxend) && (this.actualy == levels[currentLevel].posyend)){
		
		if(!this.end){
			console.log("ok");
			this.end = true;
			levels[currentLevel].setEnd();
			
		}
	}
		
		

  _this = this;

  if (this.actualaction < actions.length) {
    setTimeout(function () {
      _this.runCommands(exec);
    }, TimeExecuteAction);
  }else{
	  log.commandsPlay();
	  this.pause();
  }
  
};

Codebo.prototype.stopCommands = function (actions) {
  this.actualaction = -1;

  //colocar na posicao inicial (ver a relacao como o map)
};

Codebo.prototype.upLevel = function () {
  this.actuallevel++;
  this.updateZ();
};

//diminbui o level
Codebo.prototype.downlevel = function () {
  this.actuallevel--;
  this.updateZ();
};

//usar isso para mudança de nivel e gera a ideia de 3d
Codebo.prototype.updateZ = function () {
  if (this.actuallevel == 1) this.z = 99;
  else if (this.actuallevel == 2) this.z = 100;
  else if (this.actuallevel == 3) this.z = 101;
};

Codebo.prototype.changeLevel = function (level) {
  this.actuallevel = level;
};

Codebo.prototype.getLevel = function () {
  return this.actuallevel;
};

Codebo.prototype.startPosition = function () {
  this.actualx = this.startactualx;
  this.actualy = this.startactualy;
  this.x = this.startx;
  this.y = this.starty;
};

Codebo.prototype.setLeftDirection = function () {
  this.actualdirection = this.directions.LEFT;
  this.setAnimationByIndex(2);
};

Codebo.prototype.setRightDirection = function () {
  this.actualdirection = this.directions.RIGHT;
  this.setAnimationByIndex(3);
};

Codebo.prototype.setFrontDirection = function () {
  this.actualdirection = this.directions.FRONT;
  this.setAnimationByIndex(0);
};

Codebo.prototype.setBackDirection = function () {
  this.actualdirection = this.directions.BACK;
  this.setAnimationByIndex(1);
};



Codebo.prototype.getItem = function (item) {
   console.log(this);
   levels[currentLevel].showItem(item);
   item.hide();
   this.actualitem = item;

};


Codebo.prototype.removeItem = function (item) {
   
   levels[currentLevel].hideItem(item);
   this.actualitem = null;

};
