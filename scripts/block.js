function Block(sprite, x, y, classename, z, refx, refy, level) {
    
	h = 70;
	w = 70;
    this.level = level?level:1;
	this.refx = refx;
	this.refy = refy;
	
	GameObject.call(this, sprite, x, y, classename, h, w, 0, z);
   
}

//fazendo herança
Block.prototype = Object.create(GameObject.prototype);


Block.prototype.update = function () {
 
   
};

