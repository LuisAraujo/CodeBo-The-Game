function Level({namelevel,map, item, commands, codebox, codeboy, codebo_posx, codebo_posy, map_margintop,map_marginleft,limitcommands, limitblock, posxend, posyend, flag_posx, flag_posy,commandsneedly,isActive} = {} ) {
	
  this.xmlfile = map;
  this.scene = new Scene(undefined, isActive);
  this.itemname = item;
  this.scene.setFunctionStart( this.start.bind(this) );
  
  this.commands = commands;
  
  this.codebox = codebox;
  this.codeboy = codeboy;

  this.codebo_posx = codebo_posx;
  this.codebo_posy = codebo_posy;

  this.map_margintop = map_margintop;
  this.map_marginleft = map_marginleft;

  this.limitcommands = limitcommands;

  this.codebo = null;
  this.map;
  
  //sprite of item in container;
  this.sp_item;
  
  //controling blocks' limit 
  this.limitblock = limitblock;
  this.blockused = 0;
  
  this.posxend = posxend;
  this.posyend = posyend;
  
  this.flag_posy = flag_posy;
  this.flag_posx = flag_posx;
  
  //count ncommands needly to finish level
  this.commandsneedly = commandsneedly;
  this.namelevel = namelevel;
  this.end = false;
  
}


Level1.prototype.reset = function(full){
	if(full)
		this.blockused = 0;
	this.hideItem();
	this.end = false;
}

Level1.prototype.showItem = function(item){
	
	this.sp_item.setAlpha(1);
	//mudar animação
	
}

Level1.prototype.hideItem = function(){
	this.sp_item.setAlpha(0);
}

Level1.prototype.updateLevel = function (limitcommands) {
  printCommands(limitcommands);
};


Level1.prototype.start = function () {

   actions = [];

  xmlmap = new ReaderXMLFile(this.xmlfile);
  this.arrmap = createArrayMap(xmlmap);

 this.setLevel(this.arrmap, this);
 
 _this = this;
  function teste(_this) {
    _this.updateLevel(_this.limitcommands);
  }

  this.scene.setFunctionUpdate(teste.bind(null, this));
  
};

Level1.prototype.setLevel = function (arrmap, _this) {
	
  createGUIButton();

  var commands = _this.commands;

  //map
  _this.map = new Map(arrmap, _this.map_margintop, this.map_marginleft);

  //CodeBo
  _this.codebo = new Codebo(
    _this.codebo_posx,
    _this.codebo_posy,
    _this.codebox,
    _this.codeboy,
    'play',
    99
  );
  
 

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
    createCommandsButton(item, _this.limitcommands);
  });

  commands.forEach(function (item) {
    createCommandsButton(item, _this.limitcommands);
  });
  
   
  this.sp_item = new Sprite(this.itemname, canvas.width/2 - 15, 40, 30, 30 );
  this.sp_item.setAlpha(0);
  createContainerItem(_this.item);
   
  //verificar modo de automatizar isso e o item
  this.flag = new Sprite("red_flag", this.flag_posx, this.flag_posy, 30, 60, 100);
  
};

Level1.prototype.getScene = function () {
  return this.scene;
};

Level1.prototype.getCodebo = function () {
  return this.codebo;
};

Level1.prototype.getMap = function () {
  return this.map;
};

Level1.prototype.getLimitBlock = function () {
  return this.limitblock;
};


Level1.prototype.getEnd = function () {
  return this.end;
};


Level1.prototype.setEnd = function () {
	 
	 if(this.end)
		  return;
	  
	 this.end = true;
	 
	
	var sp_bg = new Sprite("bg_modal_finish", 200,100, 800, 400, "imagem", 200);
	
	var bt_menu = new Button("bt_menu_level", 400, 400,  function(){
		 //ver o indice menu
		 se.mlevel.loadScene(0);
		
	}, 50,50);
	
	bt_menu.setZ(201);
	
	var bt_next = new Button("bt_next_level", 700, 400, function(){
		//ver o indice  px level
		 this.hide();
		 //se.mlevel.loadScene(0);
		 
		 nextLevel();
		 se.mlevel.loadScene(currentLevel);
		 
		 
	}, 50,50);
	
	bt_next.setZ(201);
		
	var sp_txt = new Sprite("gui_congrats", 500, 200 );
	sp_txt.setZ(201);
	
	//colocar pontos no bd
	 if(this.commands.length <= this.commandsneedly){
		var sp_star = new Sprite("gui_star_3", 500, 250);
		star = 3;
		sp_star.setZ(201);
	 
	 }else  if(this.commands.length <= this.commandsneedly+3){
		var sp_star = new Sprite("gui_star_2", 530, 250);
		star = 2;
		sp_star.setZ(201);
	 
	 }else{
		var sp_star = new Sprite("gui_star_1", 550, 250);
		star = 1;
		sp_star.setZ(201);
	 }
	 
	new Modal([sp_bg, bt_next, bt_menu, sp_txt, sp_star]);
	
	
  
};

