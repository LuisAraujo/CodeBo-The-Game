function Block(sprite, x, y, classename, z) {
    
	h = 70;
	w = 70;

	GameObject.call(this, sprite, x, y, classename, h, w, 0, z);
   
}

//fazendo herança
Block.prototype = Object.create(GameObject.prototype);


Block.prototype.update = function () {
 
   
};

