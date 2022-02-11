/*
Representa a tela de menu
*/
function MapMenu(isActive) {
	this.scene =  new Scene(undefined, isActive);
	this.start();
	
	if(getItem("world") == undefined) 
		log.setOpenLevels();
	
}

//configura a função inicial da cena vinculada
MapMenu.prototype.start = function(){
	
	this.scene.setFunctionStart(function () {
		createGUIMenuMap();
		createGUILevels(0);	
	});
  
	this.scene.setFunctionUpdate(function () {});
  
}

//todo: colocar conexão com bd
levelIsOpen = function(level, world){
	
	return log.getStatusLevel(level);
	
}

//todo: colocar conexão com bd
levelStar = function(level){
	
	arr = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
	return arr[level];
	
}


createGUILevels = function(world){
	
	arr_levels = ["A - 0001", "A - 0010", "A - 0011", "A - 0100", "A - 0101", "A - 0110", "A - 0111", "A - 1000", "A - 1001", "A - 1010"]
	var j = l = 0;
	length_world = 10;
	
	for( let i = (length_world * world) ; i < length_world + (length_world * world) ; i ++){
		
		 if(i == arr_levels.length/2){
			j++;
			l = 0;			
		 }
		 
		if( levelIsOpen( i ) )
			new RectRound(170 + l * 200 , 160 + 170*j , 20, 120, 5, "#0286b2");
		else
			new RectRound(170 + l * 200 , 160 + 170*j , 20, 120, 5, "#b1b1af");
		
		new Text(arr_levels [i], 195 + l * 200, 178 + 170*j , "#fff");


		clickb = undefined;
		
		if( levelIsOpen( i ) ){
			
			namespriteanimation = "world_level_1";
			clickb = function(){
				
				this.setAnimationByIndex(1);
				currentLevel = i;
				setTimeout( function(){se.mlevel.loadScene(3 + i)}, 200);
				log.startLevel( i +1 );
				
			}
			
		}else{
			namespriteanimation = "world_level_locked";
			clickb = function(){
				this.setAnimationByIndex(1);	
			}		
		}
		
		
		//if this level is open
		b = new Button( null , 200 + l * 200, 200+ 170*j , clickb, 60, 60);
	
		
		//ANIMACÕES
		b_anim1 = new Animation(null, 10);
		b_anim1.insertRepeatAnimation( namespriteanimation, 10  );
		b_anim1.insertAnimation( "up", b, 10 );


		b_anim2 = new Animation()
		b_anim2.insertRepeatAnimation( namespriteanimation, 4  );
		b_anim2.insertAnimation( "bounce",b, 2 );
		b_anim2.setNextAnimation(0);
		
		b.setAnimation(  [b_anim1, b_anim2] );
		
		
		if( levelIsOpen(i) ){
			var stars =  levelStar(i);
			
			if(stars >= 1)
				new Sprite("mini_star",  190 + l * 200, 272+ 170*j , 20, 20);
			
			if(stars >= 2)
				new Sprite("mini_star",  220+ l * 200, 272+ 170*j , 20, 20);
			
			if(stars == 3)
				new Sprite("mini_star",  250+ l * 200, 272+ 170*j , 20, 20);
			
		}
		
		l++;
	}
	
}

createGUIMenuMap = function(){
	
	
		new Sprite("gui_bg_menu", 0,0,canvas.width,canvas.height);

		new Sprite("gui_block5", 250, 210);

		new Sprite("gui_floor", 170,400);

		

		new Sprite("gui_block4a", 10, 0);
		new Sprite("gui_block4b",canvas.width-500, 0);

		new Sprite("gui_block3a", 0,100);
		new Sprite("gui_block3b", canvas.width-300, 100);


		fnBlock = function(orientation, side, _this){
			
			if((orientation == "vertical") && (side == "left")){
				
				if(_this.x - _this.w < canvas.width )
					_this.x+=10;
				
			}else if((orientation == "vertical") && (side == "right")){
				if(_this.x + _this.w > 0 )
					_this.x-=10;
				
				
			}else if((orientation == "horizontal") && (side == "up")){
				
				if(_this.y + _this.h > 0 )
					_this.y-=10;
				
			}else if((orientation == "horizontal") && (side == "down")){
			
				if(_this.y <  canvas.height  )
					_this.y+=10;
			}
			
			if( _this.getAlpha() > 0){
				
				_this.setAlpha( _this.getAlpha() - 0.1);
			}
			
		}
		
		s = new Sprite("bg_universe", 0,0, canvas.width,canvas.height);
		s.setAlpha(0);
		s.setUpdateFunction(  function(){
			
			this.alpha += 0.1;
			
		});

		s = new Sprite("gui_block2b", 480, -70);
		s.setUpdateFunction(  fnBlock.bind(null, "horizontal", "up", s) );

		s = new Sprite("gui_block2a", 600, 400);
		s.setUpdateFunction(  fnBlock.bind(null,"vertical", "left", s) );

		s = new Sprite("gui_block2c", 150, 330);
		s.setUpdateFunction(  fnBlock.bind(null, "vertical", "right", s) );

		new Sprite("gui_block1", 0,0, canvas.width,canvas.height);

		
		new Sprite("gui_block1", 0,0, canvas.width,canvas.height);
			

		//buttons  
		s = new Sprite("gui_panel_menu", canvas.width - 350, canvas.height - 310, 280,250);
		s.setUpdateFunction(  fnBlock.bind(null, "vertical", "left", s) );


		new Rect(0,0, 40, canvas.width, "#0d0e17");
		new Rect(0, canvas.height-40, 40, canvas.width, "#0d0e17");
		new Rect(0,0,canvas.height, 40, "#0d0e17");
		new Rect(canvas.width-40,0,canvas.height, 40, "#0d0e17");
		  
		new Sprite([ new Animation(["gui_logo"], 5)] , 20, 20);
			
		
}