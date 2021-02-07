function Codebo(x, y, actualx, actualy, classename, z) {
  h = 50;
  w = 50;

  //animation of codebo
  sprite = [
    new Animation(
      [
        'codebo_sp1',
        'codebo_sp1',
        'codebo_sp1',
        'codebo_sp2',
        'codebo_sp3',
        'codebo_sp4',
        'codebo_sp5',
        'codebo_sp6',
      ],
      5
    ),

    new Animation(['codebo_back_sp1'], 5),
    new Animation(['codebo_left_sp1'], 5),

    new Animation(
      [
        'codebo_right_sp1',
        'codebo_right_sp2',
        'codebo_right_sp3',
        'codebo_right_sp4',
        'codebo_right_sp5',
        'codebo_right_sp6',
      ],
      5
    ),
  ];
  
  this.directions = {
    FRONT: 0,
    BACK: 1,
    LEFT: 2,
    RIGHT: 3,
  };



  this.is_stacked = false;
  this.actions;
  this.actualaction = -1;
  this.actuallevel = 1;
  this.currentexec = 0;
  this.inpause = false;
  this.actualdirection = this.directions.FRONT;

  this.map;

  this.actualx = actualx;
  this.actualy = actualy;

  this.startx = x;
  this.starty = y;

  this.startactualx = actualx;
  this.startactualy = actualy;
  this.actualitem = null;
  
  this.end = false;
  
  GameObject.call(this, sprite, x, y, classename, h, w, 0, z);
}

//fazendo herança
Codebo.prototype = Object.create(GameObject.prototype);

Codebo.prototype.pause = function () {
  this.inpause = true;
};

Codebo.prototype.remot = function () {
  this.inpause = false;
};

Codebo.prototype.update = function () {};

Codebo.prototype.reset = function () {
  this.is_stacked = false;
  this.actions;
  this.actuallevel = 1;
  this.currentexec = 0;
  this.inpause = false;
  this.actualdirection = this.directions.FRONT;
  this.actualitem = null;
  this.stopCommands();
  this.startPosition();
  this.setAnimationByIndex(0);

};

