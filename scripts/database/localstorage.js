var meuStorage = localStorage;

function clearAllItems(){
	localStorage.clear();	
}

function setNewItem(content){
	var cid = 0;
	
	while(getItem("Log"+cid) != null){
		 cid++;
	}
	 
	var name = "Log"+cid;
	localStorage.setItem(name, content);	
	
	return name;
}

function saveItem(name, content){
	localStorage.setItem(name, content);	
}

function getListItems(){
	var a = [];
	for( key in localStorage){
		a.push(key);
	}
	return a;
}

function getListItemsPrefix(pref){
	var a = [];
	for( key in localStorage){
		if( key.indexOf( pref ) == 0 ) 
			a.push(localStorage.getItem(key) );
	}
	return a;
}


function getItem(item){
	return localStorage.getItem(item);
}

function getNameItem(id){
	return getProject(id).split("_")[0]
}

function deleteAllItem(){

	for( item in localStorage){
		localStorage.removeItem(item);
	}
}

function deleteItem(item){
	console.log(item);
	localStorage.removeItem(item);
}