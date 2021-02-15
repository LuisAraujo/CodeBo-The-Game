/**
 * Representa um Retângulo com Borda arredondadas
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @param {string} fill - Estilo do preencimento
 * @param {string} stroke - Estilo da borda
 * @param {int} r - radiano
 * @constructor
 */
function RectRound(x, y, w, h, r, fill, stroke) {
	console.log(r);
    
	Geometric.call(this, x, y, "rect round", h, w, fill, stroke);
	
	this.r = r;
}


RectRound.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 * @extends Geometric
 */
RectRound.prototype.print = function() {

	ctx.beginPath();
	ctx.moveTo(this.x +  this.r, this.y);
	ctx.lineTo(this.x + this.w -  this.r, this.y);

	ctx.quadraticCurveTo(this.x + this.w, this.y, this.x + this.w, this.y +  this.r);
	ctx.lineTo(this.x + this.w, this.y + this.h -  this.r);

	ctx.quadraticCurveTo(this.x + this.w, this.y + this.h, this.x + this.w -  this.r, this.y + this.h);
	ctx.lineTo(this.x +  this.r, this.y + this.h);
 
	ctx.quadraticCurveTo(this.x, this.y + this.h, this.x, this.y + this.h -  this.r);
	ctx.lineTo(this.x, this.y +  this.r);

	ctx.quadraticCurveTo(this.x, this.y, this.x +  this.r, this.y);

	ctx.closePath();
	if(this.fill != undefined){
		ctx.fillStyle = this.fill;
		ctx.fill();
	}
	
	if(this.stroke != undefined){
		ctx.strokeStyle = this.stroke;
		ctx.stroke();
	}

}