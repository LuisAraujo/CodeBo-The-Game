function Map(map, margintop, marginleft, item) {

	this.initialmap  = [];
	this.map = map;

	this.initialmap = this.copyMap(this.map);

	this.block = [];
	this.margintop = margintop;
	this.marginleft = marginleft;
	this.create();
	
	this.item = item
	
}


Map.prototype.setItem = function(item){
	this.item = item;
}

Map.prototype.getItem = function(){
	return this.item;
}

Map.prototype.getMap = function(){
	return this.map;
}

Map.prototype.copyMap = function(map){

	map2 = [];
	for(var i = 0; i < map.length; i++){	
		map2.push([]);
		for(var j = 0; j < map[i].length ; j++){
			map2[i].push(map[i][j]);
		}
	}
	
	return map2;
}

Map.prototype.getInitialMap = function(){
	return this.initialmap;
}


Map.prototype.setLevel= function(x, y, level){
	
	this.map[y][x] = level;
	
}

Map.prototype.reset = function(codebo){
	//console.log(codebo);
	
	this.map = this.copyMap(this.initialmap);
	this.block = [];
	this.create();
	this.adjustmentLevels(codebo.actuallevel, codebo.actualx, codebo.actualy);
	console.log(this.item);
	if(this.item != undefined)
		this.item.show();
}


Map.prototype.adjustmentLevels = function(level, x, y){
	

	for(var i = 0; i < this.block.length; i++){
		
		if(this.block[i].level > level){
		//console.log( ">", this.block[i] );
			
			if(  (this.block[i].refx == x) && (this.block[i].refy > y)
			||
			(this.block[i].refy == y) && (this.block[i].refx < x)
			||
			(this.block[i].refx < x) && (this.block[i].refy > y)
			)
			{
				this.block[i].z = 100;
			}else{
				this.block[i].z = 1;
				
			}
			
		}
	
	}
}

Map.prototype.createNonBlocks = function(i, j){
	

	x = j;
	y = i;
	var anim1 = new Animation( ["water_0","water_1","water_2"], 0.1);
	posx = 200 + (y*105) - (x*35) + (x-y) * 70;
	posy = 235 - (y * 17.5) -(x*17.5) + (y+1) * 35 + this.margintop;

	var nblock = new GameObject( [anim1], posx, posy, "water", 70,35 );
	nblock.setTag("nblock");			
}


Map.prototype.createBlocksItens = function(i, j, blockname){

	x = j;
	y = i;
	var anim1 = new Animation( ["water_0","water_1","water_2"], 0.1);
	
	posx = 200 + (y*105) - (x*35) + (x-y) * 70;
	posy = 235 - (y * 17.5) -(x*17.5) + (y+1) * 35 + this.margintop;
	
	//create water under bridge
	if(blockname == "block_bridge"){
		var water = new GameObject( [anim1], posx, posy, "water", 70,35 );
		water.setTag("nblock");
		
	}
	
	var bt = new Block( blockname , posx  , posy - 35 ,"imagem", 1, x, y, 0);
	bt.setTag("item");
	
	
					
}

Map.prototype.createBlocks = function(i, j){
	
	
	x = j;
	y = i;
	
	posx = 200 + (y*105) - (x*35) + (x-y) * 70;
	posy = 200 - (y * 17.5) -(x*17.5) + (y+1) * 35 + this.margintop;
	
	var valueBlock = this.map[i][j]%10;
	
	for(var l = 0; l < Math.abs( valueBlock ) ; l++){
		
		if(this.map[i][j] < 0 ){
			blockname = "block_4";
		}else{ 
		
			if( ( l == valueBlock-1) && (l == 0) )
				blockname = "block_1";
			else if(l == 0) 
				blockname = "block_0";
			else if(l == valueBlock-1) 
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
	
		
	var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('nblock');
	for (var i = 0; i < objectstag.length; i++) {
		se.mlevel.removeObject(objectstag[i]);
	}


	var objectstag = se.mlevel.getCurrentScene().getObjectsByTag('item');
	for (var i = 0; i < objectstag.length; i++) {
		se.mlevel.removeObject(objectstag[i]);
	}

		
	for(var i = 0; i < this.map.length  ; i++){	
		for(var j = this.map[i].length-1; j >= 0 ; j--){
				
				if( (this.map[i][j] > 0) && (this.map[i][j] < 10)){
	
					this.createBlocksItens(i, j, "block_bridge");
					
				} else if(this.map[i][j] == 10){
					this.createNonBlocks(i, j);
				}else{
					this.createBlocks(i, j);
				}
			  	
		}
	}
	
   
};
