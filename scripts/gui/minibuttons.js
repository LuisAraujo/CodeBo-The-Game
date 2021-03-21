function MiniButton(sprite, x, y, callback, w, h, r, z) {
    
	id = "";

	Button.call(this, sprite, x, y, callback,w, h, r, z);
   
}

//fazendo herança
MiniButton.prototype = Object.create(Button.prototype);


MiniButton.prototype.update = function () {
 
   
};

