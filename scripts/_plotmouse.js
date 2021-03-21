function PlotMouse() {
	//this.m = new ManagerMouse();
	GameObject.call(this, undefined, 0, 0, "", 0,0,0,0);
   
}

//fazendo herança
PlotMouse.prototype = Object.create(GameObject.prototype);


PlotMouse.prototype.update = function (x, y) {
 
  // console.log(x, y)
};


PlotMouse.prototype.moveMouse = function (x, y) {
    
	se.mlevel.getCurrentScene().removeObjectByTag("block_blank");
	
    i = parseInt(x/35);
    j = parseInt(y/17.5);
	
	
    x = i * 35;
    y = j * 17.5;
    
	b01 = new Block( "block_blank" , x, y, "imagem", 1 );
	b02 = new Block( "block_blank" , x, y, "imagem", 1 );
    
	b01.setTag("block_blank");
	b02.setTag("block_blank");
	
    se.mlevel.getCurrentScene().addObjects(b01);
   
};