Codebo.prototype.start = function () {
  this.remot();

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
	console.log("run commands", this.actualaction, actions);
	
  if (exec != this.currentexec || this.inpause) {
    console.log("ok");
    return;
  }

  //this.stopCommands();
  this.actualaction++;
  var action = actions[this.actualaction];

  //console.log(this.actualaction);
  //console.log(action);

  if (action == 'forward') {
    
	
	if (this.is_stacked === false) {
      
	  

      if (this.actualdirection == this.directions.FRONT) {
        
		//is a block?
		if( this.map[this.actualy + 1][this.actualx] > 10){
			if ( 
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy + 1][this.actualx]%10 == this.getLevel() 
			) 
			
			{
			  this.x += 35;
			  this.y += 17.5;

			  //this.actualx
			  this.actualy += 1;
			}
		}else if ( 
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy + 1][this.actualx] < 10
			) 
			
			{
			  this.x += 35;
			  this.y += 17.5;

			  //this.actualx
			  this.actualy += 1;
			}

	 } else if (this.actualdirection == this.directions.BACK) {
        
		//is a block?
		if(this.map[this.actualy - 1][this.actualx] > 10)
			if (
			  this.map[this.actualy - 1] != undefined &&
			  this.map[this.actualy - 1][this.actualx]%10 == this.getLevel()
			) {
			  this.x -= 35;
			  this.y -= 17.5;

			  this.actualy -= 1;
			}
		  
	  
	  } else if (this.actualdirection == this.directions.RIGHT) {
        
		//is a block
		if( this.map[this.actualy][this.actualx - 1] > 10)
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx - 1]%10 == this.getLevel()
			) {
			  this.x -= 36;
			  this.y += 18;

			  this.actualx -= 1;
			  //this.actualy
			}
     

	 } else if (this.actualdirection == this.directions.LEFT) {
        
		if(this.map[this.actualy][this.actualx + 1] > 10)
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx + 1]%10 == this.getLevel()
			) {
			  this.x += 36;
			  this.y -= 18;

			  this.actualx += 1;
			  //this.actualy+=1;
			}
      }

      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
		
		var item = levels[currentLevel].getMap().getItem();
		
		//get item?
		if((this.actualx == item.refx) && (this.actualy == item.refy) && (item.active) ){
			
			this.getItem(item);
			
		}
		
		console.log(levels[currentLevel].posxend);
		//is in the end?
		if((this.actualx == levels[currentLevel].posxend) && (this.actualy == levels[currentLevel].posyend)){
		    
			if(!this.end){
				console.log("ok");
				this.end = true;
				levels[currentLevel].setEnd();
				
			}
		}
		
		
    }
  
    
  } else if (action == 'left') {
    if (this.actualdirection == this.directions.FRONT) {
      this.setLeftDirection();
    } else if (this.actualdirection == this.directions.LEFT) {
      this.setBackDirection();
    } else if (this.actualdirection == this.directions.RIGHT) {
      this.setFrontDirection();
    } else if (this.actualdirection == this.directions.BACK) {
      this.setRightDirection();
    }

    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
 
 } else if (action == 'right') {
    if (this.actualdirection == this.directions.FRONT) {
      this.setRightDirection();
    } else if (this.actualdirection == this.directions.RIGHT) {
      this.setBackDirection();
    } else if (this.actualdirection == this.directions.BACK) {
      this.setLeftDirection();
    } else if (this.actualdirection == this.directions.LEFT) {
      this.setFrontDirection();
    }

    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
 
 } else if (action == 'stack_new') {
	  console.log( this.actualdirection == this.directions.FRONT,
      this.map[this.actualy + 1][this.actualx])
    if (
      this.actualdirection == this.directions.FRONT &&
      this.map[this.actualy + 1][this.actualx] > 10
    )
      levels[currentLevel].getMap().setLevel(this.actualx, this.actualy + 1, -1);
    else if (
      this.actualdirection == this.directions.RIGHT &&
      this.map[this.actualy][this.actualx - 1] > 10
    )
      levels[currentLevel].getMap().setLevel(this.actualx - 1, this.actualy, -1);
    else if (
      this.actualdirection == this.directions.BACK &&
      this.map[this.actualy - 1][this.actualx] > 10
    )
      levels[currentLevel].getMap().setLevel(this.actualx, this.actualy - 1, -1);
    else if (
      this.actualdirection == this.directions.LEFT &&
      this.map[this.actualy][this.actualx + 1] > 10
    )
      levels[currentLevel].getMap().setLevel(this.actualx + 1, this.actualy, -1);

    levels[currentLevel].getMap().create();
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
 
 } else if (action == 'stack_block_push') {
    if (
      this.actualdirection == this.directions.FRONT &&
      levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] < 0
    ) {
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx,
          this.actualy + 1,
          levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] - 1
        );
    
	} else if (
      this.actualdirection == this.directions.RIGHT &&
      this.map[this.actualy][this.actualx - 1] < 0
    ) {
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx - 1,
          this.actualy,
          levels[currentLevel].getMap().map[this.actualy][this.actualx - 1] - 1
        );
    } else if (
      this.actualdirection == this.directions.BACK &&
      this.map[this.actualy - 1][this.actualx] < 0
    ) {
      console.log(this.actualy, this.actualx);
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx,
          this.actualy - 1,
          levels[currentLevel].getMap().map[this.actualy - 1][this.actualx] - 1
        );
    } else if (
      this.actualdirection == this.directions.LEFT &&
      this.map[this.actualy][this.actualx + 1] < 0
    ) {
      levels[currentLevel]
        .getMap()
        .setLevel(
          this.actualx + 1,
          this.actualy,
          levels[currentLevel].getMap().map[this.actualy][this.actualx + 1] - 1
        );
    }

    levels[currentLevel].getMap().create();
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
  } else if (action == 'stack_character_push') {
    
	if (
      this.actualdirection == this.directions.FRONT &&
      levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] < 0
    ) {
      var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy + 1][this.actualx]
      );

      //up level
      this.actualy += 1;

      //move to front
      this.x += 35;
      this.y += 17.5;
      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    } else if (
      this.actualdirection == this.directions.RIGHT &&
      this.map[this.actualy][this.actualx - 1] < 0
    ) {
      var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy][this.actualx - 1]
      );

      //up level
      this.actualx -= 1;

      //move to right
      this.x -= 36;
      this.y += 18;

      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    } else if (
      this.actualdirection == this.directions.BACK &&
      this.map[this.actualy - 1][this.actualx] < 0
    ) {
      var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy - 1][this.actualx]
      );

      //up level
      this.actualx -= 1;

      //move to back
      this.x -= 35;
      this.y -= 17.5;

      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    } else if (
      this.actualdirection == this.directions.LEFT &&
      this.map[this.actualy][this.actualx + 1] < 0
    ) {
      var oldlevel = this.actuallevel;

      this.actuallevel = Math.abs(
        levels[currentLevel].getMap().map[this.actualy][this.actualx + 1]
      );

      //up level
      this.actualx += 1;

      //move to back
      this.x += 36;
      this.y -= 18;

      //up
      this.y -= 35 * (this.actuallevel - oldlevel);
      this.is_stacked = true;
      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    }
    this.is_stacked = true;
    levels[currentLevel].getMap().create();
    levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
  
  
  } else if (action == 'stack_pop') {
    
	if (this.is_stacked) {
      console.log('POP is working!');
      //O Codebô está empilhado
      this.is_stacked = false;

      if (this.actualdirection == this.directions.FRONT) {
        
		//is a bloco
		if(this.map[this.actualy + 1][this.actualx] > 10)
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy + 1][this.actualx]%10 == this.getLevel()
			) {
			  console.log('POP front!');
			  this.x += 35;
			  this.y += 17.5;

			  //this.actualx
			  this.actualy += 1;
			}
			
      } else if (this.actualdirection == this.directions.BACK) {
        
		//is a block
		if(this.map[this.actualy - 1][this.actualx]  > 10)
			if (
			  this.map[this.actualy - 1] != undefined &&
			  this.map[this.actualy - 1][this.actualx]%10 < this.getLevel()
			) {
			  this.x -= 35;
			  this.y -= 17.5;

			  this.actualy -= 1;
			}
			
      } else if (this.actualdirection == this.directions.RIGHT) {
        console.log('POP right!');
       
	    if( this.map[this.actualy][this.actualx - 1] > 10 )
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx - 1]%10 == this.getLevel()
			) {
			  this.x -= 36;
			  this.y += 18;

			  this.actualx -= 1;
			  //this.actualy
			}
      } else if (this.actualdirection == this.directions.LEFT) {
        console.log('POP left!');
        if(this.map[this.actualy][this.actualx + 1] > 10)
			if (
			  this.map[this.actualy] != undefined &&
			  this.map[this.actualy][this.actualx + 1]%10 == this.getLevel()
			) {
			  this.x += 36;
			  this.y -= 18;

			  this.actualx += 1;
			  //this.actualy+=1;
			}
      }
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    
	
	} else {
      
	  
	  if (
        this.actualdirection == this.directions.FRONT &&
        levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] < 0
      ) {
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx,
            this.actualy + 1,
            levels[currentLevel].getMap().map[this.actualy + 1][this.actualx] + 1
          );
     
	 } else if (
        this.actualdirection == this.directions.RIGHT &&
        this.map[this.actualy][this.actualx - 1] < 0
      ) {
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx - 1,
            this.actualy,
            levels[currentLevel].getMap().map[this.actualy][this.actualx - 1] + 1
          );
      } else if (
        this.actualdirection == this.directions.BACK &&
        this.map[this.actualy - 1][this.actualx] < 0
      ) {
        console.log(this.actualy, this.actualx);
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx,
            this.actualy - 1,
            levels[currentLevel].getMap().map[this.actualy - 1][this.actualx] + 1
          );
      } else if (
        this.actualdirection == this.directions.LEFT &&
        this.map[this.actualy][this.actualx + 1] < 0
      ) {
        levels[currentLevel]
          .getMap()
          .setLevel(
            this.actualx + 1,
            this.actualy,
            levels[currentLevel].getMap().map[this.actualy][this.actualx + 1] + 1
          );
      }

      levels[currentLevel].getMap().create();
      levels[currentLevel]
        .getMap()
        .adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
    }

  } else if (action == 'set_item') {
	  console.log(this)
	  if(this.actualitem != null){
	
			if (
			  this.actualdirection == this.directions.FRONT &&
			  this.map[this.actualy + 1][this.actualx] == 10
			){
			  levels[currentLevel].getMap().setLevel(this.actualx, this.actualy + 1, 1);
			  this.removeItem();
			  
			}else if (
			  this.actualdirection == this.directions.RIGHT &&
			  this.map[this.actualy][this.actualx - 1] == 10
			){
				levels[currentLevel].getMap().setLevel(this.actualx - 1, this.actualy, 1);
				this.removeItem();
			
			}else if (
			  this.actualdirection == this.directions.BACK &&
			  this.map[this.actualy - 1][this.actualx] == 10
			){
			  levels[currentLevel].getMap().setLevel(this.actualx, this.actualy - 1, 1);
			  this.removeItem();
			  
			}else if (
			  this.actualdirection == this.directions.LEFT &&
			  this.map[this.actualy][this.actualx + 1] == 10
			){
			  levels[currentLevel].getMap().setLevel(this.actualx + 1, this.actualy, 1);
			  this.removeItem();
			}
			
			levels[currentLevel].getMap().create();
			levels[currentLevel].getMap().adjustmentLevels(this.getLevel(), this.actualx, this.actualy);
	  }
 } 

  _this = this;

  if (this.actualaction < actions.length) {
    setTimeout(function () {
      _this.runCommands(exec);
    }, 100);
  }
};

