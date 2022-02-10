function Log(){
	this.actions = [];
	this.allactions = [];
}
Log.prototype.addAction = function(action){
	
	this.actions.push( action );
	
};

Log.prototype.startGame = function(){
	var d = new Date();
	
	register = "start-game; ;" + d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	this.getFullHour();
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}

Log.prototype.outGame = function(){
	var d = new Date();
	
	register = "out-game; ;" + d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	this.getFullHour();
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}


Log.prototype.startLevel  = function(level){
	var d = new Date();
	console.log(level);
	register = "start-level;" + level+";"+ d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	this.getFullHour();
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}


Log.prototype.finishLevel  = function(level){
	var d = new Date();
	
	register = "finish-level;" + level+";"+ d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	this.getFullHour();
	setNewItem(register);
	console.log(register);
}


Log.prototype.reloadLevel  = function(level){
	var d = new Date();
	
	register = "reload-level;" + level+";"+ d.getFullYear() +  "-" + d.getMonth()  + "-" + d.getDate() + ";"+
	this.getFullHour();
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
	 this.getFullHour() +"-"+ commands;
	
	this.actions = [];
	
	//this.allactions.push(register);
	setNewItem(register);
	console.log(register);
}

Log.prototype.getFullHour = function(){
	var d = new Date();
	
	var hours = d.getHours();
	if(hours < 10)
		 hours = "0" + hours;
	 
	var minutes = d.getMinutes();
	if(minutes < 10)
		 minutes = "0" + minutes;
	 
	var seconds = d.getSeconds();
	if(seconds < 10)
		 seconds = "0" + seconds;
	 
	return hours + ":" + minutes +":" + seconds;
}

Log.prototype.getMetaDados = function(){
	allactions = getListItemsPrefix("Log");
	
	allactions = allactions.sort( function(a, b){
		
		a_ = a.split(";");
		b_ = b.split(";");
		
		if(a_[2] == b_[2]){
			
			a__ = a_[3].split("-");
			b__ = b_[3].split("-");
			console.log(a__[0], b__[0], a__[0] > b__[0]);
			if(a__[0] > b__[0])
				return 1;
			else  if(a__[0] < b__[0])
				return -1;
			else 
				return 0;
		}
		
		
		if(a_[2] > b_[2])
			return 1;
		else if(a_[2] < b_[2])
			return -1;
		else 
			return  0;
		
		
	});
	
	var text = "";
	
	for(let i=0; i < allactions.length; i++)
		text += "[" + allactions[i] + "]\n";

	console.log(text);
	var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
	//saveAs(blob, "metadados.txt");

}

log = new Log();