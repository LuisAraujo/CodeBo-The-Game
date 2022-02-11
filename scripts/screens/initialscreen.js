function InitialScreen(isActive) {
	this.scene =  new Scene(undefined, isActive);
	this.start();
}


InitialScreen.prototype.start = function(){
	
	this.scene.setFunctionStart(function () {
		
		new Rect(0,0, canvas.height, canvas.width, "#101118");
		var tx = new Text("Apoio", 430, 250);
		var anim =  new Animation();
		anim.insertRepeatAnimation( "logo_unifacs", 10  );
		anim.insertAnimation( "fadein", null, 10 );
		anim.setLoop(false);
		
		var sp = new Sprite( [anim] , 380, 300, 150, 30);

		var tx2 = new Text("Financiamento", 690, 250)
		
		var anim =  new Animation();
		anim.insertRepeatAnimation( "logo_fapesb", 10  );
		anim.insertAnimation( "fadein", null, 10 );
		anim.setLoop(false);
		
		var sp2 = new Sprite( [anim], 700, 275, 120, 65);
		
		
		
					
		setTimeout( 
		function(){  
		
			tx.hide(); 
			tx2.hide(); 
			sp.hide(); 
			sp2.hide();

			anim = new Animation(["logo_anim1", "logo_anim2", "logo_anim3", "logo_anim4", 
			"logo_anim5", "logo_anim6", "logo_anim7"], 10, false);
			anim.setLoop(false);
			
			var sp3 = new Sprite( [anim] , 270, 250, 640, 88);
			
		}, 3000);
		
		setTimeout( 
		function(){  
			rec = new Rect(0,0, canvas.height, canvas.width, "#101118");
			rec.setAlpha(0.1);
			rec.setUpdateFunction ( function(){
				this.setAlpha( this.getAlpha()  + 0.01 ) ;	
			});
		}, 6000);
		
		
		setTimeout( 
		function(){  

			se.mlevel.loadScene(1);
			
		}, 7000);
		
		
	});
    this.scene.setFunctionUpdate(function () {});
  
  
}

