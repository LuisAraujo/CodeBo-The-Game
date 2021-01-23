function MiniButton(sprite, x, y, callback, w, h) {
    
	id = "";

	Button.call(this, sprite, x, y, callback,w, h);
   
}

//fazendo herança
MiniButton.prototype = Object.create(Button.prototype);


MiniButton.prototype.update = function () {
 
   
};

