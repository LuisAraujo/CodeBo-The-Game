function MapMenu(isActive) {
	this.scene =  new Scene(undefined, isActive);
	this.start();
}


MapMenu.prototype.start = function(){
	
	this.scene.setFunctionStart(function () {
		

		createGUIMenuMap();
		
		
		fnBlock2 = function(limitu, limitd, vel,  _this){
			
			if(_this.up){
				_this.y-=vel;
				
				if(_this.y < limitu){
					_this.down = true;
					_this.up = false;
				}
			}
			
			
			if(_this.down){
				_this.y+=vel;
				
				if(_this.y > limitd){
					_this.down = false;
					_this.up = true;
				}
			}
			
		}
		
		
		//MENU (LEVEL)
		createGUILevels()
		
	  
  });
  
  
  this.scene.setFunctionUpdate(function () {});
  
  
}

createGUILevels = function(){
	
	new RectRound(170,160, 20, 120, 5, "#0286b2");
	new Text("0x001", 200, 178, "#fff");
	b = new Button("world_level_1", 200,200, function(){
		
		currentLevel = 0;
		se.mlevel.loadScene(2);
		
	}, 60, 60);
	b.up = true;
	b.setUpdateFunction(  fnBlock2.bind(null, 195, 205,0.2, b) );
	
	new Sprite("mini_star",  190, 272, 20, 20);
	new Sprite("mini_star",  220, 272, 20, 20);
	new Sprite("mini_star",  250, 272, 20, 20);
	
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
		  
		new Sprite([ new Animation(["gui_logo","gui_logo","gui_logo"], 5)] , 20, 20);
		
		
		
		
		
		
}