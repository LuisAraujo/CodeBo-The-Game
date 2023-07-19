function HelpScreen(isActive) {
	this.scene =  new Scene(undefined, isActive);
	this.start();
}


HelpScreen.prototype.start = function(){
	
	
	this.scene.setFunctionStart( function () {	
		new Sprite("gui_bg_menu", 0,0,canvas.width,canvas.height);

		
	});
	
	this.scene.setFunctionUpdate(function () {});
  
  
}

