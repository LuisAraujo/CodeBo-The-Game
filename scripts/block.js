function Block(sprite, x, y, classename, z, refx, refy, level) {
    
	h = 70;
	w = 70;
    this.level = level?level:1;
	this.refx = refx;
	this.refy = refy;
	this.shadow = se.loader.getAssets("block_shadow");
	this.shadow2 = se.loader.getAssets("block_shadow2");
	GameObject.call(this, sprite, x, y, classename, h, w, 0, z);
   
}

//fazendo herança
Block.prototype = Object.create(GameObject.prototype);


Block.prototype.update = function () {
 
   
};

Block.prototype.print = function() {

    if(this.animation != null) {
		
        ctx.drawImage(this.animation[this.currentAnimation].getCurrentSprite(), this.x, this.y, this.w, this.h);
		
		ctx.save();
		ctx.globalAlpha = 0.5 - (this.level/10);
		ctx.drawImage(this.shadow , this.x, this.y, this.w, this.h);
		
		ctx.globalAlpha = this.refx/10;
		ctx.drawImage(this.shadow2 , this.x, this.y, this.w, this.h);
		
		ctx.restore();
		 
		this.animation[this.currentAnimation].update();
    }
}