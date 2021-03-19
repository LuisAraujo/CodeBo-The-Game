/*
@class Block
@desc Bloco representa um bloco dentro do mapa
*/
function Block(sprite, x, y, classename, z, refx, refy, level) {
    
	h = 70;
	w = 70;
    this.level = level?level:1;
	this.refx = refx;
	this.refy = refy;
	//assets para dá o efeito de sobra no bloco
	this.shadow = se.loader.getAssets("block_shadow");
	this.shadow2 = se.loader.getAssets("block_shadow2");
	this.shadow3 = se.loader.getAssets("block_bridge_shadow");
	
	GameObject.call(this, sprite, x, y, classename, h, w, 0, z);
   
}

//fazendo herança
Block.prototype = Object.create(GameObject.prototype);

//printando o bloco
Block.prototype.print = function() {
	
	//tratando 
    if(this.animation != null) {
		
		ctx.save();
		ctx.globalAlpha = this.getAlpha();
        ctx.drawImage(this.animation[this.currentAnimation].getCurrentSprite(), this.x, this.y, this.w, this.h);
		
		//verifica se é um bloco
		if(this.tag == "block"){
			//muda o alfa 
			ctx.globalAlpha = 0.5 - (this.level/10);
			//desenha a sombra
			ctx.drawImage(this.shadow , this.x, this.y, this.w, this.h);	
			ctx.globalAlpha = this.refx/10;
			//desenha a sombra
			ctx.drawImage(this.shadow2 , this.x, this.y, this.w, this.h);
		
		
		//verifica se é um ponte
		}else if(this.tag == "block_bridge"){
			
			ctx.globalAlpha = 0.5 - (this.level/10);
			//desenha a sombra
			ctx.drawImage(this.shadow3 , this.x, this.y, this.w, this.h);	
		}
		
		ctx.restore();
		
        //cham a atualização da animacao 		
		this.animation[this.currentAnimation].update();
    }
}