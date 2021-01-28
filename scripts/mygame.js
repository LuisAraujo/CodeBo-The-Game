const se = new StarterEngine();

se.setResources = function () {
  //Add lista resource
  //this.loader.addResource("background", "Backgrounds/purple.png", "image");

  //sprites CodeBo pra frente
  this.loader.addResource('codebo_sp1', 'codebo/forward/sp1.png', 'image');
  this.loader.addResource('codebo_sp2', 'codebo/forward/sp2.png', 'image');
  this.loader.addResource('codebo_sp3', 'codebo/forward/sp3.png', 'image');
  this.loader.addResource('codebo_sp4', 'codebo/forward/sp4.png', 'image');
  this.loader.addResource('codebo_sp5', 'codebo/forward/sp5.png', 'image');
  this.loader.addResource('codebo_sp6', 'codebo/forward/sp6.png', 'image');

  //sprites CodeBo pra trás
  this.loader.addResource(
    'codebo_back_sp1',
    'codebo/backward/sp1.png',
    'image'
  );

  //sprites CodeBo pra direita
  this.loader.addResource('codebo_left_sp1', 'codebo/left/sp1.png', 'image');

  //sprites CodeBo pra esquerda
  this.loader.addResource('codebo_right_sp1', 'codebo/right/sp1.png', 'image');
  this.loader.addResource('codebo_right_sp2', 'codebo/right/sp2.png', 'image');
  this.loader.addResource('codebo_right_sp3', 'codebo/right/sp3.png', 'image');
  this.loader.addResource('codebo_right_sp4', 'codebo/right/sp4.png', 'image');
  this.loader.addResource('codebo_right_sp5', 'codebo/right/sp5.png', 'image');
  this.loader.addResource('codebo_right_sp6', 'codebo/right/sp6.png', 'image');

  //sprites blocks
  this.loader.addResource('block_0', 'blocks/block_0.png', 'image');
  this.loader.addResource('block_1', 'blocks/block_1.png', 'image');
  this.loader.addResource('block_2', 'blocks/block_2.png', 'image');
  this.loader.addResource('block_3', 'blocks/block_3.png', 'image');

  //sprites water
  this.loader.addResource('water_0', 'water/water_0.png', 'image');
  this.loader.addResource('water_1', 'water/water_1.png', 'image');
  this.loader.addResource('water_2', 'water/water_2.png', 'image');

  //sprites buttons: movements
  this.loader.addResource(
    'button_backward',
    'buttons/button_backward.png',
    'image'
  );
  this.loader.addResource(
    'button_forward',
    'buttons/button_forward.png',
    'image'
  );
  this.loader.addResource('button_left', 'buttons/button_left.png', 'image');
  this.loader.addResource('button_right', 'buttons/button_right.png', 'image');

  //sprites buttons: list
  this.loader.addResource(
    'button_list_new',
    'buttons/button_list_new.png',
    'image'
  );
  this.loader.addResource(
    'button_list_block_add',
    'buttons/button_list_block_add.png',
    'image'
  );
  this.loader.addResource(
    'button_list_block_remove',
    'buttons/button_list_block_remove.png',
    'image'
  );

  //sprites buttons: stack
  this.loader.addResource(
    'button_stack_new',
    'buttons/button_stack_new.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_block_push',
    'buttons/button_stack_block_push.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_block_pop',
    'buttons/button_stack_block_pop.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_character_push',
    'buttons/button_stack_character_push.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_character_pop',
    'buttons/button_stack_character_pop.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_pop',
    'buttons/button_stack_pop.png',
    'image'
  );

  //sprites buttons: control
  this.loader.addResource('button_play', 'buttons/button_play.png', 'image');
  this.loader.addResource('button_stop', 'buttons/button_stop.png', 'image');
  this.loader.addResource('button_help', 'buttons/button_help.png', 'image');
  this.loader.addResource(
    'button_reload',
    'buttons/button_reload.png',
    'image'
  );
  this.loader.addResource('button_menu', 'buttons/button_menu.png', 'image');

  //sprites mini buttons: movements
  this.loader.addResource(
    'mini_forward',
    'buttons/button_forward_mini.png',
    'image'
  );
  this.loader.addResource(
    'mini_backward',
    'buttons/button_backward_mini.png',
    'image'
  );
  this.loader.addResource('mini_left', 'buttons/button_left_mini.png', 'image');
  this.loader.addResource(
    'mini_right',
    'buttons/button_right_mini.png',
    'image'
  );

  //sprites mini buttons: list
  this.loader.addResource(
    'button_list_new_mini',
    'buttons/button_list_new_mini.png',
    'image'
  );
  this.loader.addResource(
    'button_list_block_add_mini',
    'buttons/button_list_block_add_mini.png',
    'image'
  );
  this.loader.addResource(
    'button_list_block_remove_mini',
    'buttons/button_list_block_remove_mini.png',
    'image'
  );

  //sprites mini buttons: stack
  this.loader.addResource(
    'button_stack_new_mini',
    'buttons/button_stack_new_mini.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_block_push_mini',
    'buttons/button_stack_block_push_mini.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_block_pop_mini',
    'buttons/button_stack_block_pop_mini.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_character_push_mini',
    'buttons/button_stack_character_push_mini.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_character_pop_mini',
    'buttons/button_stack_character_pop_mini.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_pop_mini',
    'buttons/button_stack_pop_mini.png',
    'image'
  );

  //remover - teste
  this.loader.addResource('block_blank', 'blocks/block_blank.png', 'image');
  this.loader.addResource('block_blank2', 'blocks/block_blank2.png', 'image');

  //sprits container
  this.loader.addResource(
    'container_4_fields',
    'containers/container_4_fields.png',
    'image'
  );
  this.loader.addResource(
    'container_5_fields',
    'containers/container_5_fields.png',
    'image'
  );

  //Mapas
  this.loader.addResource('map_level_1', 'maps/map_level_1.xml', 'xml');
};

