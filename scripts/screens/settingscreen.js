function SettingScreen(isActive) {
	this.scene =  new Scene(undefined, isActive);
	this.start();
}


SettingScreen.prototype.start = function(){
	
		
	
	this.scene.setFunctionStart( function () {	
		new Sprite("gui_bg_menu", 0,0,canvas.width,canvas.height);
		new Button("button_back",  50, (canvas.height/2)-10, 
		function(){
			se.mlevel.loadScene(1);  
		},40, 40);
		
	});
	
	this.scene.setFunctionUpdate(function () {});
  
}

