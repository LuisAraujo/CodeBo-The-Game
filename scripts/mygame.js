const se = new StarterEngine(1200, 600);
se.setAsMobile(true);


se.setResources = function () {
	
	
  //menu
  this.loader.addResource('button_play_menu', 'buttons/gui_bt_play_menu.png', 'image');
  this.loader.addResource('button_play_menu2', 'buttons/gui_block_play_menu.png', 'image');
  
  this.loader.addResource('button_help_menu',  'buttons/gui_bt_ajuda.png', 'image');
  this.loader.addResource('button_config_menu',  'buttons/gui_bt_config.png', 'image');
  
  
  this.loader.addResource('gui_logo',  'gui/logo.png', 'image');
  this.loader.addResource('gui_codebo',  'gui/gui_codebo_menu.png', 'image');
  this.loader.addResource('gui_bg_menu',  'gui/gui_bg_menu.png', 'image');
  this.loader.addResource('gui_block1',  'gui/gui_block_plan_1.png', 'image');
  this.loader.addResource('gui_block3a',  'gui/gui_block_plan_3_a.png', 'image');
  this.loader.addResource('gui_block3b',  'gui/gui_block_plan_3_b.png', 'image');
    this.loader.addResource('gui_block4a',  'gui/gui_block_plan_4_a.png', 'image');
  this.loader.addResource('gui_block4b',  'gui/gui_block_plan_4_b.png', 'image');
  this.loader.addResource('gui_block5',  'gui/gui_block_plan_5.png', 'image');
  this.loader.addResource('gui_floor',  'gui/gui_floor.png', 'image');
  this.loader.addResource('gui_panel_menu',  'gui/gui_panel_menu.png', 'image');
  this.loader.addResource('gui_block2a',  'gui/gui_block_plain_2.png', 'image');
  this.loader.addResource('gui_block2b',  'gui/gui_block_plain_2_b.png', 'image');
  this.loader.addResource('gui_block2c',  'gui/gui_block_plain_2_c.png', 'image');

  
  //CHARACTER

  //CodeBo pra frente
  this.loader.addResource('codebo_sp1', 'codebo/forward/sp1.png', 'image');
  this.loader.addResource('codebo_sp2', 'codebo/forward/sp2.png', 'image');
  this.loader.addResource('codebo_sp3', 'codebo/forward/sp3.png', 'image');
  this.loader.addResource('codebo_sp4', 'codebo/forward/sp4.png', 'image');
  this.loader.addResource('codebo_sp5', 'codebo/forward/sp5.png', 'image');
  this.loader.addResource('codebo_sp6', 'codebo/forward/sp6.png', 'image');

  //CodeBo pra trás
  this.loader.addResource(
    'codebo_back_sp1',
    'codebo/backward/sp1.png',
    'image'
  );

  //CodeBo pra esquerda
  this.loader.addResource('codebo_left_sp1', 'codebo/left/sp1.png', 'image');

  //CodeBo pra direita
  this.loader.addResource('codebo_right_sp1', 'codebo/right/sp1.png', 'image');
  this.loader.addResource('codebo_right_sp2', 'codebo/right/sp2.png', 'image');
  this.loader.addResource('codebo_right_sp3', 'codebo/right/sp3.png', 'image');
  this.loader.addResource('codebo_right_sp4', 'codebo/right/sp4.png', 'image');
  this.loader.addResource('codebo_right_sp5', 'codebo/right/sp5.png', 'image');
  this.loader.addResource('codebo_right_sp6', 'codebo/right/sp6.png', 'image');

  //BLOCKS

  //earth blocks
  this.loader.addResource('block_0', 'blocks/block_0.png', 'image');
  this.loader.addResource('block_1', 'blocks/block_1.png', 'image');
  this.loader.addResource('block_2', 'blocks/block_2.png', 'image');
  this.loader.addResource('block_3', 'blocks/block_3.png', 'image');

  //metal blocks
  this.loader.addResource('block_4', 'blocks/block_4.png', 'image');
  this.loader.addResource('block_shadow', 'blocks/block_shadow.png', 'image');
  this.loader.addResource('block_shadow2', 'blocks/block_shadow5.png', 'image');
  
  this.loader.addResource('block_bridge', 'blocks/bridge_0.png', 'image');
  this.loader.addResource('block_bridge_shadow', 'blocks/bridge_shadow.png', 'image');
  
  //this.loader.addResource('block_blank2', 'blocks/block_blank2.png', 'image');

  //water blocks
  this.loader.addResource('water_0', 'water/water_0.png', 'image');
  this.loader.addResource('water_1', 'water/water_1.png', 'image');
  this.loader.addResource('water_2', 'water/water_2.png', 'image');

  //BUTTONS

  //control buttons
  this.loader.addResource('button_play', 'buttons/button_play.png', 'image');
  this.loader.addResource('button_stop', 'buttons/button_stop.png', 'image');
  this.loader.addResource('button_help', 'buttons/button_help.png', 'image');
  this.loader.addResource(
    'button_reload',
    'buttons/button_reload.png',
    'image'
  );
  this.loader.addResource('button_menu', 'buttons/button_menu.png', 'image');

  //movement buttons
  this.loader.addResource(
    'button_forward',
    'buttons/button_forward.png',
    'image'
  );
  this.loader.addResource('button_left', 'buttons/button_left.png', 'image');
  this.loader.addResource('button_right', 'buttons/button_right.png', 'image');

  //list buttons
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

  //stack buttons
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
    'button_stack_character_push',
    'buttons/button_stack_character_push.png',
    'image'
  );
  this.loader.addResource(
    'button_stack_pop',
    'buttons/button_stack_pop.png',
    'image'
  );

  //MINI BUTTONS

  //movement mini buttons
  this.loader.addResource(
    'mini_hightlight',
    'buttons/buttons_hightlight.png',
    'image'
  );
  
  
  this.loader.addResource(
    'mini_forward',
    'buttons/button_forward_mini.png',
    'image'
  );
  
  
  this.loader.addResource('mini_left', 'buttons/button_left_mini.png', 'image');
  this.loader.addResource(
    'mini_right',
    'buttons/button_right_mini.png',
    'image'
  );

  this.loader.addResource('mini_blank', 'buttons/button_mini.png', 'image');

  //list mini buttons
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

  //stack mini buttons
  this.loader.addResource(
    'mini_stack_new',
    'buttons/button_stack_new_mini.png',
    'image'
  );
  this.loader.addResource(
    'mini_stack_block_push',
    'buttons/button_stack_block_push_mini.png',
    'image'
  );
  this.loader.addResource(
    'mini_stack_character_push',
    'buttons/button_stack_character_push_mini.png',
    'image'
  );
  this.loader.addResource(
    'mini_stack_pop',
    'buttons/button_stack_pop_mini.png',
    'image'
  );

  //MAPS

  //first level
  this.loader.addResource('map_level_1', 'maps/map_level_1.xml', 'xml');
  this.loader.addResource('map_level_2', 'maps/map_level_2.xml', 'xml');
  this.loader.addResource('map_level_3', 'maps/map_level_3.xml', 'xml');
  this.loader.addResource('map_level_4', 'maps/map_level_4.xml', 'xml');
  this.loader.addResource('map_level_5', 'maps/map_level_5.xml', 'xml');
  this.loader.addResource('map_level_6', 'maps/map_level_6.xml', 'xml');
  this.loader.addResource('map_level_7', 'maps/map_level_7.xml', 'xml');
  this.loader.addResource('map_level_8', 'maps/map_level_8.xml', 'xml');
  this.loader.addResource('map_level_9', 'maps/map_level_9.xml', 'xml');
  this.loader.addResource('map_level_10', 'maps/map_level_10.xml', 'xml');

  //FLAGS

  this.loader.addResource(
    'red_flag',
    'flags/red-flag-with-green-grass.png',
    'image'
  );
  
  this.loader.addResource(
    'balon_msg',
    'gui/balon_msg.png',
    'image'
  );
  
  
  
  this.loader.addResource(
    'bt_close_msg',
    'gui/bt_close_msg.png',
    'image'
  );
  
  
  
  this.loader.addResource(
    'bt_next_msg',
    'gui/bt_next_msg.png',
    'image'
  );
  
    this.loader.addResource(
    'bt_prior_msg',
    'gui/bt_prior_msg.png',
    'image'
  );
  
  //PLACEHOLDERS DAQUI --->>>
  
  //ITEM
   this.loader.addResource(
    'item_bridge',
    'items/item_1.png',
    'image'
  );
  
  //CONATINER
   this.loader.addResource(
    'container_item',
    'gui/container_item.png',
    'image'
  );
  
  //GUI BLOCK
   this.loader.addResource(
    'gui_block',
    'gui/gui_block.png',
    'image'
  );
  
  
    //COMMANDO SET ITEM
   this.loader.addResource(
    'button_set_item',
    'buttons/button_set_item.png',
    'image'
  );
  
  
   this.loader.addResource(
    'mini_set_item',
    'buttons/button_set_item_mini.png',
    'image'
  );
  
  
  //MODAL END LEVEL
    this.loader.addResource(
    'bg_modal_finish',
    'gui/bg_modal_finish.png',
    'image'
  );
  //BUTTON NEXT LEVEL
    this.loader.addResource(
    'bt_next_level',
    'buttons/bt_next_level.png',
    'image'
  );
  //BUTTON MENU LEVELS
    this.loader.addResource(
    'bt_menu_level',
    'buttons/bt_menu_level.png',
    'image'
  );
  
  //STARTS
  
    this.loader.addResource(
    'gui_star_1',
    'gui/gui_star_1.png',
    'image'
  );
  
    this.loader.addResource(
    'gui_star_2',
    'gui/gui_star_2.png',
    'image'
  );
  
   this.loader.addResource(
    'gui_star_3',
    'gui/gui_star_3.png',
    'image'
  );
  
  
     this.loader.addResource(
    'gui_congrats',
    'gui/gui_congrats.png',
    'image'
  );
  
  this.loader.addResource(
    'bg_universe',
    'gui/universe_bg.png',
    'image'
  );
  
  
  this.loader.addResource(
    'world_level_1',
    'worlds/world_level_1.png ',
    'image'
  );
  
  this.loader.addResource(
    'mini_star',
    'gui/mini_star.png ',
    'image'
  );
  
  


};
//Quando o loading dos recursos acaba, esse métodos é executado
se.gameReady = function () {
  
  //@todo colocar isso em configurações
  TimeExecuteAction  = 200;
  
  msgconsole = "";
  
  /** MENU */
  mainmenu = new MainMenu(true);
  mainmap = new MapMenu(true);
 
 
  bt_next_tutorial = new Button(
    'bt_next_msg', 520,  180,
    function () { 
		se.mlevel.getCurrentScene().addCurrentTutorial();
	},
    40,40);
	
  bt_prior_tutorial = new Button(
    'bt_prior_msg', 210,  180,
    function () { 
		se.mlevel.getCurrentScene().subCurrentTutorial();
	},
    40,40);
	
	bt_close_tutorial =  new Button(
    'bt_close_msg', 570,  180,
    function () { 
		se.mlevel.getCurrentScene().istutorial = false;
	},
    40,40);
	
	
	//LEVELS
	currentLevel = 0;	
	levels = [];


	//TUTORIAL 1
	tutorial_1 = [];
	tutorial_1.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, 	
		new Text('Olá, eu sou o codeBô!', 280, 260, '#000', 25),
		new Text('Vamos seguir juntos, nesta aventura?', 230, 300, '#000', 20)
	
	]);
	
	tutorial_1.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial,bt_prior_tutorial,	
		new Text('Precisamos chegar até a ', 230, 280, '#000', 24),
		new Sprite("red_flag", 510, 240, 40, 60)

	]);
  
	tutorial_1.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), bt_next_tutorial, bt_close_tutorial,	bt_prior_tutorial,
		new Text('Para isso, use os botões ', 250, 260, '#000', 24),
		new Text('de movimento.', 320, 290, '#000', 24),
		new Sprite("button_left", 90, 530, 60, 60),
		new Sprite("button_forward", 20, 530, 60, 60),
		new Sprite("button_right", 160, 530, 60, 60)
	]);
	
	tutorial_1.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial,bt_prior_tutorial,	
		new Text('Use o botão play para executar ', 230, 260, '#000', 24),
		new Text('a sua sequência.', 300, 290, '#000', 24),
		new Sprite("button_play",  canvas.width - 300, 20, 70, 70)
	]);
	
	


	//LEVEL1
	levels.push( new Level({namelevel:"fase01", map:"map_level_1",item: undefined, commands:[],codebox:0,codeboy:0, codebo_posx:205, codebo_posy:215, codebo_dir: 2, map_margintop:0, map_marginleft:70, limitcommands:20,limitblock:0, posxend:5, posyend:5, flag_posx:580, flag_posy:190, commandsneedly:10, istutorial: true, isActive:true}) );
	
	levels[0].setTutorial( tutorial_1 );
	
	
	//TUTORIAL 2
	tutorial_2 = [];
	tutorial_2.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, 	
		new Text('Opa! Não consigo andar', 265, 260, '#000', 25),
		new Text('por níveis diferentes.', 280, 300, '#000', 25)
	
	]);
	
	
	
	//LEVEL2
	levels.push( new Level({namelevel:"fase02", map:"map_level_2",item: undefined, commands:[],codebox:0,codeboy:0, codebo_posx:205, codebo_posy:215,map_margintop:0, map_marginleft:70, limitcommands:24,limitblock:0, posxend:0, posyend:2, flag_posx:300, flag_posy:230, commandsneedly:10, istutorial: true, isActive:true}) );

	levels[1].setTutorial( tutorial_2 );
  
   
   
   //TUTORIAL 3
  
  	tutorial_3 = [];
	
	tutorial_3.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, 
		new Text('Você tem um limite de 4 comandos.', 220, 260, '#000', 22),
		new Text('Que tal cortar caminhos?', 260, 300, '#000', 25)
	
	]);
	
	tutorial_3.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, bt_prior_tutorial,		
		new Text('Use o comando de empilhar', 250, 260, '#000', 25),
		new Text('para acessar outros níveis.', 260, 300, '#000', 25),
		new Sprite("button_stack_block_push", 300, 530, 60, 60)
	
	]);
	
	tutorial_3.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, bt_prior_tutorial,	
		new Text('Antes disto, você deve', 280, 260, '#000', 25),
		new Text('criar uma pilha!', 320, 300, '#000', 25),
		new Sprite("button_stack_new", 230, 530, 60, 60)
	
	]);
	
	
	tutorial_3.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, bt_prior_tutorial,	
		new Text('Para entrar na pilha, use', 280, 260, '#000', 25),
		new Text('o comando empilhar robô.', 265, 300, '#000', 25),
		new Sprite("button_stack_character_push", 440, 530, 60, 60)
	
	]);
	
	
	
	tutorial_3.push([
  
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, bt_prior_tutorial,	
		new Text('Para desempilhar o codebô', 260, 260, '#000', 25),
		new Text('use o comando desempilhar.', 250, 300, '#000', 25),
		new Sprite("button_stack_pop", 300, 530, 60, 60)
	
	]);
	
	
	//LEVEL3
	levels.push( new Level({namelevel:"fase03", map:"map_level_3",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:0, codebo_posx:205, codebo_posy:215,map_margintop:0, map_marginleft:70, limitcommands:4,limitblock:1, posxend:0, posyend:2, flag_posx:300, flag_posy:190, commandsneedly:10, istutorial: true, isActive:true}) );

	levels[2].setTutorial( tutorial_3 );
	
	
	
	//LEVEL 4
	levels.push( new Level({namelevel:"fase04", map:"map_level_4",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:2, codebo_posx:280, codebo_posy:350, codebo_dir:2, map_margintop:100, map_marginleft:70, limitcommands:15,limitblock:4, posxend:6, posyend:2, flag_posx:510, flag_posy:120, commandsneedly:10, istutorial: false, isActive:true}) );
	
	//LEVEL 5
	levels.push( new Level({namelevel:"fase05", map:"map_level_5",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:2,codeboy:1, codebo_posx:310, codebo_posy:250, codebo_dir:0, map_margintop:50, map_marginleft:70, limitcommands:15,limitblock:4, posxend:3, posyend:5, flag_posx:510, flag_posy:210, commandsneedly:10, istutorial: false, isActive:true}) );
	

	//TUTORIAL 6 (@todo há um problema aqui, pois o pop n add 1 no blocos)
	tutorial_6 = [];
	
	tutorial_6.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, 
		new Text('Ok, pelo visto teremos que', 260, 260, '#000', 24),
		new Text('utilizar o comando desempilhar!', 240, 300, '#000', 24),
		new Sprite("button_stack_pop", 300, 530, 60, 60)
	]);
	
	tutorial_6.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, bt_prior_tutorial,
		new Text('Ao desempilhar um bloco, você', 240, 260, '#000', 24),
		new Text('ganha mais 1 bloco para empilhar.', 225, 300, '#000', 24),
		new Rect(canvas.width - 260, 120, 40, 200, '#30415d'),
		new Text('Principal', canvas.width - 240, 145, '#fff'),
		new Sprite("gui_block", canvas.width - 130, 125, 25,25),
		new Text("x0", canvas.width - 100, 147, "white", 25)

	]);
	
	
	//LEVEL 6
	levels.push( new Level({namelevel:"fase06", map:"map_level_6",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:1, codebo_posx:240, codebo_posy:285, codebo_dir:2, map_margintop:50, map_marginleft:70, limitcommands:15,limitblock:0, posxend:6, posyend:2, flag_posx:510, flag_posy:175, commandsneedly:10, istutorial: true, isActive:true}) );
			
	levels[5].setTutorial( tutorial_6 );
	
	
	//LEVEL 7 -> ficou dificil
	levels.push( new Level({namelevel:"fase07", map:"map_level_7",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:2, codebo_posx:280, codebo_posy:350, codebo_dir:2, map_margintop:100, map_marginleft:70, limitcommands:17,limitblock:2, posxend:6, posyend:2, flag_posx:510, flag_posy:120, commandsneedly:10, istutorial: false, isActive:true}) );
	
	
	//LEVEL 8 
	levels.push( new Level({namelevel:"fase08", map:"map_level_8",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:0, codebo_posx:210, codebo_posy:265, codebo_dir:2, map_margintop:50, map_marginleft:70, limitcommands:32,limitblock:2, posxend:4, posyend:7, flag_posx:615, flag_posy:155, commandsneedly:10, istutorial: false, isActive:true}) );
	
	
  
    //TUTORIAL 9
	
	tutorial_9 = [];
	tutorial_9.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, 	
		new Text('Uau! Um item.', 320, 260, '#000', 25),
		new Text('Para capturar, passe pela sua posição.', 230, 300, '#000', 20)
	]);

	tutorial_9.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, bt_prior_tutorial,
		new Text('Você poderá usar o item', 280, 260, '#000', 25),
		new Text('com o comando Adicionar item na cena.', 230, 300, '#000', 20),
		new Sprite("button_set_item", 510, 530, 60, 60)
	]);
	
	
	//LEVEL 9
    levels.push( new Level({namelevel:"fase09", map:"map_level_9",item:"item_bridge", item_posx: 220, item_posy: 235, itemx: 0, itemy :0, commands:['stack_new','stack_block_push', 'stack_character_push', 'stack_pop','set_item'],codebox:2,codeboy:1, codebo_posx:315, codebo_posy:200,map_margintop:0, map_marginleft:70, limitcommands:20,limitblock:5, posxend:4, posyend:3, flag_posx:475, flag_posy:180, commandsneedly:10, istutorial: true, isActive:true}) );
	
	levels[8].setTutorial( tutorial_9 );
	
	
		//LEVEL 9
    levels.push( new Level({namelevel:"fase10", map:"map_level_10",item:"item_bridge", item_posx: 400, item_posy: 230, itemx: 1, itemy :4, commands:['stack_new','stack_block_push', 'stack_character_push', 'stack_pop','set_item'],codebox:0,codeboy:2, codebo_posx:280, codebo_posy:300, codebo_dir: 0, map_margintop:50, map_marginleft:70, limitcommands:36,limitblock:5, posxend:3, posyend:4, flag_posx:475, flag_posy:260, commandsneedly:10, istutorial: false, isActive:true}) );
 
  
	//carrega menu
	//se.mlevel.loadScene(2 + currentLevel);
	se.mlevel.loadScene(1);
  
};

