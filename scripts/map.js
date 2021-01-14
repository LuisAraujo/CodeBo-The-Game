function Map(map, margintop, marginleft) {

	this.map = map;
	this.margintop = margintop;
	this.marginleft = marginleft;
	this.create();
	
}


Map.prototype.create = function () {
	
	var anim1 = new Animation( ["water_0","water_1","water_2"], 0.1);
	
	
	for(var i = 0; i < this.map.length; i++){
		
		for(var j = 0; j < this.map[i].length; j++){
			//if(map[i][j] != 0){
				var m = 0;
				if(i%2 == 0)
					m = -35;
				
				if(this.map[i][j] == 0)
					
					new GameObject( [anim1], this.marginleft + m + j* 70, this.margintop + i * 17.5, "water", 70,35 );
	
				else if(this.map[i][j] == 1)
					new Block( "block_1" , this.marginleft + m + j*70, this.margintop + i*17.5, "imagem", 1 );
				
				else if(this.map[i][j] == 2){
					
					new Block( "block_0" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 1 );
					
					new Block( "block_1" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 1 );
				
				}else if(this.map[i][j] == 3){
					
					new Block( "block_0" , this.marginleft + m + j*70, this.margintop +i*17.5, "imagem", 1 );
					
					new Block( "block_3" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 1 );
					
					new Block( "block_2" , this.marginleft + m + j*70, this.margintop +i*17.5-70, "imagem", 1 );
				
				}else if(this.map[i][j] == 3){
					
					
					new Block( "block_0" , this.marginleft + m + j*70, this.margintop +i*17.5, "imagem", 1 );
					
					new Block( "block_3" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 1 );
					
					new Block( "block_3" , this.marginleft + m + j*70, this.margintop +i*17.5-70, "imagem", 1 );
					
					new Block( "block_2" , this.marginleft + m + j*70, this.margintop +i*17.5- 105, "imagem", 1 );
				
				//}
				
			}
		}
	}
	
   
};
