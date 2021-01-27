function Map(map, margintop, marginleft) {

	this.map = map;
	this.margintop = margintop;
	this.marginleft = marginleft;
	this.create();
	
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
					//console.log( "x = " + j, "y = " + i);
					
					var x = j; 
					var y = i;

					new Block( "block_1" ,   200 + (y*105) - (x*35) + (x-y) * 70, 200 - (y * 17.5) -(x*17.5) + (y+1) * 35,"imagem", 1 );
			   
					
				//@todo
				}else if(this.map[i][j] == 2){
					
					//new Block( "block_0" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 1 );
					
					//new Block( "block_1" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 1 );
				//@todo
				}else if(this.map[i][j] == 3){
					
					/*esse blocos estão com um z maior que codebo
					para dá a ideia de 3d
					quando codebo mudar de nivel, esse blocos (ou pelo menos o superior, deve ficar com o z menor que o codebo*/
					
					//new Block( "block_0" , this.marginleft + m + j*70, this.margintop +i*17.5, "imagem", 100 );
					
					//new Block( "block_3" , this.marginleft + m + j*70, this.margintop +i*17.5-35, "imagem", 100 );
					
					//new Block( "block_2" , this.marginleft + m + j*70, this.margintop +i*17.5-70, "imagem", 100 );
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
