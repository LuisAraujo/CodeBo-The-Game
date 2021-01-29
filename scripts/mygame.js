const se = new StarterEngine();

se.setResources = function () {
  

  //sprites CodeBo pra frente
  this.loader.addResource('codebo_sp1', 'codebo/forward/sp1.png', 'image');
  this.loader.addResource('codebo_sp2', 'codebo/forward/sp2.png', 'image');
  this.loader.addResource('codebo_sp3', 'codebo/forward/sp3.png', 'image');
  this.loader.addResource('codebo_sp4', 'codebo/forward/sp4.png', 'image');
  this.loader.addResource('codebo_sp5', 'codebo/forward/sp5.png', 'image');
  this.loader.addResource('codebo_sp6', 'codebo/forward/sp6.png', 'image');

  //sprites CodeBo pra trás
  this.loader.addResource('codebo_back_sp1','codebo/backward/sp1.png','image');

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

  this.loader.addResource('button_forward','buttons/button_forward.png','image');
  this.loader.addResource('button_left', 'buttons/button_left.png', 'image');
  this.loader.addResource('button_right', 'buttons/button_right.png', 'image');

  //sprites buttons: list
  this.loader.addResource('button_list_new','buttons/button_list_new.png',   'image');
  this.loader.addResource('button_list_block_add',  'buttons/button_list_block_add.png','image');
 
 this.loader.addResource('button_list_block_remove',   'buttons/button_list_block_remove.png','image');

  //sprites buttons: stack
  this.loader.addResource('button_stack_new','buttons/button_stack_new.png',    'image');
  
  this.loader.addResource('button_stack_block_push',   'buttons/button_stack_block_push.png','image');
  
  this.loader.addResource('button_stack_block_pop',    'buttons/button_stack_block_pop.png','image');
  
  this.loader.addResource('button_stack_character_push',    'buttons/button_stack_character_push.png', 'image');
  
  this.loader.addResource('button_stack_character_pop',    'buttons/button_stack_character_pop.png','image');
 
  this.loader.addResource('button_stack_pop','buttons/button_stack_pop.png',
    'image');

  //sprites buttons: control
  this.loader.addResource('button_play', 'buttons/button_play.png', 'image');
  this.loader.addResource('button_stop', 'buttons/button_stop.png', 'image');
  this.loader.addResource('button_help', 'buttons/button_help.png', 'image');
  this.loader.addResource('button_reload','buttons/button_reload.png','image'
  );
  
  this.loader.addResource('button_menu', 'buttons/button_menu.png', 'image');

  //sprites mini buttons: movements
  this.loader.addResource('mini_forward','buttons/button_forward_mini.png', 'image');
  
  this.loader.addResource('mini_blank','buttons/button_mini.png','image');
 
  this.loader.addResource('mini_left', 'buttons/button_left_mini.png', 'image');
  this.loader.addResource('mini_right','buttons/button_right_mini.png','image');

  //sprites mini buttons: list
  this.loader.addResource('button_list_new_mini',  'buttons/button_list_new_mini.png','image');
  this.loader.addResource('button_list_block_add_mini',   'buttons/button_list_block_add_mini.png','image');
  this.loader.addResource('button_list_block_remove_mini',    'buttons/button_list_block_remove_mini.png','image');

  //sprites mini buttons: stack
  this.loader.addResource('mini_stack_new','buttons/button_stack_new_mini.png',
    'image');
	
  this.loader.addResource('mini_stack_block_push',  'buttons/button_stack_block_push_mini.png','image');
  
  //pop n pode ser relcionado a um item, pop é geral
  this.loader.addResource('mini_stack_block_pop',
    'buttons/button_stack_block_pop_mini.png','image');
  this.loader.addResource('mini_stack_character_push','buttons/button_stack_character_push_mini.png','image');
  
  this.loader.addResource('button_stack_character_pop_mini',    'buttons/button_stack_character_pop_mini.png','image');
  this.loader.addResource('button_stack_pop_mini',   'buttons/button_stack_pop_mini.png','image');

  //remover - teste
  this.loader.addResource('block_blank', 'blocks/block_blank.png', 'image');
  this.loader.addResource('block_blank2', 'blocks/block_blank2.png', 'image');

  //sprits container
  this.loader.addResource('container_4_fields',    'containers/container_4_fields.png','image');
  
  this.loader.addResource('container_5_fields',    'containers/container_5_fields.png','image');

  //Mapas
  this.loader.addResource('map_level_1', 'maps/map_level_1.xml', 'xml');
};

//Quando o loading dos recursos acaba, esse métodos é executado
se.gameReady = function () {
  //criando um level
  lv1 = new Level1();
  
  //adicional o level ao jogo
  this.mlevel.addScene(lv1.getScene() );
};

function createCommandsButton(item, limitcommands) {
	
  new Button(
    'button_' + item,
    window.posx,
    520,
    function () {
		console.log(limitcommands);
		if(actions.length < limitcommands)
			actions.push(item);
    },
    window.size,
    window.size
  );

  window.posx += window.size + window.marginbt;
}

function createGUIButton() {
	
	new Rect(0, 500, 100, 660, 'rgba(255, 255, 255, 0.5)');
	new Rect(0, 0, 110, 1200, '#30415d');
	new Rect(880, 150, 580, 1180, 'rgba(255, 255, 255, 0.5)');

	new Rect(0, 470, 40, 200, '#30415d');
	new Text('Comandos', 20, 495, '#fff');

	new Rect(900, 120, 40, 200, '#30415d');
	new Text('Principal', 920, 145, '#fff');

  
	new Button('button_play',  900,  20,
	function () {
		
	  lv1.getCodebo().setCommands(window.actions, lv1.getMap().getMap() );
	  lv1.getCodebo().reset();
	  lv1.getCodebo().start();
	  
	  lv1.getMap().reset( lv1.getCodebo());
	   
	},
	70, 70 );

	//FIXOS DE TODOS OS LEVEL
	new Button('button_stop', 980, 20, function () {}, 60, 60);
	new Button('button_reload', 1050, 20, 
	function () {
		
		 lv1.getCodebo().reset();
		 lv1.getMap().reset();
		 actions = []
		
	}, 
	60, 60);
	
	new Button('button_help', 20, 20, function () {}, 70, 70);
	new Button('button_menu', 110, 20, function () {}, 70, 70);
}

/*Exibe os comandos abaixo do play*/
function printCommands(limitcommand) {
  // removendo todos os comandos
  var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('btcommands');
  for (var i = 0; i < objectstag.length; i++) {
    se.mlevel.removeObject(objectstag[i]);
  }

  var posx = 0;
  var posy = 0;
  var marginx = 900;
  var marginy = 180;
  var j = 0;
  var size = 40;	
  
  //percorrendo os comandos
  for (var i = 0; i < actions.length; i++) {
    j++;
	
    //grade de 4 comandos
    if (i % 6 == 0) j = 0;
    posy = parseInt(i / 6) * (size+5);
    posx = j * (size+5);

    bt = new MiniButton(
      'mini_' + actions[i],
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
  
  for (var i = actions.length; i < limitcommand; i++) {
    j++;

    //grade de 4 comandos
    if (i % 6 == 0) j = 0;
    posy = parseInt(i / 6) * (size+5);
    posx = j * (size+5);

    bt = new MiniButton(
      'mini_blank' ,
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
