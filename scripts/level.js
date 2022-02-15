//todo: mudar o nome para level.js

function Level({
  namelevel,
  map,
  item,
  commands,
  codebox,
  codeboy,
  codebo_posx,
  codebo_posy,
  codebo_dir,
  map_margintop,
  map_marginleft,
  limitcommands,
  limitblock,
  posxend,
  posyend,
  flag_posx,
  flag_posy,
  item_posx,
  item_posy,
  itemx,
  itemy,
  commandsneedly,
  tutorial,
  istutorial,
  isActive,
  actions_count,
  actions_id
} = {}) {
	
	
  this.xmlfile = map;
  this.scene = new Scene(undefined, isActive);
  this.itemname = item;
  this.scene.setFunctionStart(this.start.bind(this));

  this.commands = commands;

  this.codebox = codebox;
  this.codeboy = codeboy;

  this.codebo_posx = codebo_posx;
  this.codebo_posy = codebo_posy;

  this.codebo_dir = codebo_dir ? codebo_dir : 0;

  this.map_margintop = map_margintop;
  this.map_marginleft = map_marginleft;

  this.limitcommands = limitcommands;

  this.codebo = null;
  this.map;

  //sprite of item in container;
  this.sp_item;

  //controling blocks' limit
  this.limitblock = limitblock;
  this.initial_limitblock = limitblock;

  this.blockused = 0;

  this.posxend = posxend;
  this.posyend = posyend;

  this.flag_posy = flag_posy;
  this.flag_posx = flag_posx;

  this.item_posy = item_posy;
  this.item_posx = item_posx;

  this.itemy = itemy;
  this.itemx = itemx;

  //count ncommands needly to finish level
  this.commandsneedly = commandsneedly;
  this.namelevel = namelevel;
  this.end = false;

  this.scene.tutorial = tutorial;
  this.scene.istutorial = istutorial;
}

Level.prototype.setTutorial = function (tutorial) {
  this.scene.tutorial = tutorial;
};

Level.prototype.reset = function (full) {

 
  if (full) {
    this.blockused = 0;
    this.limitblock = this.initial_limitblock;
  }
  this.hideItem();
  this.end = false;
};

Level.prototype.showItem = function (item) {
  if (this.sp_item != undefined) this.sp_item.setAlpha(1);
  //mudar animação
};

Level.prototype.hideItem = function () {
  if (this.sp_item != undefined) this.sp_item.setAlpha(0);
};

Level.prototype.updateLevel = function (limitcommands) {
  //printCommands(limitcommands);
};

Level.prototype.start = function () {
	
  actions = [];
  actions_count = 0;
  actions_id = [];
  
  xmlmap = new ReaderXMLFile(this.xmlfile);
  this.arrmap = this.createArrayMap(xmlmap);

  this.setLevel(this.arrmap, this);

  _this = this;
  function teste(_this) {
    _this.updateLevel(_this.limitcommands);
  }

  this.scene.setFunctionUpdate(teste.bind(null, this));
  
  this.printCommands();

	
	
};

 /*Exibe os comandos abaixo do play*/