//Quando o loading dos recursos acaba, esse métodos é executado
se.gameReady = function () {
  //criando um level
  var lv1 = new Scene();

  xmlmap = new ReaderXMLFile('map_level_1');
  arrmap = createArrayMap(xmlmap);

  /*mapa, pode ser obtido do arquivo
  var arrmap = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
*/

  //esse nomes podem vim do xml
  var commands = [
    'stack_new',
    'stack_block_push',
    'stack_block_pop',
    'stack_character_push',
    'stack_character_pop',
  ];

  //configurando as funcoes de inicio e update
  lv1.setFunctionStart(setLevel.bind(null, arrmap, commands));
  lv1.setFunctionUpdate(updateLevel);

  //adicional o level ao jogo
  this.mlevel.addScene(lv1);
};

function updateLevel() {
  printCommands();
}

//funcao incial do jogo
function setLevel(arrmap, commands) {
  //map
  map = new Map(arrmap, 200, 70);

  //CodeBo
  codebo = new Codebo(220, 220, 0, 0, 'play', 99);

  new Rect(0, 500, 100, 660, 'rgba(255, 255, 255, 0.5)');
  new Rect(0, 0, 110, 1200, '#30415d');
  new Rect(880, 150, 580, 1180, 'rgba(255, 255, 255, 0.5)');

  new Rect(0, 470, 40, 200, '#30415d');
  new Text('Comandos', 20, 495, '#fff');

  new Rect(900, 120, 40, 200, '#30415d');
  new Text('Principal', 920, 145, '#fff');

  actions = [];

  size = 60;
  marginx = 0;
  posx = 20;
  marginbt = 10;

  //FIXO DE TODOS OS LEVELS
  ['forward', 'backward', 'right', 'left'].forEach(createCommandsButton);

  //VARIAVEL POR LEVELS
  commands.forEach(createCommandsButton);

  createGUiButton();
}

function createCommandsButton(item) {
  new Button(
    'button_' + item,
    window.posx,
    520,
    function () {
      actions.push(item);
    },
    window.size,
    window.size
  );

  window.posx += window.size + window.marginbt;
}

function createGUiButton() {
  new Button(
    'button_play',
    900,
    20,
    function () {
      codebo.setCommands(window.actions, window.arrmap);
      codebo.reset();
      setTimeout(function () {
        codebo.runCommands();
      }, 100);
    },
    70,
    70
  );

  //FIXOS DE TODOS OS LEVEL
  new Button('button_stop', 980, 20, function () {}, 60, 60);
  new Button('button_reload', 1050, 20, function () {}, 60, 60);
  new Button('button_help', 20, 20, function () {}, 70, 70);
  new Button('button_menu', 110, 20, function () {}, 70, 70);
}

/*Exibe os comandos abaixo do play*/
function printCommands() {
  // removendo todos os comandos
  var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('btcommands');
  for (var i = 0; i < objectstag.length; i++) {
    se.mlevel.removeObject(objectstag[i]);
  }

  posx = 0;
  posy = 0;
  marginx = 900;
  marginy = 180;
  j = 0;

  //percorrendo os comandos
  for (var i = 0; i < actions.length; i++) {
    j++;

    //grade de 4 comandos
    if (i % 6 == 0) j = 0;
    posy = parseInt(i / 6) * 35;
    posx = j * 35;

    bt = new MiniButton(
      'mini_' + actions[i],
      marginx + posx,
      marginy + posy,
      function () {
        actions.splice(this.getId(), 1);
      },
      30,
      30
    );

    bt.setId(i);
    bt.setTag('btcommands');
  }
}

function createArrayMap(map) {
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
