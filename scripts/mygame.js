const se = new StarterEngine(1200, 600);
//se.setAsMobile(true);


se.setResources = function () {
		
  //menu
  this.loader.addResource('button_play_menu', 'buttons/gui_bt_play_menu.png', 'image');
  this.loader.addResource('button_play_menu2', 'buttons/gui_block_play_menu.png', 'image');
  
  this.loader.addResource('button_help_menu',  'buttons/gui_bt_ajuda.png', 'image');
  this.loader.addResource('button_config_menu',  'buttons/gui_bt_config.png', 'image');
  
  this.loader.addResource('gui_logo',  'gui/logo.png', 'image');
  this.loader.addResource('gui_logo_bg',  'gui/logo_bg.png', 'image');
  
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
    'flags/red-flag-01.png',
    'image'
  );
  
   this.loader.addResource(
    'red_flag2',
    'flags/red-flag-02.png',
    'image'
  );
  
  
  
   this.loader.addResource(
    'red_flag3',
    'flags/red-flag-03.png',
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
    'world_level_locked',
    'worlds/world_level_locked.png ',
    'image'
  );
  
  this.loader.addResource(
    'mini_star',
    'gui/mini_star.png ',
    'image'
  );
  
   this.loader.addResource(
    'logo_unifacs',
    'logo/unifacs.png ',
    'image'
  );
  
  
   this.loader.addResource(
    'logo_fapesb',
    'logo/fapesb.png ',
    'image'
  );
  
 this.loader.addResource(
    'logo_anim1',
    'animation/logo_anim1.png ',
    'image'
  );
  
  this.loader.addResource(
    'logo_anim2',
    'animation/logo_anim2.png ',
    'image'
  );
  
  
  this.loader.addResource(
    'logo_anim3',
    'animation/logo_anim3.png ',
    'image'
  );
  
  
  this.loader.addResource(
    'logo_anim4',
    'animation/logo_anim4.png ',
    'image'
  );
  
  
  this.loader.addResource(
    'logo_anim5',
    'animation/logo_anim5.png ',
    'image'
  );
  
  
  this.loader.addResource(
    'logo_anim6',
    'animation/logo_anim6.png ',
    'image'
  );
  
  this.loader.addResource(
    'logo_anim7',
    'animation/logo_anim7.png ',
    'image'
  );
  
   this.loader.addResource(
    'tutorial_criapilha01',
    'gui/tutorial_criapilha01.png ',
    'image'
  );
  
  this.loader.addResource(
    'tutorial_criapilha02',
    'gui/tutorial_criapilha02.png ',
    'image'
  );
  

};
//Quando o loading dos recursos acaba, esse métodos é executado
se.gameReady = function () {
  
  //@todo colocar isso em configurações
  TimeExecuteAction  = 200;
  msgconsole = "";
  
  /** MENU */
  initialscreen = new InitialScreen(true);
  mainmenu = new MainMenu(true);
  mainmap = new MapMenu(true);
 
  //BT NEXT
  bt_next_tutorial = new Button(
    null, 520,  180,
    function () { 
		this.setAnimationByIndex(1);
		setTimeout( function(){se.mlevel.getCurrentScene().addCurrentTutorial()}, 200);
		log.addAction("next_msg");
	},
    40,40);
	
	//ANIMAÇÕES DO BT NEXT
	b_next_anim1 = new Animation(["bt_next_msg"]);
	b_next_anim2 = new Animation(null)
	b_next_anim2.insertRepeatAnimation( "bt_next_msg", 4 );
	b_next_anim2.insertAnimation( "bounce", bt_next_tutorial, 2 );
	b_next_anim2.setNextAnimation( 0 );
	bt_next_tutorial.setAnimation( [b_next_anim1, b_next_anim2] );
	
   //BT PRIOR
   bt_prior_tutorial = new Button(
    'bt_prior_msg', 210,  180,
    function () { 
		this.setAnimationByIndex(1);
		se.mlevel.getCurrentScene().subCurrentTutorial();
		
		log.addAction("prior_msg");
	},
    40,40);
	
	//ANIMAÇÕES DO BT PRIOR
	b_next_anim1 = new Animation(["bt_prior_msg"]);
	
	b_next_anim2 = new Animation(null)
	b_next_anim2.insertRepeatAnimation( "bt_prior_msg", 4 );
	b_next_anim2.insertAnimation( "bounce", bt_prior_tutorial, 2 );
	b_next_anim2.setNextAnimation( 0 );
	bt_prior_tutorial.setAnimation( [b_next_anim1, b_next_anim2] );
	
	//BT CLOSE
	bt_close_tutorial =  new Button(
    null, 570,  180,
    function () { 
		this.setAnimationByIndex(1);
		setTimeout( function(){se.mlevel.getCurrentScene().istutorial = false}, 200);
		log.addAction("close_msg");
	},
    40,40);

	//ANIMAÇÕES DO BT CLOSE
	b_next_anim1 = new Animation(["bt_close_msg"]);
	
	b_next_anim2 = new Animation(null)
	b_next_anim2.insertRepeatAnimation( "bt_close_msg", 4 );
	b_next_anim2.insertAnimation( "bounce", bt_close_tutorial, 2 );
	b_next_anim2.setNextAnimation( 0 );
	bt_close_tutorial.setAnimation( [b_next_anim1, b_next_anim2] );
	
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
	levels.push( new Level({namelevel:"0001", map:"map_level_1",item: undefined, commands:[],codebox:0,codeboy:0, codebo_posx:205, codebo_posy:215, codebo_dir: 2, map_margintop:0, map_marginleft:70, limitcommands:20,limitblock:0, posxend:5, posyend:5, flag_posx:580, flag_posy:190, commandsneedly:10, istutorial: true, isActive:true}) );
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
	levels.push( new Level({namelevel:"0010", map:"map_level_2",item: undefined, commands:[],codebox:0,codeboy:0, codebo_posx:205, codebo_posy:215,map_margintop:0, map_marginleft:70, limitcommands:24,limitblock:0, posxend:0, posyend:2, flag_posx:300, flag_posy:230, commandsneedly:10, istutorial: true, isActive:true}) );
	levels[1].setTutorial( tutorial_2 );
  
   //TUTORIAL 3
  	tutorial_3 = [];
	
	tutorial_3.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, 
		new Text('Você tem um limite de ', 260, 250, '#000', 25),
		new Text(' 4 comandos!', 315, 290, '#000', 25),
		new Text('Que tal cortar caminhos?', 260, 330, '#000', 25)
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
		new Text('Pilha são criadas sempre a frente,', 215, 260, '#000', 25),
		new Text('na direção do Codebo...', 270, 300, '#000', 25)
	]);
	
	anim2 = new Animation(["tutorial_criapilha01", "tutorial_criapilha02"], 20);
		
	tutorial_3.push([
		new Rect(0,0, canvas.height, canvas.width, 'rgba(0, 0, 3, 0.5)'),
		new Sprite("balon_msg", 200,200), 	bt_next_tutorial, bt_close_tutorial, bt_prior_tutorial,	new Text('... e no mesmo nivel!', 280 , 250, '#000', 25),
		new Sprite( [anim2] , 380, 260, 60, 60)
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
		new Sprite("button_stack_pop", 370, 530, 60, 60)
	]);
	
	//LEVEL3
	levels.push( new Level({namelevel:"0011", map:"map_level_3",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:0, codebo_posx:205, codebo_posy:215,map_margintop:0, map_marginleft:70, limitcommands:4,limitblock:1, posxend:0, posyend:2, flag_posx:300, flag_posy:190, commandsneedly:10, istutorial: true, isActive:true}) );

	levels[2].setTutorial( tutorial_3 );
	
	//LEVEL 4
	levels.push( new Level({namelevel:"0100", map:"map_level_4",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:2, codebo_posx:280, codebo_posy:350, codebo_dir:2, map_margintop:100, map_marginleft:70, limitcommands:15,limitblock:4, posxend:6, posyend:2, flag_posx:510, flag_posy:120, commandsneedly:10, istutorial: false, isActive:true}) );
	
	//LEVEL 5
	levels.push( new Level({namelevel:"0101", map:"map_level_5",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:2,codeboy:1, codebo_posx:310, codebo_posy:250, codebo_dir:0, map_margintop:50, map_marginleft:70, limitcommands:15,limitblock:4, posxend:3, posyend:5, flag_posx:510, flag_posy:210, commandsneedly:10, istutorial: false, isActive:true}) );
	

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
	levels.push( new Level({namelevel:"0110", map:"map_level_6",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:1, codebo_posx:240, codebo_posy:285, codebo_dir:2, map_margintop:50, map_marginleft:70, limitcommands:15,limitblock:0, posxend:6, posyend:2, flag_posx:510, flag_posy:175, commandsneedly:10, istutorial: true, isActive:true}) );
			
	levels[5].setTutorial( tutorial_6 );
	
	//LEVEL 7 -> ficou dificil
	levels.push( new Level({namelevel:"0111", map:"map_level_7",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:2, codebo_posx:280, codebo_posy:350, codebo_dir:2, map_margintop:100, map_marginleft:70, limitcommands:17,limitblock:2, posxend:6, posyend:2, flag_posx:510, flag_posy:120, commandsneedly:10, istutorial: false, isActive:true}) );
	
	//LEVEL 8 
	levels.push( new Level({namelevel:"1000", map:"map_level_8",item: undefined, commands:["stack_new", "stack_block_push", "stack_pop", "stack_character_push"],codebox:0,codeboy:0, codebo_posx:210, codebo_posy:265, codebo_dir:2, map_margintop:50, map_marginleft:70, limitcommands:32,limitblock:2, posxend:4, posyend:7, flag_posx:615, flag_posy:155, commandsneedly:10, istutorial: false, isActive:true}) );
	
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
    levels.push( new Level({namelevel:"1001", map:"map_level_9",item:"item_bridge", item_posx: 220, item_posy: 235, itemx: 0, itemy :0, commands:['stack_new','stack_block_push', 'stack_character_push', 'stack_pop','set_item'],codebox:2,codeboy:1, codebo_posx:315, codebo_posy:200,map_margintop:0, map_marginleft:70, limitcommands:20,limitblock:5, posxend:4, posyend:3, flag_posx:475, flag_posy:180, commandsneedly:10, istutorial: true, isActive:true}) );
	
	levels[8].setTutorial( tutorial_9 );
	
	//LEVEL 9
    levels.push( new Level({namelevel:"1010", map:"map_level_10",item:"item_bridge", item_posx: 400, item_posy: 230, itemx: 1, itemy :4, commands:['stack_new','stack_block_push', 'stack_character_push', 'stack_pop','set_item'],codebox:0,codeboy:2, codebo_posx:280, codebo_posy:300, codebo_dir: 0, map_margintop:50, map_marginleft:70, limitcommands:36,limitblock:5, posxend:3, posyend:4, flag_posx:475, flag_posy:260, commandsneedly:10, istutorial: false, isActive:true}) );

	se.mlevel.loadScene(0);
  
};




