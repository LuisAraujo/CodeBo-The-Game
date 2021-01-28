function Codebo(x, y, actualx, actualy, classename, z) {

	h = 50;
	w = 50;
	
	//animation of codebo
	sprite = [
		new Animation( ["codebo_sp1","codebo_sp1","codebo_sp1","codebo_sp2","codebo_sp3","codebo_sp4","codebo_sp5","codebo_sp6"], 5), 
		
		new Animation(["codebo_back_sp1"], 5), 
		new Animation(["codebo_left_sp1"], 5), 
		
		new Animation(["codebo_right_sp1","codebo_right_sp2","codebo_right_sp3","codebo_right_sp4","codebo_right_sp5","codebo_right_sp6"], 5)  
	];
	
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
	
	this.currentexec = 0;
	
	this.directions = {
		FRONT : 0,
		BACK : 1,
		LEFT : 2,
		RIGHT : 3
	}
	
	this.actualdirection = this.directions.FRONT; 
	
	GameObject.call(this, sprite, x, y, classename, h,w, 0, z);
   
}

//fazendo herança
Codebo.prototype = Object.create(GameObject.prototype);

Codebo.prototype.update = function () {};
Codebo.prototype.reset = function () {
	
	this.stopCommands();
    this.startPosition();
	this.setAnimationByIndex(0);
	this.actualdirection = this.directions.FRONT;
	  
};

Codebo.prototype.start = function () {
	 _this = this;
	 this.currentexec++;
	 
	 setTimeout(function () {
        _this.runCommands(_this.currentexec);
      }, 100); 
};
Codebo.prototype.setCommands = function (actions, map) {
	
	this.actions = actions;
	this.map = map;
	
};


Codebo.prototype.runCommands = function (exec) {
	//console.log(exec, this.currentexec);
	
	if(exec != this.currentexec){
		//console.log("ok");
		return;
	}
	
	//this.stopCommands();
	this.actualaction++ 
	var action = actions[this.actualaction];
	
	//console.log(this.actualaction);
	//console.log(action);
	
	if(action == "forward"){
		
		if(this.actualdirection == this.directions.FRONT){
		 
			if(this.map[this.actualx+1][this.actualy] == this.getLevel() ){
				
				this.x += 35;
				this.y += 17.5;
				
				this.actualx+=1;
				this.actualy;
			}
			
		}else if(this.actualdirection == this.directions.BACK){
			
			if(this.map[this.actualx-1][this.actualy] == this.getLevel() ){
				
				this.x -= 35;
				this.y -= 17.5;
				
				this.actualx-=1;
				this.actualy;
			}
			
			
		}else if(this.actualdirection == this.directions.RIGHT){
			
			if(this.map[this.actualx][this.actualy-1] == this.getLevel() ){
				
				this.x -= 36;
				this.y += 18;
				
				this.actualx;
				this.actualy-=1;
			}
			
			
		}else if(this.actualdirection == this.directions.LEFT){
			
			if(this.map[this.actualx][this.actualy+1] == this.getLevel() ){
				
				this.x += 36;
				this.y -= 18;
				
				this.actualx;
				this.actualy+=1;
			}
			
		}
			

	}else if(action == "left"){

		if(this.actualdirection == this.directions.FRONT){
			
			this.setLeftDirection();
			
		}else if(this.actualdirection == this.directions.LEFT){
			
			this.setBackDirection();
			
		}else if(this.actualdirection == this.directions.RIGHT){
			
			this.setFrontDirection();
			
		}else if(this.actualdirection == this.directions.BACK){
			
			this.setRightDirection();
		}		
		

	}else if(action == "right"){
		
		if(this.actualdirection == this.directions.FRONT){
			
			this.setRightDirection();
			
		}else if(this.actualdirection == this.directions.RIGHT){
			
			this.setBackDirection();
			
		}else if(this.actualdirection == this.directions.BACK){
			
			this.setLeftDirection();
			
		}else if(this.actualdirection == this.directions.LEFT){
			
			this.setFrontDirection();
		}	
		
	}
	

	_this = this;
	
	if(this.actualaction < actions.length){
		setTimeout( function(){_this.runCommands(exec);}, 100);
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


Codebo.prototype.setLeftDirection = function(){
	this.actualdirection = this.directions.LEFT;
	this.setAnimationByIndex(2);
}

Codebo.prototype.setRightDirection = function(){
	this.actualdirection = this.directions.RIGHT; 
	this.setAnimationByIndex(3);
}

Codebo.prototype.setFrontDirection = function(){
	
	this.actualdirection = this.directions.FRONT; 
	this.setAnimationByIndex(0);
}

Codebo.prototype.setBackDirection = function(){
	
	this.actualdirection = this.directions.BACK; 
	this.setAnimationByIndex(1);
}

