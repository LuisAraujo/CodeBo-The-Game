function Codebo(x, y, actualx, actualy, classename, z) {

	h = 50;
	w = 50;
	
	//animation of codebo
	sprite = [new Animation( ["codebo_sp1","codebo_sp1","codebo_sp1","codebo_sp2","codebo_sp3","codebo_sp4","codebo_sp5","codebo_sp6"], 0.1)];
	
	this.actions;
	this.actualaction = -1;
	
	this.map;
	
	this.actualx = actualx;
	this.actualy = actualy;
	this.actuallevel = 1;
	
	this.startx = x;
	this.starty = y;
	
	this.startactualx = actualx;
	this.startactualy = actualy;
	
	
	GameObject.call(this, sprite, x, y, classename, h,w, 0, z);
   
}

//fazendo herança
Codebo.prototype = Object.create(GameObject.prototype);


Codebo.prototype.update = function () {};

Codebo.prototype.setCommands = function (actions, map) {
	
	this.actions = actions;
	this.map = map;
	
};


Codebo.prototype.runCommands = function () {
	
	//this.stopCommands();
	this.actualaction++ 
	var action = actions[this.actualaction];
	
	console.log(this.actualaction);
	
	if(action == "forward"){
		
		//diagonal (o if é necessario por conta da codificacao do map, nas linhas pares os blocos seguem no mesmo padrao da px linha. No caso de impares isso n ocorre);
		
		
		//mudar animação
		if(this.actualx%2 == 0){
			
			if(this.map[this.actualx+1][this.actualy] == this.getLevel() ){
				
				this.x += 35;
				this.y += 17.5;
				
				this.actualx+=1;
				this.actualy;
			}
			
		}else{
			
			if(this.map[this.actualx+1][this.actualy+1]  == this.getLevel()){
				
				this.x += 35;
				this.y += 17.5;
				
				this.actualx+=1;
				this.actualy+=1;
			}
		}
		//pensar no que fazer se ele cair na agua (0)
		
	}else if(action == "backward"){
		
		//todo 
		//mudar animação
		
		if(this.actualx%2 != 0){
			
			if(this.map[this.actualx-1][this.actualy] == this.getLevel() ){
				
				this.x -= 35;
				this.y -= 17.5;
				
				this.actualx-=1;
				this.actualy;
			}
			
		}else{
			
			if(this.map[this.actualx-1][this.actualy-1]  == this.getLevel()){
				
				this.x -= 35;
				this.y -= 17.5;
				
				this.actualx-=1;
				this.actualy-=1;
			}
		}
		
		
	}else if(action == "left"){

		//todo 
		//é preciso fazer o mesmo que o forward
		

	}else if(action == "right"){
		//todo 
		//é preciso fazer o mesmo que o forward
	}
	

	_this = this;
	
	if(this.actualaction < actions.length){
		setTimeout( function(){_this.runCommands();}, 100);
	}
	
	
};

Codebo.prototype.stopCommands = function (actions) {
	
	this.actualaction = -1;
	
	//colocar na posicao inicial (ver a relacao como o map)
	
};

Codebo.prototype.upLevel = function () {
	this.actuallevel ++;
	this.updateZ();
};

Codebo.prototype.downlevel = function () {
	this.actuallevel --;
	this.updateZ();
};

//usar isso para mudança de nivel e gera a ideia de 3d
Codebo.prototype.updateZ = function () {
	if(this.actuallevel == 1)
		this.z = 99;
	else if(this.actuallevel ==2)
		this.z = 100;
	else if(this.actuallevel ==3)
		this.z = 101;
}

Codebo.prototype.changeLevel = function (level) {
	this.actuallevel = level;
};


Codebo.prototype.getLevel = function () {
	return this.actuallevel;
};



Codebo.prototype.startPosition = function () {
	this.actualx = this.startactualx;
	this.actualy = this.startactualy;
	this.x = this.startx;
	this.y = this.starty;
	
};