function createContainerItem(item) {
	new Text("item", canvas.width/2 - 15, 25, "white", 15);
	new Sprite("container_item", canvas.width/2 - 25, 30, 50, 50 );
}

function nextLevel(){
	if(currentLevel < levels.length-1)
	currentLevel++;
}


function createCommandsButton(item, limitcommands) {
 

 new Button(
    'button_' + item,
    window.posx,
    canvas.height - 70,
    function () {
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
    },
    window.size,
    window.size
  );

  window.posx += window.size + window.marginbt;
}

function createConsole(){
	
	/*CONSOLE*/
	
	new Rect(canvas.width - 290, canvas.height - 90, 80, 280, 'rgba(20,20,20,1)');	
	new Text('>>', canvas.width - 280, canvas.height - 60, '#fff');
	txt_console = new Text("- ", canvas.width - 280, canvas.height - 40, '#fff', 15, "poxel");
	
	txt_console.update = function(){

		//this.setText("x" + ( levels[currentLevel].getLimitBlock() - qtd_block) );
		this.setText(msgconsole);
	}
	
	/***/

}

function createGUIButton() {
	


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
    },
    60,
    60
  );

  new Button('button_help', 20, 20, function () {
	   se.mlevel.getCurrentScene().resetCurrentTutorial();	
	   se.mlevel.istutorial = true;
  }, 70, 70);
  
  
  new Button(
    'button_menu',
    110,
    20,
    function () {
      //menu
      se.mlevel.loadScene(0);
    },
    70,
    70
  );
}

