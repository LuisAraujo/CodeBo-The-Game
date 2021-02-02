function Level1(isActive) {
	
  this.xmlfile = 'map_level_1';
  this.scene = new Scene(undefined, isActive);
  
  this.scene.setFunctionStart( this.start.bind(this) );
  
  this.commands = [
    'stack_new',
    'stack_block_push',
    'stack_character_push',
    'stack_pop',
  ];

  this.codebox = 2;
  this.codeboy = 1;

  this.codebo_posx = 315;
  this.codebo_posy = 200;

  this.map_margintop = 200;
  this.map_marginleft = 70;

  this.limitcommands = 10;

  this.codebo = null;
  this.map;
  
  //this.item;
  this.sp_item;
  
}


Level1.prototype.reset = function(){
	this.hideItem();
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
  
   
  this.sp_item = new Sprite("item_bridge", canvas.width/2 - 15, 40, 30, 30 );
  this.sp_item.setAlpha(0);
  createContainerItem(_this.item);
  
  
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
