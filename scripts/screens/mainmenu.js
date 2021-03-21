function MainMenu(isActive) {
	this.scene =  new Scene(undefined, isActive);
	this.start();
	
}


MainMenu.prototype.start = function(){
	
	this.scene.setFunctionStart( function () {
	 
		new Sprite("gui_bg_menu", 0,0,canvas.width,canvas.height);
		new Sprite("gui_block5", 250, 210);
		new Sprite("gui_floor", 170,400);
		
		s = new Sprite("gui_codebo", 400, 350);
		s.changeSizeFor(0.6);
		s.setRotate(355);


		new Sprite("gui_block4a", 10, 0);
		new Sprite("gui_block4b",canvas.width-500, 0);

		new Sprite("gui_block3a", 0,100);
		new Sprite("gui_block3b", canvas.width-300, 100);


		fnBlock = function(limitu, limitd, vel,  _this){
			
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

		s = new Sprite("gui_block2b", 480, -70);
		s.up = true;
		s.down = false;
		s.setUpdateFunction(  fnBlock.bind(null, -75, -60, 0.2, s) );

		s = new Sprite("gui_block2a", 600, 400);
		s.up = true;
		s.down = false;
		s.setUpdateFunction(  fnBlock.bind(null, 380, 410, 0.5, s) );

		s = new Sprite("gui_block2c", 150, 330);
		s.changeSizeFor(0.8);
		s.up = true;
		s.down = false;
		s.setUpdateFunction(  fnBlock.bind(null, 320, 350,0.5, s) );

		new Sprite("gui_block1", 0,0, canvas.width,canvas.height);



		//buttons  
		new Sprite("gui_panel_menu", canvas.width - 350, canvas.height - 310, 280,250);

		new Button("button_config_menu", canvas.width - 350 ,  canvas.height - 170, 
		function(){}, 
		70 , 200);

		new Button("button_help_menu", canvas.width - 340 ,  canvas.height - 230, 
		function(){},
		70 , 200);

		var btplay = new Button("button_play_menu", canvas.width - 315 ,  canvas.height - 300, 
			function(){
			se.mlevel.loadScene(2);   
			}, 
		70 , 200);


		new Rect(0,0, 40, canvas.width, "#0d0e17");
		new Rect(0, canvas.height-40, 40, canvas.width, "#0d0e17");
		new Rect(0,0,canvas.height, 40, "#0d0e17");
		new Rect(canvas.width-40,0,canvas.height, 40, "#0d0e17");
		  
		  
		new Sprite("gui_logo", 20, 20);
	  
  });
  
  
  this.scene.setFunctionUpdate(function () {  });
  
  
}