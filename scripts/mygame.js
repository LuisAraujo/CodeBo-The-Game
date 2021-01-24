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
  this.loader.addResource('codebo_sp1', 'codebo/backward/sp1.png', 'image');

  //sprites CodeBo pra direita
  this.loader.addResource('codebo_sp1', 'codebo/right/sp1.png', 'image');

  //sprites CodeBo pra esquerda
  this.loader.addResource('codebo_sp1', 'codebo/left/sp1.png', 'image');
  this.loader.addResource('codebo_sp2', 'codebo/left/sp2.png', 'image');
  this.loader.addResource('codebo_sp3', 'codebo/left/sp3.png', 'image');
  this.loader.addResource('codebo_sp4', 'codebo/left/sp4.png', 'image');
  this.loader.addResource('codebo_sp5', 'codebo/left/sp5.png', 'image');
  this.loader.addResource('codebo_sp6', 'codebo/left/sp6.png', 'image');

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

  //sprites buttons: control
  this.loader.addResource('button_play', 'buttons/button_play.png', 'image');
  this.loader.addResource('button_stop', 'buttons/button_stop.png', 'image');
  this.loader.addResource('button_help', 'buttons/button_help.png', 'image');
  this.loader.addResource(
    'button_reload',
    'buttons/button_reload.png',
    'image'
  );

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

  //remover - teste
  this.loader.addResource('block_blank', 'blocks/block_blank.png', 'image');
  this.loader.addResource('block_blank2', 'blocks/block_blank2.png', 'image');

  //sprits container
  this.loader.addResource(
    'container_4_fields',
    'containers/container_4_fields',
    'image'
  );
  this.loader.addResource(
    'container_5_fields',
    'containers/container_5_fields',
    'image'
  );
};

//Quando o loading dos recursos acaba, esse métodos é executado
se.gameReady = function () {
  //criando um level
  var lv1 = new Scene();

  //mapa, pode ser obtido do arquivo
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

  //configurando as funcoes de inicio e update
  lv1.setFunctionStart(setLevel.bind(null, arrmap));
  lv1.setFunctionUpdate(updateLevel);

  //adicional o level ao jogo
  this.mlevel.addScene(lv1);
};

function updateLevel() {
  printCommands();
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
  marginx = 500;
  marginy = 100;
  j = 0;

  //percorrendo os comandos
  for (var i = 0; i < actions.length; i++) {
    j++;

    //grade de 4 comandos
    if (i % 4 == 0) j = 0;
    posy = parseInt(i / 4) * 35;
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

//funcao incial do jogo
function setLevel(arrmap) {
  //map
  map = new Map(arrmap, 200, 70);

  //CodeBo
  codebo = new Codebo(180, 180, 0, 2, 'play', 99);

  actions = [];

  bt1 = new Button(
    'button_forward',
    200,
    500,
    function () {
      actions.push('forward');
    },
    40,
    40
  );

  bt2 = new Button(
    'button_backward',
    250,
    500,
    function () {
      actions.push('backward');
    },
    40,
    40
  );
  bt3 = new Button(
    'button_left',
    300,
    500,
    function () {
      actions.push('left');
    },
    40,
    40
  );
  bt4 = new Button(
    'button_right',
    350,
    500,
    function () {
      actions.push('right');
    },
    40,
    40
  );

  bt4 = new Button(
    'button_play',
    500,
    40,
    function () {
      codebo.setCommands(actions, arrmap);
      codebo.stopCommands();
      codebo.startPosition();
      setTimeout(function () {
        codebo.runCommands();
      }, 100);
    },
    50,
    50
  );
}
