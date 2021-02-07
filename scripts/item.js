function Item(sprite, x, y, classename, z, refx, refy,  level) {
    
	h = 25;
	w = 20;
    this.level = level?level:1;
	this.refx = refx;
	this.refy = refy;
	
	this.up = true;
	this.down = false;
	
	this.limitu = y - 5;
	this.limitd = y + 5;
	
	this.typeitem = sprite;
	this.active = true;
	
	GameObject.call(this, sprite, x, y, classename, h, w, 0, z);
   
}

//fazendo herança
Item.prototype = Object.create(GameObject.prototype);


Item.prototype.getTypeItem = function () {
	return this.typeitem;
}

Item.prototype.hide = function() {
	this.setAlpha(0);
	this.active = false;
}

Item.prototype.show = function() {
	this.setAlpha(1);
	this.active = true;
}


Item.prototype.update = function () {
			
			if(this.up){
				this.y-=0.5;
				
				if(this.y < this.limitu){
					this.down = true;
					this.up = false;
				}
			}
			
			
			else if(this.down){
				this.y+=0.5;
				
				if(this.y > this.limitd){
					this.down = false;
					this.up = true;
				}
			}
};
