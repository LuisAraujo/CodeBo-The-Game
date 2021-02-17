var meuStorage = localStorage;

//clearAllProjects();
//setNewProject("Teste_C#.2|10|100,D.2|100|200");
//p = getListProject();
//console.log(p)


function clearAllItems(){
	localStorage.clear();	
}

function setNewItem(content){
	var cid = 0;
	
	while(getProject("Project"+cid) != null){
		 cid++;
	}
	 
	var name = "Project"+cid;
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

function getItem(item){
	return localStorage.getItem(item);
}

function getNameItem(id){
	return getProject(id).split("_")[0]
}

function deleteItem(item){
	console.log(item);
	localStorage.removeItem(item);
}