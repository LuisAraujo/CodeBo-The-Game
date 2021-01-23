const se = new StarterEngine();

se.setResources = function () {
    //Add lista resource
    //this.loader.addResource("background", "Backgrounds/purple.png", "image");
	
	//sprites CodeBo
	this.loader.addResource("codebo_sp1", "codebo/sp1.png", "image");
	this.loader.addResource("codebo_sp2", "codebo/sp2.png", "image");
	this.loader.addResource("codebo_sp3", "codebo/sp3.png", "image");
	this.loader.addResource("codebo_sp4", "codebo/sp4.png", "image");
	this.loader.addResource("codebo_sp5", "codebo/sp5.png", "image");
	this.loader.addResource("codebo_sp6", "codebo/sp6.png", "image");
	
	//sprites blocks
	this.loader.addResource("block_0", "block_0.png", "image");
	this.loader.addResource("block_1", "block_1.png", "image");
	this.loader.addResource("block_2", "block_2.png", "image");
	this.loader.addResource("block_3", "block_3.png", "image");
	
	//sprites water
	this.loader.addResource("water_0", "water_0.png", "image");
	this.loader.addResource("water_1", "water_1.png", "image");
	this.loader.addResource("water_2", "water_2.png", "image");
	
	
	//sprites buttons
	this.loader.addResource("button_backward", "button_backward.png", "image");
	this.loader.addResource("button_forward", "button_forward.png", "image");
	this.loader.addResource("button_left", "button_left.png", "image");
	this.loader.addResource("button_right", "button_right.png", "image");
	
	this.loader.addResource("button_play", "button_play.png", "image");
	
	//sprites mini buttons
	this.loader.addResource("mini_forward", "button_forward_mini.png", "image");	
	this.loader.addResource("mini_backward", "button_backward_mini.png", "image");
	this.loader.addResource("mini_left", "button_left_mini.png", "image");
	this.loader.addResource("mini_right", "button_right_mini.png", "image");
	
	//remover - teste
	this.loader.addResource("block_blank", "block_blank.png", "image");
	this.loader.addResource("block_blank2", "block_blank2.png", "image");


};


//Quando o loading dos recursos acaba, esse métodos é executado
se.gameReady = function() {

	//criando um level
	var lv1 = new Scene();
	
	
	
	//mapa, pode ser obtido do arquivo
	var arrmap = [
	[0,0,1,0,0,0],
	[0,0,1,0,0,0],
	[0,0,0,1,0,0],
	[0,0,0,1,0,0],
	[0,0,0,0,1,0],
	[0,0,0,0,1,0],
	[0,0,0,0,0,3],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
	];
	
	//configurando as funcoes de inicio e update
	lv1.setFunctionStart( setLevel.bind(null, arrmap) );
	lv1.setFunctionUpdate( updateLevel );
	

	//adicional o level ao jogo
	this.mlevel.addScene(lv1);

}


function updateLevel(){
  printCommands();
}

/*Exibe os comandos abaixo do play*/
function printCommands(){

  // removendo todos os comandos
  var objectstag = se.mlevel.getCurrentScene().getObjectsByTag("btcommands");	
  for(var i = 0; i < objectstag.length; i++){
	se.mlevel.removeObject(objectstag[i]);
  }
   
  posx = 0;
  posy = 0;
  marginx = 500;
  marginy = 100;
  j=0;
 
	//percorrendo os comandos
  for(var i = 0; i < actions.length; i++){
		j++;
		
		//grade de 4 comandos
		if(i%4 == 0)
			j =0;	
		posy = parseInt(i/4) * 35;
		posx = j * 35;
		
		bt = new MiniButton("mini_"+actions[i], marginx + posx, marginy +  posy , function(){
			actions.splice(this.getId(), 1);
		} ,30,30);
		
		bt.setId(i);
		bt.setTag("btcommands");
		
	}
	
}


//funcao incial do jogo
function setLevel(arrmap){

	//map
	map = new Map(arrmap, 200, 70);
	
	//CodeBo
	codebo = new Codebo( 180, 180, 0, 2, "play", 99 );
	
	actions = [];
	
	bt1 = new Button("button_forward", 200, 500, function(){
		actions.push("forward");
	}, 40,40);
	
	bt2 = new Button("button_backward", 250, 500, function(){
		actions.push("backward");
	}, 40,40);
	bt3 = new Button("button_left", 300, 500, function(){
		actions.push("left");
	}, 40,40);
	bt4 = new Button("button_right", 350, 500, function(){
		actions.push("right");
	}, 40,40);
	
	
	bt4 = new Button("button_play", 500, 40, function(){
		codebo.setCommands( actions, arrmap );
		codebo.stopCommands();
		codebo.startPosition();
		setTimeout( function(){
			codebo.runCommands();
		}, 100);
		
	}, 50,50);
	
}

