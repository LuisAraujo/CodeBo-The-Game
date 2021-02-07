function Level1(isActive) {
	
  this.xmlfile = 'map_level_1';
  this.scene = new Scene(undefined, isActive);
  this.itemname = "item_bridge";
  this.scene.setFunctionStart( this.start.bind(this) );
  
  this.commands = [
    'stack_new',
    'stack_block_push',
    'stack_character_push',
    'stack_pop',
	'set_item'
  ];

  this.codebox = 2;
  this.codeboy = 1;

  this.codebo_posx = 315;
  this.codebo_posy = 200;

  this.map_margintop = 200;
  this.map_marginleft = 70;

  this.limitcommands = 20;

  this.codebo = null;
  this.map;
  
  //sprite of item in container;
  this.sp_item;
  
  //controling blocks' limit 
  this.limitblock = 5;
  this.blockused = 0;
  
  this.posxend = 1;
  this.posyend = 0;
  
  //count ncommands needly to finish level
  this.commandsneedly = 10;
  this.namelevel = "teste";
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

  console.log("iniciando", this.xmlfile);
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
  this.flag = new Sprite("red_flag", 250, 180, 30, 60, 100);
  
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
		 se.mlevel.loadScene(0);
		 
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
	 
	new Modal([sp_bg, bt_next, bt_menu, txt_level, sp_star]);
	
	
  
};

