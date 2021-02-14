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
  printCommands(limitcommands);
};

Level.prototype.start = function () {
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

Level.prototype.setLevel = function (arrmap, _this) {
  msgconsole = '';

  new Text(this.namelevel, 200, 80);

  createGUIButton();
  createConsole();

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
    createCommandsButton(item, _this.limitcommands);
  });

  commands.forEach(function (item) {
    createCommandsButton(item, _this.limitcommands);
  });

  this.sp_item = new Sprite(this.itemname, canvas.width / 2 - 15, 40, 30, 30);
  this.sp_item.setAlpha(0);
  createContainerItem(_this.item);

  //verificar modo de automatizar isso e o item
  this.flag = new Sprite(
    'red_flag',
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

  this.end = true;

  var sp_bg = new Sprite('bg_modal_finish', 200, 100, 800, 400, 'imagem', 200);

  var bt_menu = new Button(
    'bt_menu_level',
    450,
    400,
    function () {
      //ver o indice menu
      se.mlevel.loadScene(0);
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

      nextLevel();
      se.mlevel.loadScene(currentLevel + 2);
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
};