Level.prototype.printCommands = function () {
	
	_this2 = this;

	
	console.log("print");
	
	
	//if(levels[currentLevel].getEnd())
	//	return;

	qtd_block = 0; 
		
	// removendo todos os comandos
	var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('btcommands');
	for (var i = 0; i < objectstag.length; i++) {
	se.mlevel.removeObject(objectstag[i]);
	}
	  
	var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('guicommands');
	for (var i = 0; i < objectstag.length; i++) {
	se.mlevel.removeObject(objectstag[i]);
	}

	var posx = 0;
	var posy = 0;
	var marginx = canvas.width - 280;
	var marginy = 180;
	var j = 0;
	var size = 40;

	actualaction = 0;

	//percorrendo os comandos
	for (var i = 0; i < actions.length; i++) {

		j++;

		//grade de 6 comandos
		if (i % 6 == 0) j = 0;
		posy = parseInt(i / 6) * (size + 5);
		posx = j * (size + 5);

		bt = new MiniButton(
		  null,
		  marginx + posx,
		  marginy + posy,
		  function () {
			  
			  log.addAction("remove > "+actions[this.getId()] + "(" + actions_id[this.getId()]  +")");
			  
			  //removendo as modificações do blockused
			if( actions[this.getId()] == "stack_block_push"){
				levels[currentLevel].blockused--;
				actions.splice(this.getId(), 1);
				actions_id.splice(this.getId(), 1);
			}else if( actions[this.getId()] == "stack_pop"){
				//verifica se o pop remove um codebo ou um bloco
				var pop = 0;
				for(var j = actions.length-1; j >= 0; j--){
					
					if(actions[j] == "stack_pop")
						pop++;
					
					if((actions[j] == "stack_character_push") && (pop == 1))
						break;
					
					else if( (actions[j] == "stack_block_push") && (levels[currentLevel].blockused< levels[currentLevel].limitblock) ){
						
						levels[currentLevel].blockused++;	
						break;
					}

					//fim do loop (exeções do uso do pop no level 5 e 7
					if( (j == 0)  && (pop == 1) && ((currentLevel == 5) || (currentLevel == 7))){
						
						levels[currentLevel].limitblock--;
						
					}	
				}
				
				var blockusedtotal = 0;
				
				for(var j = actions.length-1; j >= 0; j--){
					if(actions[j] == "stack_block_push")
						blockusedtotal++;
				}
				
				if(blockusedtotal <= levels[currentLevel].limitblock){
					actions.splice(this.getId(), 1);
					actions_id.splice(this.getId(), 1);
				}else{
					 msgconsole = "Não é possivel remover esse bloco"
				}
				
				//levels[currentLevel].blockused++;
			}else{
				actions.splice(this.getId(), 1);
				actions_id.splice(this.getId(), 1);
			}
		  
			
			_this2.printCommands();
			
		  },
		  size,
		  size,
		  0,
		  100
		);

		namesp = 'mini_' + actions[i];
		curposx = marginx + posx;
		curposy = marginy + posy;

		if( i == actions.length-1){
			bt.setAnimation(
				[ new Animation([namesp,namesp,namesp,namesp], 2, [{h:size-6, w:size+6, x:curposx-3, y:curposy+3},{h:size-4, w:size+4, x:curposx-2,y:curposy+2},{h:size-2, w:size+2,y:curposx-1,y:curposy+1},{h:size, w:size, x:curposx, y:curposy}], false) ]
			);
		}else{
			bt.setAnimation(namesp);
		}

		bt.setId(i);
		bt.setTag('btcommands');
	 
	}

	
	for (var i = actions.length; i < this.limitcommands; i++) {
		j++;
  
		
		
		//grade de 4 comandos
		if (i % 6 == 0) j = 0;
		posy = parseInt(i / 6) * (size + 5);
		posx = j * (size + 5);

		bt = new MiniButton(
		  'mini_blank',
		  marginx + posx,
		  marginy + posy,
		  function () {
			
			actions.splice(this.getId(), 1);

		  },
		  size,
		  size
		);
		bt.setId(i);
		bt.setTag('btcommands');
	}


	gui_block = new Sprite("gui_block", canvas.width - 130, 125, 25,25);
	gui_block.setTag("guicommands");
	txt_qtd_block = new Text("", canvas.width - 100, 147, "white", 25);
	txt_qtd_block.setTag("guicommands");

	txt_qtd_block.update = function(){

		//this.setText("x" + ( levels[currentLevel].getLimitBlock() - qtd_block) );
		this.setText("x" + ( levels[currentLevel].getLimitBlock() - levels[currentLevel].blockused) );
	}
		
			
}


Level.prototype.printHightlight = function(){
	
	if( levels[currentLevel].codebo.getCurrentAction() > actions.length-1)
		return;
	
	var posx = 0;
	var posy = 0;
	var marginx = canvas.width - 280;
	var marginy = 180;
	var size = 40;
	var j = 0;
  
  
	// removendo todos os comandos
	levels[currentLevel].clearHightlight();
	
	var index = levels[currentLevel].codebo.getCurrentAction();
	j = index;

	//grade de 4 comandos
	if (index % 6 == 0) 
		j = 0;//parseInt(index/6);
	else
		j = index % 6;
	
	posy = parseInt(index / 6) * (size + 5);
	posx = j * (size + 5);	
	var sp = new Sprite("mini_hightlight", marginx + posx, marginy + posy, size, size, 100);  
	sp.setTag('hightbt');		
	
	 
}


Level.prototype.clearHightlight = function(){
	
	var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('hightbt');
	for (var i = 0; i < objectstag.length; i++) {
		se.mlevel.removeObject(objectstag[i]);
	}

}