Codebo.prototype.stopCommands = function (actions) {
  this.actualaction = -1;

  //colocar na posicao inicial (ver a relacao como o map)
};

Codebo.prototype.upLevel = function () {
  this.actuallevel++;
  this.updateZ();
};

Codebo.prototype.downlevel = function () {
  this.actuallevel--;
  this.updateZ();
};

//usar isso para mudança de nivel e gera a ideia de 3d
Codebo.prototype.updateZ = function () {
  if (this.actuallevel == 1) this.z = 99;
  else if (this.actuallevel == 2) this.z = 100;
  else if (this.actuallevel == 3) this.z = 101;
};

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

Codebo.prototype.setLeftDirection = function () {
  this.actualdirection = this.directions.LEFT;
  this.setAnimationByIndex(2);
};

Codebo.prototype.setRightDirection = function () {
  this.actualdirection = this.directions.RIGHT;
  this.setAnimationByIndex(3);
};

Codebo.prototype.setFrontDirection = function () {
  this.actualdirection = this.directions.FRONT;
  this.setAnimationByIndex(0);
};

Codebo.prototype.setBackDirection = function () {
  this.actualdirection = this.directions.BACK;
  this.setAnimationByIndex(1);
};



Codebo.prototype.getItem = function (item) {
   console.log(this);
   levels[currentLevel].showItem(item);
   item.hide();
   this.actualitem = item;

};


Codebo.prototype.removeItem = function (item) {
   
   levels[currentLevel].hideItem(item);
   this.actualitem = null;

};
