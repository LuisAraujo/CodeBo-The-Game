function Log(){
	this.actions = [];
	this.allactions = [];
}
Log.prototype.addAction = function(action){
	
	this.actions.push( action );
	
};

Log.prototype.startGame = function(){
	var d = new Date();
	
	register = "start-game;" + d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds();
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}

Log.prototype.outGame = function(){
	var d = new Date();
	
	register = "out-game;" + d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	d.getHours() + ":" + d.getMinutes() +":" +d. getSeconds();
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}


Log.prototype.startLevel  = function(level){
	var d = new Date();
	
	register = "start-level;" + level+";"+ d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds();
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}


Log.prototype.finishLevel  = function(level){
	var d = new Date();
	
	register = "finish-level;" + level+";"+ d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds();
	setNewItem(register);
	console.log(register);
}


Log.prototype.reloadLevel  = function(level){
	var d = new Date();
	
	register = "reload-level;" + level+";"+ d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds();
	setNewItem(register);
	console.log(register);
}

Log.prototype.setVersion  = function(version){
	saveItem("logversion", version);
}

Log.prototype.getVersion  = function(version){
	return  getItem("logversion");
}

Log.prototype.commandsPlay  = function(){
	commands = "";
	
	for(let i = 0;i < this.actions.length; i++)
		commands +=  this.actions[i]+"@";
	
	var d = new Date();

	register = "commands; ;"+ d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds()+"-"+ commands;
	
	this.actions = [];
	
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}


Log.prototype.getMetaDados = function(){
	allactions = getListItemsPrefix("Log");
	
	var text = "";
	
	for(let i=0; i < allactions.length; i++)
		text += "[" + allactions[i] + "]";

	var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "metadados.txt");

}

log = new Log();