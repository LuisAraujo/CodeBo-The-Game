function Level1() {
  this.xmlfile = 'map_level_1';
  this.scene = new Scene();
  this.start();

  this.commands = [
    'stack_new',
    'stack_block_push',
    'stack_character_push',
    'stack_pop',
  ];

  this.codebox = 1;
  this.codeboy = 2;

  this.codebo_posx = 315;
  this.codebo_posy = 200;

  this.map_margintop = 200;
  this.map_marginleft = 70;

  this.limitcommands = 10;

  this.codebo = null;
  this.map;
}

Level1.prototype.updateLevel = function (limitcommands) {
  printCommands(limitcommands);
};

Level1.prototype.start = function () {
  xmlmap = new ReaderXMLFile(this.xmlfile);
  this.arrmap = createArrayMap(xmlmap);

  _this = this;

  //configurando as funcoes de inicio e update
  this.scene.setFunctionStart(_this.setLevel.bind(null, _this.arrmap, _this));

  function teste(_this) {
    _this.updateLevel(_this.limitcommands);
  }

  this.scene.setFunctionUpdate(teste.bind(null, _this));
};

Level1.prototype.setLevel = function (arrmap, _this) {
  createGUIButton();

  var commands = _this.commands;

  //map
  _this.map = new Map(arrmap, _this.map_margintop, this.map_marginleft);
  //console.log(lv1.map);

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

  actions = [];

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