/*Exibe os comandos abaixo do play*/
function printCommands(limitcommand) {
	
  	if(levels[currentLevel].getEnd())
		return;
	
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
	 //if(actions[i] == "stack_block_push")
		// qtd_block++;
	 
	 
	 
	 
    j++;

    //grade de 4 comandos
    if (i % 6 == 0) j = 0;
    posy = parseInt(i / 6) * (size + 5);
    posx = j * (size + 5);
    
    bt = new MiniButton(
      'mini_' + actions[i],
      marginx + posx,
      marginy + posy,
      function () {
		  //removendo as modificações do blockused
		if( actions[this.getId()] == "stack_block_push"){
			levels[currentLevel].blockused--;
			actions.splice(this.getId(), 1);
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
			
			if(blockusedtotal <= levels[currentLevel].limitblock)
				actions.splice(this.getId(), 1);
			else{
				 msgconsole = "Não é possivel remover esse bloco"
			}
			
			//levels[currentLevel].blockused++;
		}else{
			actions.splice(this.getId(), 1);
		}
      
	  
	  
	  },
      size,
      size,
	  0,
	  100
    );
    bt.setId(i);
    bt.setTag('btcommands');
	
	//HIGHLIGHT COMANDOS
	//if((levels[currentLevel].codebo.getCurrentAction() == i) && (!levels[currentLevel].codebo.getPause() )){		 
	if(levels[currentLevel].codebo.getCurrentAction() == i) {		 
		var sp = new Sprite("mini_hightlight", marginx + posx, marginy + posy, size, size, 100);  
		sp.setTag('btcommands');		
	 }
	 
	 
  }

  for (var i = actions.length; i < limitcommand; i++) {
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


function consoleError(msg, line){
	msgconsole = msg + " c:"+(line+1);
	txt_console.color = "#f33";
}


function consoleWarning(msg, line){
	msgconsole = msg + " c:"+(line+1);
	txt_console.color = "#fc0";
}