Level.prototype.createGUIButton = function() {
	
  //barra comandos inferior
  new Rect(0, canvas.height - 100, 100, 660, 'rgba(255, 255, 255, 0.5)');

  //barra menu superior
  new Rect(0, 0, 110, canvas.width, '#30415d');
  

//bara azul comandos
  new Rect(0, canvas.height - 100  - 30, 40, 200, '#30415d');
  new Text('Comandos', 20, canvas.height - 105  , '#fff');

	//paine comandos
new Rect(canvas.width - 300, 150, 580, 1180, 'rgba(255, 255, 255, 0.5)');

//barra azul principal
  new Rect(canvas.width - 260, 120, 40, 200, '#30415d');
  new Text('Principal', canvas.width - 240, 145, '#fff');
  
  

  new Button(
    'button_play',
    canvas.width - 300,
    20,
    function () {
	  msgconsole = "";
	  txt_console.color = "#fff";
	  levels[currentLevel].reset();
	  levels[currentLevel].getCodebo().reset();
	  levels[currentLevel].getMap().reset(levels[currentLevel].getCodebo());
      levels[currentLevel].getCodebo().setCommands(window.actions, levels[currentLevel].getMap().getMap() );
      levels[currentLevel].getCodebo().start();
	  log.addAction("play");
    },
    70,
    70
  );

  //FIXOS DE TODOS OS LEVEL
  new Button(
    'button_stop',
     canvas.width - 220,
    20,
    function () {
      levels[currentLevel].getCodebo().pause();
	  log.addAction("stop");
	  levels[currentLevel].printCommands();
	  celarHightlight();
    },
    60,
    60
  );

  new Button(
    'button_reload',
    canvas.width - 150,
    20,
    function () {
	  msgconsole = "";
	  levels[currentLevel].reset(true);
      levels[currentLevel].getCodebo().reset();
      levels[currentLevel].getMap().reset(levels[currentLevel].getCodebo());
	  levels[currentLevel].blockused = 0;
      actions = [];
	  levels[currentLevel].printCommands();
	  clearHightlight();
	  log.reloadLevel();
	  //log.addAction("reload");
	  
	  
    },
    60,
    60
  );

  new Button('button_help', 20, 20, function () {
	  
	   se.mlevel.getCurrentScene().resetCurrentTutorial();	
	   se.mlevel.getCurrentScene().istutorial = true;
	   log.addAction("help");
  
  }, 70, 70);
  
  
  new Button(
    'button_menu',
    110,
    20,
    function () {
      //menu
      se.mlevel.loadScene(2);
	  log.addAction("menu");
    },
    70,
    70
  );
}


Level.prototype.setLevel = function (arrmap, _this) {
  msgconsole = '';

  new Text(this.namelevel, 200, 80);

  this.createGUIButton();
  this.createConsole();

  var commands = _this.commands;

  //map
  _this.map = new Map(arrmap, _this.map_margintop, this.map_marginleft);

  if (_this.itemname != undefined) {
    _this.map.setItem(
      new Item(
        _this.itemname,
        _this.item_posx,
        _this.item_posy,
        'imagem',
        100,
        _this.itemx,
        _this.itemy
      )
    );
  }

  //CodeBo
  _this.codebo = new Codebo(
    _this.codebo_posx,
    _this.codebo_posy,
    _this.codebox,
    _this.codeboy,
    'play',
    99,
    this.codebo_dir
  );

  _this.codebo.reset();

  //_this.codebo.map = arrmap;

  _this.map.adjustmentLevels(
    _this.codebo.getLevel(),
    _this.codebo.actualx,
    _this.codebo.actualy,
    _this.map
  );

  size = 60;
  marginx = 0;
  posx = 20;
  marginbt = 10;

  //FIXO DE TODOS OS LEVELS
  ['forward', 'left', 'right'].forEach(function (item) {
    _this.createCommandsButton(item, _this.limitcommands);
  });

  commands.forEach(function (item) {
    _this.createCommandsButton(item, _this.limitcommands);
  });

  this.sp_item = new Sprite(this.itemname, canvas.width / 2 - 15, 40, 30, 30);
  this.sp_item.setAlpha(0);
  this.createContainerItem(_this.item);

  //verificar modo de automatizar isso e o item
  anim = new Animation([
    'red_flag', 'red_flag2', 'red_flag3', 'red_flag2'], 10);
	
  this.flag = new Sprite([anim],
    this.flag_posx,
    this.flag_posy,
    30,
    60,
    101
  );
};

Level.prototype.getScene = function () {
  return this.scene;
};

Level.prototype.getCodebo = function () {
  return this.codebo;
};

Level.prototype.getMap = function () {
  return this.map;
};

Level.prototype.getLimitBlock = function () {
  return this.limitblock;
};

Level.prototype.getEnd = function () {
  return this.end;
};

