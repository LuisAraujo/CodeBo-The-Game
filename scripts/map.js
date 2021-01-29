function Map(map, margintop, marginleft) {

	this.map = map;
	this.block = [];
	this.margintop = margintop;
	this.marginleft = marginleft;
	this.create();
	
}


Map.prototype.adjustmentLevels = function(level, x, y){
	//((this.block[i].refx > x) && (this.block[i].refy == y))
	for(var i = 0; i < this.block.length; i++){
		
		if(this.block[i].level > level){
		 
			console.log(this.block[i]);
			
			if(
			(this.block[i].refy == y) && (this.block[i].refx > x)
			||(this.block[i].refx == x) && (this.block[i].refy < y)
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
	
	for(var l = 0; l < this.map[i][j]; l++){
		
		if( ( l == this.map[i][j]-1) && (l == 0) )
			blockname = "block_1";
		else if(l == 0) 
			blockname = "block_0";
		else if(l == this.map[i][j]-1) 
			blockname = "block_2";
		else 
			blockname = "block_3";
		
		console.log(blockname);
		var bt = new Block( blockname , posx  , posy - 35*l ,"imagem", 1, x, y, l+1);
		
		this.block.push(bt);
	}
	
}
Map.prototype.create = function () {
	
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
				}else if(this.map[i][j] == 1){
		
					this.createBlocks(i, j);
			  	
				}else if(this.map[i][j] == 2){
					this.createBlocks(i, j);
				
				//@todo
				}else if(this.map[i][j] == 3){
					
					/*esse blocos estão com um z maior que codebo
					para dá a ideia de 3d
					quando codebo mudar de nivel, esse blocos (ou pelo menos o superior, deve ficar com o z menor que o codebo*/
					this.createBlocks(i, j);
					
				//@todo
				}else if(this.map[i][j] == 4){
					
					
					//new Block( "block_0" , this.marginleft + m + j*70, this.margintop +i*17.5, "imagem", 1 );
					
					//new Block( "block_3" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 1 );
					
					//new Block( "block_3" , this.marginleft + m + j*70, this.margintop +i*17.5-70, "imagem", 1 );
					
					//new Block( "block_2" , this.marginleft + m + j*70, this.margintop +i*17.5- 105, "imagem", 1 );
				
				//}
				
			}
		}
	}
	
   
};
