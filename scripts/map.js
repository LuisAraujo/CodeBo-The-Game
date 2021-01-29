function Map(map, margintop, marginleft) {

	this.initialmap  = [];
	this.map = map;
	
	this.copyMap(this.map, this.initialmap);

	
	this.block = [];
	this.margintop = margintop;
	this.marginleft = marginleft;
	this.create();
	
}


Map.prototype.getMap = function(){
	return this.map;
}

Map.prototype.copyMap = function(map, map2){
	
	for(var i = 0; i < map.length; i++){	
		map2.push([]);
		for(var j = 0; j < map[i].length ; j++){
			map2[i][j] = map[i][j];
		}
	}
	
}

Map.prototype.getInitialMap = function(){
	return this.initialmap;
}


Map.prototype.setLevel= function(x, y, level){
	
	this.map[x][y] = level;
	
}

Map.prototype.reset = function(codebo){
	
	this.copyMap(this.initialmap, this.map);
	this.block = [];
	this.create();
	this.adjustmentLevels(codebo.actuallevel, codebo.actualx, codebo.actualy);
}


Map.prototype.adjustmentLevels = function(level, x, y){
	//((this.block[i].refx > x) && (this.block[i].refy == y))
	for(var i = 0; i < this.block.length; i++){
		
		if(this.block[i].level > level){
		 
			console.log(this.block[i]);
			
			if(
			(this.block[i].refy == y) && (this.block[i].refx < x)
			||(this.block[i].refx == x) && (this.block[i].refy > y)
			|| (this.block[i].refx > x) && (this.block[i].refy < y)
			){
				this.block[i].z = 1;
			}else{
				
			/*(this.block[i].refx == x) && (this.block[i].refy > y)
			||
			(this.block[i].refy == y) && (this.block[i].refx < x)
			||
			(this.block[i].refx < x) && (this.block[i].refy < y)*/
				
				
				this.block[i].z  = 100;
			}
			
		}
	
	}
}

Map.prototype.createBlocks = function(i, j){
	
	x = j;
	y = i;
	
	posx = 200 + (y*105) - (x*35) + (x-y) * 70;
	posy = 200 - (y * 17.5) -(x*17.5) + (y+1) * 35;
	
	for(var l = 0; l < Math.abs( this.map[i][j] ) ; l++){
		
		if(this.map[i][j] < 0 ){
			blockname = "block_blank";
		}else{ 
		
			if( ( l == this.map[i][j]-1) && (l == 0) )
				blockname = "block_1";
			else if(l == 0) 
				blockname = "block_0";
			else if(l == this.map[i][j]-1) 
				blockname = "block_2";
			else 
				blockname = "block_3";
			}
		//console.log(blockname);
		var bt = new Block( blockname , posx  , posy - 35*l ,"imagem", 1, x, y, l+1);
		bt.setTag("block");
		
		this.block.push(bt);
	}
	
}




Map.prototype.create = function () {
	
	var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('block');
	this.block = [];
	for (var i = 0; i < objectstag.length; i++) {
		se.mlevel.removeObject(objectstag[i]);
	}
	
	
	var anim1 = new Animation( ["water_0","water_1","water_2"], 0.1);
		
	//for(var i = this.map.length-1; i >= 0  ; i--){
	for(var i = 0; i < this.map.length  ; i++){	
		for(var j = this.map[i].length-1; j >= 0 ; j--){
		//for(var j = 0; j < this.map[i].length ; j++){
			//if(map[i][j] != 0){
			
				//@todo
				if(this.map[i][j] == 0){
					
					//new GameObject( [anim1], this.marginleft + m + j* 70, this.margintop + i * 17.5, "water", 70,35 );
					
				//ok
				}else{
					this.createBlocks(i, j);
				}
			  	
		}
	}
	
   
};