Level.prototype.setEnd = function () {
  if (this.end) return;

  var _this = this;
  
  this.end = true;

  var sp_bg = new Sprite('bg_modal_finish', 200, 100, 800, 400, 'imagem', 200);

  var bt_menu = new Button(
    'bt_menu_level',
    450,
    400,
    function () {
      //ver o indice menu
      se.mlevel.loadScene(2);
    },
    50,
    58
  );

  bt_menu.setZ(201);

  var bt_next = new Button(
    'bt_next_level',
    700,
    400,
    function () {
      //ver o indice  px level
      this.hide();
      //se.mlevel.loadScene(0);

      _this.nextLevel();
      se.mlevel.loadScene(currentLevel + 3);
	  
    },
    50,
    58
  );

  bt_next.setZ(201);

  var sp_txt = new Sprite('gui_congrats', 490, 160);
  sp_txt.setZ(201);

  //colocar pontos no bd
  if (this.commands.length <= this.commandsneedly) {
    var sp_star = new Sprite('gui_star_3', 500, 250);
    star = 3;
    sp_star.setZ(201);
  } else if (this.commands.length <= this.commandsneedly + 3) {
    var sp_star = new Sprite('gui_star_2', 530, 250);
    star = 2;
    sp_star.setZ(201);
  } else {
    var sp_star = new Sprite('gui_star_1', 550, 250);
    star = 1;
    sp_star.setZ(201);
  }

  new Modal([sp_bg, bt_next, bt_menu, sp_txt, sp_star]);
  
  log.finishLevel(currentLevel + 1);
};


Level.prototype.consoleError = function (msg, line) {
	
	msgconsole = msg + " c:"+(line+1);
	txt_console.color = "#f33";
	
	log.addAction("error>"+msgconsole);
	
}
Level.prototype.consoleWarning = function (msg, line) {
	
	msgconsole = msg + " c:"+(line+1);
	txt_console.color = "#fc0";
	
	log.addAction("warning>"+msgconsole);
	
}



Level.prototype.createArrayMap = function(map) {
  arrayMap = [];

  for (var i = 0; i < map.getSize('map'); i++) {
    sizeline = map.getSize('line' + (i + 1));
    arrayMap[i] = [];

    for (var j = 0; j < sizeline; j++) {
      var a = map.getNode('column' + (j + 1), i);
      var b = map.getValue(a);
      arrayMap[i].push(b);
    }
  }

  return arrayMap;
}



Level.prototype.createConsole= function (){
	
	/*CONSOLE*/
	
	new Rect(canvas.width - 290, canvas.height - 90, 80, 280, 'rgba(20,20,20,1)');	
	new Text('>>', canvas.width - 280, canvas.height - 60, '#fff');
	txt_console = new Text("- ", canvas.width - 280, canvas.height - 40, '#fff', 15, "poxel");
	
	txt_console.update = function(){

		//this.setText("x" + ( levels[currentLevel].getLimitBlock() - qtd_block) );
		this.setText(msgconsole);
	}

}


Level.prototype.createContainerItem = function(item) {
	new Text("item", canvas.width/2 - 15, 25, "white", 15);
	new Sprite("container_item", canvas.width/2 - 25, 30, 50, 50 );
}

Level.prototype.nextLevel = function(){
	console.log(currentLevel, levels.length-1 );
	if(currentLevel < levels.length-1){
		currentLevel++;
		log.startLevel( currentLevel + 1 );
	}
}


Level.prototype.createCommandsButton= function(item, limitcommands) {
 
 //
 
 new Button(
    'button_' + item,
    window.posx,
    canvas.height - 70,
   
   function () {
	  
	  log.addAction(item + "("+actions_count+")");
	  actions_id.push(actions_count++);
	  
      if (actions.length < limitcommands) {
		 
		  if(item == "stack_block_push"){
		    
			if(levels[currentLevel].limitblock > levels[currentLevel].blockused) {
				levels[currentLevel].blockused++;	
				actions.push(item);
			}
		  
		  }else if(item == "stack_pop"){
			  
				var pop = 0;
				var action_valid = false;

				for(var j = actions.length-1; j >= 0; j--){
					
					if(actions[j] == "stack_pop"){
						pop++;
					}
						
					if((actions[j] == "stack_character_push") && (pop == 0)){
						action_valid = true;
						break;
					}
					
					else if( (actions[j] == "stack_block_push") && (levels[currentLevel].blockused > 0) ){
						levels[currentLevel].blockused--;	
						action_valid = true;
						break;
					}

					//fim do loop (exeções do uso do pop no level 5 e 7
					if((j == 0) && (pop==0) && ((currentLevel == 5) || (currentLevel == 7))){
						
						levels[currentLevel].limitblock++;	
						action_valid = true;
					}		
				}
				
				if((actions.length == 0) && ((currentLevel == 5) || (currentLevel == 7))){
					levels[currentLevel].limitblock++;	
					actions.push(item);					
				}else if(action_valid) 
					actions.push(item);
				
		  }else{
			   actions.push(item);
		  }
		  
	  }
	  
	   levels[currentLevel].printCommands();
    },
    window.size,
    window.size
  );

  window.posx += window.size + window.marginbt;
}
