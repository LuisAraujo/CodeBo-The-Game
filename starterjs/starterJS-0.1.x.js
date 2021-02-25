/**
* Representa uma sequência de imagens para animação
* @param animations
* @param {array} - array of animations
* @para {array} - array de propriedades x, y, z e aplha
* @constructor
*/
function Animation(sprites, timesprite, properties, loop) {

    this.sprites = [];
	this.properties = properties!=undefined?properties:[];
	
	if(sprites != undefined)
		this.verifySprites( sprites );
	
    this.currentsprite = 0;
    this.timesprite = timesprite!=undefined?timesprite:5;
	this.currenttimestripe = 0;
    this.stop = false;
    this.start();
	this.animation;
	this.loop = loop!=undefined?loop:true;
	this.nextanimation = undefined;
	this.objectparent;
	
	
}
	
/**
* Configura a próxima animaçã. Ao fazer isso, a animação irá executar a próxima, quando finalizar.
* @method
*/
Animation.prototype.setNextAnimation = function (animation) {
	this.nextanimation  = animation;
	this.currentsprite = 0;
}


Animation.prototype.setObjectParent = function( objectparent ){
	this.objectparent = objectparent;
}


Animation.prototype.setLoop = function( loop ){
	this.loop = loop;
}



Animation.prototype.verifySprites = function (sprites) {
	
	
	if(Array.isArray(sprites)){

        for(var i=0; i< sprites.length; i++){

            var sprite_temp =  se.loader.getAssets(sprites[i]) ;

            if((!sprite_temp instanceof Image) || (sprite_temp == null)){
                throw new Error("Ocorreu um erro ao carregar a imagem" + sprite_temp + ". Verifique o nome adicionado aos resources");
            }else{
                this.sprites.push(sprite_temp);
            }
        }

    } else if(typeof sprites == "string"){
			var sprite_temp =  se.loader.getAssets(sprites) ;
            if((!sprite_temp instanceof Image) || (sprite_temp == null)){
                throw new Error("Ocorreu um erro ao carregar a imagem" + sprite_temp + ". Verifique o nome adicionado aos resources");
            }else{
                this.sprites.push(sprite_temp);
            }
    }


  
	
}
	
/**
* Inicia a sequência da animação com tempo
* @method
*/
Animation.prototype.start = function () {
	
    var _this = this;

}

/**
* Update da animação
* @method
*/
Animation.prototype.update = function () {
	
	this.currenttimestripe++;
	
	if(this.currenttimestripe < this.timesprite){
			return;
	}else{
		this.currenttimestripe = 0;
	}
	
    if(this.stop)
        return;

    if(this.getCurrentIndexSprite() < this.sprites.length-1)
        this.nextSprite();
	else if(this.nextanimation != undefined){
		this.objectparent.setAnimationByIndex( this.nextanimation );
	}else if(this.loop){
		 this.setCurrentIndexSprite(0);	
	}

   
}
/*
Animation.prototype.update = function (_this) {

    if(this.stop)
        return;

    if(_this.getCurrentIndexSprite() < _this.sprites.length-1)
        _this.nextSprite();
    else
        _this.setCurrentIndexSprite(0);

    window.setTimeout(
        function(){
            _this.update(_this);
        }
        , _this.timesprite*1000
    );
}
*/


/**
 * Avança para o próximo sprite
 * @method
 */
Animation.prototype.nextSprite = function () {
   this.currentsprite++;
}


/**
 * Retorna as propriedades  sprite
 * @method
 */
Animation.prototype.getProperties = function () {
   if(this.properties!=undefined)
		return this.properties[this.currentsprite];
	else
		return [];
}


Animation.prototype.setProperties = function (properties) {
   this.properties = properties;
}

/**
 * Retorna ao sprite anterior
 * @method
 */

Animation.prototype.priorSprite = function () {
    this.currentsprite--;
}

/**
 * Especifica o tempo de intervalo entre os sprites
 * @param interval
 */
Animation.prototype.setInterval = function (interval) {
    this.timesprite = interval;
}

/**
 * Especifica o sprite atual com base no indice
 * @param index
 */
Animation.prototype.setCurrentIndexSprite = function (index) {
    if(index < this.sprites.length)
        this.currentsprite = index;
    else
        console.warn("Índice fora da faixa da aminação atual");
}

/**
 * Retorna o indice do sprite atual
 * @return {number|*}
 */
Animation.prototype.getCurrentIndexSprite = function () {
    return this.currentsprite;
}

/**
 * Retorna o sprite atual
 * @return {*}
 */
Animation.prototype.getCurrentSprite = function () {
    return this.sprites[this.currentsprite];
}

/**
 * Especifica sprites da animação
 * @param sprites
 */
Animation.prototype.setSprites = function (sprites) {
    this.sprites = sprites;
}


/**
* Para de executar a animação atual
*/
Animation.prototype.stopAnimation = function () {
   this.stop = true;
}

/**
* Retoma a animação atual
*/
Animation.prototype.startAnimation = function () {
    this.stop = false;
}




/**
* Retoma a obeto que representa uma animação de transição
* (bounce, side, hide, show)
*/

//{h:55, w:65, x:197, y:202}

Animation.prototype.insertRepeatAnimation = function (name, count) {
	arr = [];
	
	for(let i = 0; i < count; i++){
		arr.push(name);
	}
	
	this.verifySprites( arr );
}
 

Animation.prototype.insertAnimation = function (name, object, count) {
    var arr = [];
	if(name == "bounce"){
		
		initx = object.x;
		inity = object.y;
		inith = object.h;
		initw = object.w;
		
		
		arr.push( {x:initx, y: inity, h : inith, w : initw} );
		up = true;
		for(let i = 0; i < count; i++){
			if(count%2 ==0){
				if(( i == count/2) && (up))
					up=false;
			}else{
				
				if(( i > (count-1)/2) && (up))
					up=false;
			}
			
			
			if(up){
				initx = initx - 2.5*count/2;
				inity = inity + 2.5*count/2;
				inith = inith - 5*count/2;
				initw = initw + 5*count/2;
			}else{
				initx = initx + 2.5*count/2;
				inity = inity - 2.5*count/2;
				inith = inith + 5*count/2;
				initw = initw - 5*count/2;
			}
			
			
			arr.push( {x:initx, y: inity, h : inith, w : initw} );
		}
		
		if(count%2 != 0 )
			arr.push( {x: object.x, y: object.y, h : object.h, w : object.w} );
	
	
	}else if(name == "up"){
		
		limitu = object.y - 5;
		limitd = object.y + 5;
		up = true;
		vel = 2;
		inity = object.y;
		
		while(count--){
			
			if(up){
				inity -=vel;
				
				if(inity < limitu){
					up = false;
				}
			}else{
				inity +=vel;
				
				if(inity > limitd){
					up = true;
				}
			}
			
			arr.push( {y: inity} );
		}
			
	}else if(name == "fadein"){
		perc = 1/count;
		percCurrent = 0;
		for(let i = 0; i < count; i++){
			
			arr.push( {a: percCurrent} );
			percCurrent += perc;
		}
		
	}
		
	
	
	this.properties  = arr;
}




/**
 * Especifica uma altura ou largura do gameobject com base no primeiro sprite da animação
 * @param type
 * @return {number}
 */
Animation.prototype.autoSize = function(type){
    if(type == "h")
        return this.sprites[0].height
    else if(type == "w")
        return this.sprites[0].width;
    else
        return 0;
}
/**
 * Representa um Game Object
 * @param {array} sprite  - Array de caminhos dos sprites 
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {string} classname - Nome da classe do objeto (grupo)
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
 
 //gameobject here
function GameObject(animations, x, y, classename, w, h, r, z) {
    //this.sprite = null;

    this.x = 0;
    if(x !=undefined)
        this.x = x;
    this.y = 0;

    if(y !=undefined)
        this.y = y;

    this.classename = classename;

    this.w = 0;
    if(w != undefined)
        this.w = w;

    this.h = 0;

    if(h != undefined)
        this.h = h;

    this.z = 0;
    if(z != undefined)
        this.z = z;
	
    this.r = 0;
    if(r != undefined)
        this.r = r;

    this.alpha = 1;
    
	this.currentAnimation = 0;

    if(animations != undefined) {

		this.setAnimation(animations);
    }

	this.tag = "";
    this.linklevel = se.mlevel.currentScene;
	this.isshow = true;

    //self add in currente level (test)
    if(se.mlevel.getCurrentScene()!= undefined){
        se.mlevel.getCurrentScene().addObjects(this);
	}else{
        console.warn("Impossível inserir objeto no nível atual.");
	}
}



/**
 * Atualiza o z do objeto
 */
GameObject.prototype.setZ = function(z) {
this.z = z;
}



/**
 * Retorna o z do objeto
 */
GameObject.prototype.getZ = function(z) {
	return this.z;
}

/**
 * Atualiza o estado o objeto, é chamado há cada loop
 * @method
 */
GameObject.prototype.update = function() {

}


/**
 * Configura a função update do game object
 * @method
 */
GameObject.prototype.setUpdateFunction = function(update) {
	this.update = update;
}


/**
 * Atualiza a animação
 * @method
 */
GameObject.prototype.setAnimation = function(animations){
	
		
	   if(Array.isArray(animations)) {
			_this = this;
            //verificando se algum elemento não é uma animação
            animations.forEach(function(e){
                if(e.constructor != Animation){
				throw new Error("Algum elemento do Array não é uma animação")
				}
				
				e.setObjectParent( _this );
            });
			
			
            this.animation = animations;

        //se animations for apenas uma string com o nome do sprite
        }else if(typeof animations == "string"){
			anim = new Animation([animations] );
			anim.setObjectParent( this );
            this.animation = [ anim ];
        }


        if (this.h == 0) {
            this.h = this.animation[this.currentAnimation].autoSize("h");
        }
        if (this.w == 0) {
            this.w = this.animation[this.currentAnimation].autoSize("w");
        }
		
}



/**
* Seleciona a animação baseado no index passado
* @param {int} - index
*/
GameObject.prototype.setAnimationByIndex = function(index){
	if(index < this.animation.length )
		this.currentAnimation = index;
	
	//if(this.animation[this.currentAnimation] != undefined)
	this.animation[this.currentAnimation].currentsprite = 0;
}


/**
* Vai para a próxima animação
*/
GameObject.prototype.nextAnimation = function(){
    
    if(this.currentAnimation < this.animation.length)
        this.currentAnimation++;
    else
        this.currentAnimation = 0;
	
	this.animation[this.currentAnimation].currentsprite = 0;
}


/**
* Vai para animação anterior
*/
GameObject.prototype.priorAnimation = function(){
    if(this.currentAnimation > 0)
        this.currentAnimation--;
    else
        this.currentAnimation =  this.animation.length-1;
	
	this.animation[this.currentAnimation].currentsprite = 0;
}


/**
 * Atualiza a tag do objeto
 * @param {tag} string  - tag de um objeto
 */
GameObject.prototype.setTag = function(tag) {
	this.tag = tag;
}



/**
 * Retorna a tag do objeto
 * @return {tag} string - tag do objeto
 */
GameObject.prototype.getTag = function() {
	return  this.tag;
}



/**
 * Atualiza o id do objeto
* @param {id} int  - identificador de um objeto
 */
GameObject.prototype.setId = function (id) {
 
 this.id = id;
   
};



/**
 * Retorna a id do objeto
 * @return {id} int  - identificador de um objeto
 */
GameObject.prototype.getId = function () {
 
	return this.id;
   
};


/**
 * Configura o alpha do game object
 * @return {id} int  - alfa de um objeto
 */
GameObject.prototype.setAlpha = function(alpha) {
	if(alpha > 1)
		alpha = 1;
	else if(alpha < 0)
		alpha = 0;
	
	this.alpha = alpha;
   
};


/**
 * Retorna o alpha do game object
 * @return {id} int  - alfa  de um objeto
 */
GameObject.prototype.getAlpha = function(alpha) {
 
	return this.alpha;
   
}


/**
 * Imprime o estado atual do objeto na tela
 */
GameObject.prototype.print = function() {

	
	if(!this.isshow)
		return;
	
    if(this.animation != null) {
		
		properties = this.animation[this.currentAnimation].getProperties() ;
		
		var centreX = this.x + (this.w / 2);
		var centreY = this.y + (this.h / 2);
		
		
		ctx.save();
        
		
		ctx.translate(centreX, centreY);
		ctx.rotate(this.r * Math.PI / 180);
		ctx.translate(-centreX, -centreY);
		
		
		if(properties != undefined)  {
			
			ctx.globalAlpha = properties.a;
			//console.log(properties.x);
			ctx.drawImage(
				this.animation[this.currentAnimation].getCurrentSprite(), 
				properties.x!=undefined? properties.x:this.x, 
				properties.y!=undefined?properties.y:this.y, 
				properties.w!=undefined?properties.w:this.w, 
				properties.h!=undefined?properties.h:this.h 
			);
		
		}else{
			ctx.globalAlpha = this.alpha;
			ctx.drawImage(this.animation[this.currentAnimation].getCurrentSprite(), this.x, this.y, this.w, this.h);
		}
		ctx.restore();
		
		this.animation[this.currentAnimation].update();
    }
}

/**
 * Define a rotação do objeto
 * @param {int} r - rotação
 */
GameObject.prototype.setRotate = function (r) {
    if(r > 360)
        r -= 360;

    this.r = r;
}


/**
 * Retorna a rotação do objeto
 * @return {int} r - rotação
 */
GameObject.prototype.getRotate = function () {
    return this.r;
}



/**
 * Configura a posição do objeto
 * @method
 * @param {int} x - Coordenada x do objeto
 * @param {int} y - Coordenada y do objeto
 */
GameObject.prototype.setPosition = function (x, y) {
    this.x = x;
    this.y = y;
}

/**
 * Configura a posição do objeto
 * @method
 * @param {GameObject} object - O objeto âncora
 * @param {string} position - a posição do objeto ancorado (top, bottom, left, right)
 */
GameObject.prototype.setPositionByObject = function (object, position) {

    if(position == "top"){

        this.x = object.x + object.w / 2 - this.w / 2;
        this.y = object.y - this.h;
    }
}

/**
 * Configura a largura do objeto
 * @method
 * @param {int} width - Largura do objeto
 */
GameObject.prototype.setWidth = function (width) {
    this.w = width;
}

/**
 * Obtém a largura do objeto
 * @method
 * @return {int} width - Largura do objeto
 */
GameObject.prototype.getWidth = function () {
   return this.w;
}

/**
 * Configura a altura do objeto
 * @method
 * @param {int} height - Altura do objeto
 */
GameObject.prototype.setHeight = function (height) {
    this.h = height;
}

/**
 * Obtém a altura do objeto
 * @method
 * @return {int} height - Altura do objeto
 */
GameObject.prototype.getHeight = function () {
    return this.h;
}

/**
 * Configura o tamanho do objeto
 * @method
 * @param {int} Largura do objeto
 * @param {int} Altura do objeto
 */
GameObject.prototype.setSize = function (width, height) {
    this.w = width;
    this.h = height;
}

/**
 * Translada o objeto
 * @method
 * @param {int} x - Quantidade de pixels na horizontal
 * @param {int} y - Quantidade de pixels na vertical
 */
GameObject.prototype.translate = function(x, y) {
    this.x +=x;
    this.y+=y;
}

/**
 * Executa função com base na posicao do mouse
 * @param {int} x - coordenada x do mouse
 * @param {int} y - coordenada y do mouse
 */
GameObject.prototype.moveMouse = function (x, y) {

}


/**
 * Muda o estado do gameobject para show
 */
GameObject.prototype.show = function() {
		this.isshow = true;
}

/**
 * Muda o estado do gameobject para hide
 */
GameObject.prototype.hide = function () {
		this.isshow = false;
}


/**
 * Representa uma figura Geométrica
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @param {string} fill - Estilo do preencimento
 * @param {string} stroke - Estilo da borda
 * @constructor
 */
function Geometric(x, y, classename, w, h,  fill, stroke, r, z) {

    GameObject.call(this, undefined, x, y, classename, w, h, r, z);

    this.stroke = null;
    if(stroke != undefined)
        this.stroke = stroke;

    this.fill = null;
    if(fill != undefined)
        this.fill = fill;

    this.linew = 1;

}


Geometric.prototype = Object.create(GameObject.prototype);


/**
 * Configura o preenchimento do retângulo
 * @method
 * @param {string}  fill - cor do preecenchimento em RGB
 */
Geometric.prototype.setFill = function(fill) {
    this.fill = fill;
}
/**
 * Limpa  a configuração de preenchimento do retângulo
 * @method
 */
Geometric.prototype.clearFill = function() {
    this.fill = null;
}

/**
 * Configura a borda do retângulo
 * @method
 * @param {string} stroke - cor da linha em RGB
 */
Geometric.prototype.setStroke = function(stroke) {
    this.stroke = stroke;
}

/**
 * Limpa a configuração de borda do retângulo
 * @method
 */
Geometric.prototype.clearStroke = function() {
    this.stroke = null;
}

/**
 * Configura o tamanho da linha da borda do retângulo
 * @method
 * @param {int} width - largura da linha
 */
Geometric.prototype.setLineWidth = function(width) {
    this.linew = width;
}

/**
 * Obtém o tamanho da linha da borda do retângulo
 * @method
 * @return {int} line-width
 */
Geometric.prototype.getLineWidth = function() {
    return this.linew;
}
/**
 * Representa um background
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do background
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function Background(sprite, x, y, h, w) {

    if(x == undefined)
         x= 0;
    if(y == undefined)
        y=0;
    if(h == undefined)
        h = canvas.height;
    if(w == undefined)
        w = canvas.width;

    GameObject.call(this, sprite, x, y, "background", h, w);
    this.z = 0;
}


//fazendo herança
Background.prototype = Object.create(GameObject.prototype);

/**
 * Imprime o background na tela
 */
Background.prototype.print = function(ctx) {
    var ptrn = ctx.createPattern(this.animation[0].getCurrentSprite(), 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, this.w, this.h);
}
/**
 * Representa um level do jogo
 * @param {Array} objects - lista de objetos do level
 * @constructor
 */
function Scene(objects, isactive) {
	this.tutorial = [];
    this.objects = [];

    if(objects != undefined)
        this.objects = objects;

    this.clean = true;
    this.isActive = true;

   if(typeof isactive === "boolean")
        this.isActive = isactive;

    se.mlevel.addScene(this);
	
	this.currentutorial = 0;

}

/**
 * Adiciona um objeto ao level
 * @method
 * @param {GameObject} object - Objeto a ser adicionado no level
 */
Scene.prototype.addObjects = function(object){
    this.objects.push(object);
}

/**
 * Função inicial do level, deve ser sobreescrita pelo usuário
 * @method
 */
Scene.prototype.startFunction = function () {};


/**
 * Função update do level, deve ser sobreescrita pelo usuário
 * @method
 */
Scene.prototype.updateFunction = function () {};



/**
 * Imprime todos os elementos do level
 * @method
 */
Scene.prototype.print = function () {
    //Se a cena não estiver ativa
    if(this.isActive == false)
        return;

    //sort by z-index
    this.objects.sort(function(a,b){
        return a.z - b.z;
    });
	
	

    for(var i=0; i< this.objects.length; i++) {
		
        //chama update de cada objeto
        this.objects[i].update();
        //objetos pode ser removidos no update
        if(this.objects[i] == undefined)
            continue;

        this.objects[i].print(ctx);
    }
}

/**
 * Configura a função inicial do level
 * @method
 * @param callback
 */
Scene.prototype.setFunctionStart = function(callback){
    this.startFunction  = callback;
};


Scene.prototype.print = function () {
    //Se a cena não estiver ativa
    if(this.isActive == false)
        return;

    //sort by z-index
    this.objects.sort(function(a,b){
        return a.z - b.z;
    });
	
	

    for(var i=0; i< this.objects.length; i++) {
        //chama update de cada objeto
        this.objects[i].update();
        //objetos pode ser removidos no update
        if(this.objects[i] == undefined)
            continue;

        this.objects[i].print(ctx);
    }
}

/**
 * Configura a função inicial do level
 * @method
 * @param callback
 */
Scene.prototype.setFunctionStart = function(callback){
    this.startFunction  = callback;
};


Scene.prototype.printTutorial = function () {
    //Se a cena não estiver ativa
    if(this.isActive == false)
        return;

    //sort by z-index
    this.tutorial[this.currentutorial].sort(function(a,b){
        return a.z - b.z;
    });
	

    for(var i=0; i< this.tutorial[this.currentutorial].length; i++) {
        //chama update de cada objeto
        this.tutorial[this.currentutorial][i].update();
        //objetos pode ser removidos no update
        if(this.tutorial[this.currentutorial][i] == undefined)
            continue;

        this.tutorial[this.currentutorial][i].print(ctx);
    }
	
	
}

Scene.prototype.resetCurrentTutorial = function(){
	this.currentutorial = 0;
}


Scene.prototype.addCurrentTutorial = function(){
	if(this.currentutorial < this.tutorial.length-1)
		this.currentutorial++;
	else
		this.istutorial = false;
	
}



Scene.prototype.subCurrentTutorial = function(){
	if(this.currentutorial > 0)
		this.currentutorial--;
	
	
}
/**
 * Configura a função inicial do level
 * @method
 * @param callback
 */
Scene.prototype.setFunctionStart = function(callback){
    this.startFunction  = callback;
};

/**
 * Configura a função inicial do level
 * @method
 * @param callback
 */
Scene.prototype.setFunctionUpdate = function(callback){
    this.updateFunction  = callback;
};


/**
 * Configura os objetos do level
 * @method
 * @param {Array} objects - lista de objetos do level
 */
Scene.prototype.setObjects = function (objects) {
    this.objects = objects;
}

/**
 * Pega todos os objetos do level
 * @method
 */
Scene.prototype.getObjects = function () {
    return this.objects;
}



/**
 * Pega todos os objetos de tutorial do level
 * @method
 */ 
Scene.prototype.getTutorial = function () {
	if(this.tutorial!=undefined)
		return this.tutorial[this.currentutorial];
	return undefined;
}


/**
 * Pega um o objeto do level com base no seu classname
 * @method
 */
Scene.prototype.getObject = function (classname) {
   for(var i = 0; i <  this.objects.length; i++){
	   if(this.objects[i].classname == classname)
		   return this.objects[i];
	   
   }
}


/**
 * Obtém um o objeto do level pela tag
 * @method
 */
Scene.prototype.getObjectByTag = function (tag) {
     for(var i = 0; i <  this.objects.length; i++){
	   if(this.objects[i].tag == tag){
		   return this.objects[i]
	   }
	   
   } 
	
}

/**
 * Obtém  objetos do level pela tag
 * @method
 */
Scene.prototype.getObjectsByTag = function (tag) {
    arr =[];
	 
	 for(var i = 0; i <  this.objects.length; i++){
	   if(this.objects[i].tag == tag){
			arr.push(this.objects[i]);
	   }
	   
   } 

	return arr;
}


/**
 * Remove um o objeto do level através da tag
 * @method
 */
Scene.prototype.removeObjectByTag = function (tag) {
	 
	 var arr = [];
	 
     for(var i = 0; i <  this.objects.length; i++){
	   if(this.objects[i].tag != tag){
		   arr.push( this.objects[i] );
	   }  
   } 
   
   this.objects = arr;
	
}





/**
 * Configura o estado da cena
 * @param isActive
 */
Scene.prototype.setActive = function (isActive) {
    this.isActive = isActive;
}




/**
 * Representa um objeto do tipo som, permite o controle do som (play, pause, stop e outros) attravés
 * da api howler.
 * @param {string} audio - caminho do arquivo de áudio
 * @constructor
 */
Sound = function (audio) {
    this.audio = se.loader.getAssets(audio);
};

/**
 * Toca o som
 * @method
 */
Sound.prototype.play = function () {
    this.audio.play();
};

/**
 * Toca o som em loop
 * @method
 */
Sound.prototype.playInLoop = function () {
    this.audio.loop();
};

/**
 * Pausa o som
 * @method
 */
Sound.prototype.pause = function () {
    this.audio.pause();
};

/**
 * Para o som
 * @method
 */
Sound.prototype.stop = function () {
    this.audio.stop();
};

/**
 * Configura volume
 * @param {float} volume
 * @method
 */
Sound.prototype.setVolume = function (volume) {
    this.audio.volume(volume);
};

/**
 * Verifica se o som esta tocando
 * @return {float} true se o som estiver tocando
 * @method
 */
Sound.prototype.isPlaying  = function () {
    return this.audio.isPlaying();
};

/**
 * Configura função para ser chamada quando o som terminar
 * @param {function} fn
 * @method
 */
Audio.prototype.setOnEnd  = function (fn) {
    this.on("end", fn);
};

/**
 * Representa um objeto do Sprite (printável na tela)
 * @param animations
 * @param {array} - array of animations
 * @constructor
 */
 //sprite here
function Sprite(animations,x,y, h, w, z) {

    GameObject.call(this, animations, x, y, "sprite", h, w, 0, z);

    this.effects = "none";
    this.text = "";
    this.stackText = [];
    this.timewait = false;
    this.mirred = false;

}

Sprite.prototype = Object.create(GameObject.prototype);

Sprite.prototype.update = function () {
}


Sprite.prototype.print = function () {

    ctx.save();

    if(this.mirred){
      ctx.translate(canvas.width/2,0);
      ctx.scale(-1, 1);
        ctx.translate(-canvas.width/2,0);
    }


    GameObject.prototype.print.call(this);
    ctx.restore();

    if(this.timewait)
        return;

    if(this.effects != "none"){

        ctx.save();

        var oldx = canvas.width - this.x;

        if(this.mirred)
            ctx.translate(oldx , this.y - this.h*0.7);
        else
            ctx.translate(this.x+this.w , this.y - this.h*0.7);

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#aaa";
        ctx.fillStyle = "#fff";

        //calculating height by text size
        var height = ((this.text.length / 12 )* 20) + 20;

        if(height == 0)
            height = 20;

        if(this.effects == "say")
            this.printTalkForm(0, 0, 150, height);
        else  if(this.effects == "think")
            this.printThinkForm(0, 0, 150, height);

        //text setting
        ctx.fillStyle = "#000";
        ctx.textAlign = "start";
        ctx.font = "20 px";

        if(this.text.length > 12) {
            for (var i = 0; i < this.text.length / 12; i++) {
                var str_temp = this.text.substring(i * 12, (i + 1) * 12);

                if(str_temp[0] == " ")
                    str_temp = str_temp.substring(1, str_temp.length);

                ctx.fillText(str_temp, 10, 20 * (i + 1));
            }
        }else{
            ctx.fillText(this.text, 10,20);
        }

        ctx.restore();

    }else if(this.stackText.length > 0){

        text_temp = this.stackText.shift();

        if(text_temp[2] == "say")
            this.startSayForSeconds(text_temp);

        else if(text_temp[2] == "think")
            this.startThinkForSeconds(text_temp);

        else if(text_temp[2] == "wait"){
           this.startWait(text_temp[1]);
        }
    }



}

/**
 * Executa a fala do Sprite
 * @param text {String} - texto da fala
 */
Sprite.prototype.say = function (text) {
    this.effects = "say";
    this.text= text;
}

/**
 * Limpa
 * @param text
 * @param secunds
 */
Sprite.prototype.cleanEffects = function (text, secunds) {
   this.effects = "none"
}

/**
 * Cadastra uma fala com tempo na pilha de falas
 * @param text - texto da fala
 * @param secunds - tempo da fala
 */
Sprite.prototype.sayForSeconds = function (text, secunds) {
        this.stackText.push([text, secunds, "say"]);

}


/**
 * Executa uma fala com tempo
 * @param text {Array} - array com texto e tempo da fala
 */
Sprite.prototype.startSayForSeconds = function (text) {
     this.say(text[0]);
     var _this = this;
     window.setTimeout(function () {
         _this.effects = "none";
     }, text[1]*1000);
}

/**
 * Executa a fala do Sprite
 * @param text {String} - texto do pensamento
 */
Sprite.prototype.think = function (text) {
    this.text= text;
    this.effects = "think";
}

/**
 * Cadastra  um pensamento com tempo
 * @param text - texto da do pensamento
 * @param secunds - tempo do pensamento
 */
Sprite.prototype.thinkForSeconds = function (text, secunds) {
    this.stackText.push([text, secunds, "think"]);

}

/**
 * Executa um pensamento com tempo
 * @param text {Array} - array com texto e tempo da fala
 */
Sprite.prototype.startThinkForSeconds = function (text) {

        this.think(text[0]);

        var _this = this;

        window.setTimeout(function () {
            _this.effects = "none";
        }, text[1]*1000);
}


/**
 * Muda o tamanho do sprite com base na porcentagem
 * @param {float} percent - numero decimal
 */
Sprite.prototype.changeSizeFor = function (percent) {
    if(typeof percent == "string"){
        percent = percent.substring(0, percent.length-1);
        if( !isNaN(percent) ) {

            percent = parseFloat(percent) / 100;

        } else
            percent = 0;
    }

    this.h *= percent;
    this.w *= percent;



}

/**
 * Muda o tamanho do sprite por uma tamanho específico
 * @param size
 */
Sprite.prototype.changeSizeTo = function (size) {
   this.h += size;
   this.w += size;
   this.x -= size/2;
   this.y -= size/2;
}

/**
 * Imprime a fala na tela
 * @param x {int} - posição x do balão
 * @param y {int} - posição x do balão
 * @param width {float} - largura do balão
 * @param height {float} - altura do balão
 */
Sprite.prototype.printTalkForm  = function(x, y, width, height) {

        var radius = 5;

        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);

        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);


        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius +10, y + height);
        ctx.lineTo(x  - 10 , y + height + 20);


        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);

        ctx.quadraticCurveTo(x, y, x + radius, y);

        ctx.closePath();

        ctx.fill();
        ctx.stroke();
}

/**
 * Imprime o pensamento na tela
 * @param x {int} - posição x do balão
 * @param y {int} - posição x do balão
 * @param width {float} - largura do balão
 * @param height {float} - altura do balão
 */
Sprite.prototype.printThinkForm  = function(x, y, width, height) {

    var radius = 5;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);

    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);


    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius , y + height);

    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);

    ctx.quadraticCurveTo(x, y, x + radius, y);

    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x+10 , y + height + 20, radius*1.4, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x , y + height + 40, radius, 0, 2 * Math.PI, false);
    ctx.closePath();


    ctx.fill();
    ctx.stroke();

}

/**
 * Cadastra um tempo de espera
 * @param secunds
 */
Sprite.prototype.wait = function (secunds) {
    this.stackText.push(["", secunds, "wait"]);
}


/**
 * Executa um tempo de espera
 * @param secunds
 */
Sprite.prototype.startWait = function (secunds) {
    this.timewait = true;
    var _this = this;
    window.setTimeout(function () {
        _this.timewait = false;
        _this.effects = "none";
    }, secunds*1000);

}

/**
 * Espelha o sprite
 * @param mirror
 */
Sprite.prototype.setMirror = function (mirror) {
    this.mirred = mirror;
    this.x = canvas.width - this.x;
}

/**
* Avança para o próximo Sprite
*/
Sprite.prototype.nextSprite = function(){
    this.setCurrentIndexSprite( this.getCurrentIndexSprite++ );
}

/**
* Volta ao sprite anterior 
*/

Sprite.prototype.priorSprite = function(){
    this.animation.setCurrentIndexSprite( this.getCurrentIndexSprite++ );
}

/**
* Vai para o sprite de índice index
@param {int} index - índice para o sprite
*/
Sprite.prototype.gotoSprite = function(index){
    this.animation.setCurrentIndexSprite( index );
}

/**
* Para a animação atual
*/
Sprite.prototype.stopAnimation = function(){
	this.animation.stopAnimation();
}


/**
* inicia a animação do incio ou de onde foi pausado
*/
Sprite.prototype.startAimation = function(){
	this.animation.setCurrentSprite(0);
	this.animation.startAnimation();
}


/**
* Vai para a próxima animação
*/
Sprite.prototype.nextAnimation = function(){

    if(this.currentAnimation < this.animation.length)
        this.currentAnimation++;
    else
        this.currentAnimation = 0;

}


/**
* Vai para animação anterior
*/
Sprite.prototype.priorAnimation = function(){
    if(this.currentAnimation > 0)
        this.currentAnimation--;
    else
        this.currentAnimation =  this.animation.length-1;
}





/**
 * Representa um projétil
 * @class
 * @extends GameObject
 * @param sprite
 * @param {string} sprite - Nome do sprite do background
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {int} v - Velocidade do projétil
 * @param {int} r - Angulo de rotação do projétil
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function Bullet(sprite, x , y, v, r, h, w) {
    GameObject.call(this, sprite, x, y, "bullet", h,w);
    this.velocity = v;
    this.radius = r;
    this.nofire = ["bullet","background"];
    this.fire =[];
    this.isremoving = false;
    this.z = 99;
}


Bullet.prototype = Object.create(GameObject.prototype);

/**
 * Configura os elementos que não terão colisão
 * @method
 * @param {string} nofire - nome de gameobject
 */
Bullet.prototype.setNoFire = function (nofire) {
    this.nofire.push(nofire);
}

/**
 * Configura os elementos que terão colisão
 * @method
 * @param {Array} fire - um vetor de 2 dimensões [ {string} nome, {function} função]
 */
Bullet.prototype.setFire = function (fire) {
    this.fire.push(fire);
}


/**
 * Atualiza o objeto Projétil
 * @method
 * @override
 */
Bullet.prototype.update = function () {
    //se passar sair da tela, remova
    if((this.y < 0) || (this.y > canvas.height))
        se.mlevel.scenes[this.linklevel].objects.splice(se.mlevel.scenes[this.linklevel].objects.indexOf(this), 1);

    //movimento vertical
    this.y+=this.velocity;

    //verifica colisao
    for(var i =0; i < se.mlevel.getCurrentScene().objects.length; i++) {
        if(this.isremoving)
            continue;

        var ret2 = se.mlevel.getCurrentScene().objects[i];
        for (var j = 0; j < this.nofire.length; j++){
            if (ret2.classename == this.nofire[j]) {
                continue;
            }
        }
        if( (this.x + this.w) > ret2.x &&
            this.x < (ret2.x + ret2.w) &&
            (this.y + this.h) > ret2.y &&
            this.y < (ret2.y + ret2.w)){

            for (var j = 0; j < this.fire.length; j++){
                if (ret2.classename == this.fire[j][0]) {
                    if(this.fire[j][1] == "custom")
                        this.fire[j][2]();
                    else if(this.fire[j][1] == "kill") {
                        ret2.fired();
                    }

                    this.remove();
                }
            }
        }
    }
}

/**
 * Remove o projétil do jogo
 * @method
 */
Bullet.prototype.remove = function () {
    if(this.isremoving)
        return;

    this.isremoving = true;
    se.mlevel.removeObject(this);
}/**
 * Representa um carro top view
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function Car(sprite, x, y, h, w) {

    GameObject.call(this, sprite, x,y,"car", h,w);

    this.buttonup = null;
    this.buttondown = null;
    this.buttonleft = null;
    this.buttonright = null;

    this.aceleration = 0.1;
    this.desaceleration = 0.05;
    this.invertaceleration = 1;
    this.maxSpeed = 4;
    this.speed = 1;

    this.setDefaultControll();

}

Car.prototype = Object.create(GameObject.prototype);

/**
 * Imprime o objeto Car
 * @method
 * @override
 */
Car.prototype.print = function (){

    ctx.save();

    var transx = this.x + this.w/2;
    var transy =  this.y + this.h/2;

    ctx.translate(transx, transy);

    ctx.rotate( (this.r ) * Math.PI /180);

    ctx.translate(-transx, -transy);

    ctx.drawImage(this.animation[this.currentAnimation].getCurrentSprite(), this.x, this.y, this.w, this.h);

    ctx.restore();


}


/**
 * Configura o Controle
 * @method
 * @param up - tecla para o comando up
 * @param down - tecla para o comando down
 * @param left - tecla para o comando left
 * @param right - tecla para o comando rigth
 */
Car.prototype.setControll = function (up, down, left, right) {
    this.buttondown = down;
    this.buttonleft = left;
    this.buttonright = right;
    this.buttonup = up;
}

/**
 * Configura o Controle como padrão
 * @method
 */
Car.prototype.setDefaultControll = function () {
    this.buttondown = "DOWN";
    this.buttonleft = "LEFT";
    this.buttonright = "RIGHT";
    this.buttonup = "UP";
}

/**
 * Atualiza o estado do objeto
 * @method
 * @override
 */
Car.prototype.update = function () {

    this.x += this.speed * Math.cos(this.r * Math.PI / 180);
    this.y += this.speed * Math.sin(this.r * Math.PI / 180);

    if( se.teclado.getKey( this.buttonup ) ){
        this.moveUp();
    }

    if(se.teclado.getKey(this.buttondown)){
        this.moveDown();
    }

    if(se.teclado.getKey(this.buttonright)){
        this.moveRight()
    }

    if(se.teclado.getKey(this.buttonleft)){
        this.moveLeft();
    }

    if ( (!se.teclado.ESQUERDA) && (!se.teclado.DIREITA) && (!se.teclado.CIMA)&& (!se.teclado.BAIXO)){
        if (this.speed >= 0)
            this.speed -= this.desaceleration;
        if (this.speed < 0)
            this.speed += this.desaceleration;

        if((this.speed < 0.1) && (this.speed > -0.1))
            this.speed = 0;
    }

};

/**
 * Move para a direção cima
 * @method
 */
Car.prototype.moveUp = function () {

   if(Math.abs( this.speed ) < this.maxSpeed) {
       if (this.speed >= 0)
           this.speed += this.aceleration;
       if (this.speed < 0)
           this.speed -= this.aceleration;
   }
    if(this.speed < 0)
        this.speed = -this.speed;

}


/**
 * Move para a direção baixo
 * @method
 */

Car.prototype.moveDown = function () {

    if(Math.abs( this.speed ) < this.maxSpeed) {
        if(this.speed >= 0)
            this.speed += this.aceleration;
        if(this.speed < 0)
            this.speed -= this.aceleration;
    }

    if(this.speed > 0)
        this.speed -= this.invertaceleration;

}


/**
 * Move para a  direção esquerda
 * @method
 */
Car.prototype.moveLeft = function () {
    if( se.teclado.getKey( this.buttonup ))
        this.r -=1;
    else if( se.teclado.getKey( this.buttondown ))
        this.r +=1;
}



/**
 * Move para a direção direita
 * @method
 */
Car.prototype.moveRight = function () {
    if( se.teclado.getKey( this.buttonup ))
        this.r +=1;
    else if( se.teclado.getKey( this.buttondown ))
        this.r -=1;
}/**
 * Representa um elemento multidirecional
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function MultDirections(animations, x, y, h, w) {

    GameObject.call(this, animations, x,y,"mult", h,w);

    this.buttonup = null;
    this.buttondown = null;
    this.buttonleft = null;
    this.buttonright = null;

    this.aceleration = 0.05;
    this.desaceleration = 0.05;
    this.maxSpeed = 2;
    this.speed = 1;

    this.setDefaultControll();


}

MultDirections.prototype = Object.create(GameObject.prototype);

/**
 * Exibe na tela o objeto MultiDirections
 * @method
 * @override
**/
MultDirections.prototype.print = function (){

    ctx.save();

    var transx = this.x + this.w/2;
    var transy =  this.y + this.h/2;

    ctx.translate(transx, transy);

    ctx.rotate( (this.r ) * Math.PI /180);

    ctx.translate(-transx, -transy);

    GameObject.prototype.print.call(this);

    ctx.restore();

}

/**
 * Configura o controle
 * @method
 * @param up - tecla para o comando up
 * @param down - tecla para o comando down
 * @param left - tecla para o comando left
 * @param right - tecla para o comando rigth
 */
MultDirections.prototype.setControll = function (up, down, left, right) {
    this.buttondown = down;
    this.buttonleft = left;
    this.buttonright = right;
    this.buttonup = up;
}

/**
 * Configura o Controle como padrão - Keys up, down, left and right
 * @method
 */
MultDirections.prototype.setDefaultControll = function () {
    this.buttondown = "DOWN";
    this.buttonleft = "LEFT";
    this.buttonright = "RIGHT";
    this.buttonup = "UP";
}

/**
 * Atualiza estado do objeto
 * @method
 * @override
 */
MultDirections.prototype.update = function () {


    this.x += this.speed * Math.cos(this.r * Math.PI / 180);
    this.y += this.speed * Math.sin(this.r * Math.PI / 180);

    //up
    if( se.teclado.getKey( this.buttonup ) ) {

        if (!se.teclado.getKey(this.buttonright) && !se.teclado.getKey(this.buttonleft)) {
            this.moveUp();
        } else if (se.teclado.getKey(this.buttonright)) {
            this.turnToRight();
        }else if (se.teclado.getKey(this.buttonleft)){
            this.turnToLetf();
        }else{
            return;
        }
    }

    //down
    if(se.teclado.getKey(this.buttondown)){

        if (!se.teclado.getKey(this.buttonright) && !se.teclado.getKey(this.buttonleft)) {
            this.moveDown();
        } else if (se.teclado.getKey(this.buttonright)) {
            this.turnToRight();
        }else if (se.teclado.getKey(this.buttonleft)){
            this.turnToLetf();
        }else{
            return;
        }


    }

   if(se.teclado.getKey(this.buttonright) ){

        if (!se.teclado.getKey(this.buttonup) && !se.teclado.getKey(this.buttondown)) {
            this.moveRight();
        } else if (se.teclado.getKey(this.buttondown)) {
            this.turnToDown();
        }else if (se.teclado.getKey(this.buttonup)){
            this.turnToUp();
        }else{
            return;
        }
    }

    if(se.teclado.getKey(this.buttonleft) ){
        if (!se.teclado.getKey(this.buttonup) && !se.teclado.getKey(this.buttondown)) {
            this.moveLeft();
        } else if (se.teclado.getKey(this.buttondown)) {
            this.turnToDown();
        }else if (se.teclado.getKey(this.buttonup)){
            this.turnToUp();
        }else{
            return;
        }
    }

    if ( (!se.teclado.ESQUERDA) && (!se.teclado.DIREITA) && (!se.teclado.CIMA)&& (!se.teclado.BAIXO)){
        if (this.speed >= 0)
            this.speed -= this.desaceleration;
        if (this.speed < 0)
            this.speed += this.desaceleration;

        if((this.speed < 0.1) && (this.speed > -0.1))
            this.speed = 0;
    }

};

/**
 * Move para a direção cima
 * @method
 */
MultDirections.prototype.moveUp = function () {

    if(this.getRotate() != 270)
        this.setRotate(270);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Move para a baixo
 * @method
 */
MultDirections.prototype.moveDown = function () {

    if(this.getRotate() != 90)
        this.setRotate(90);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Move para a esquerda
 * @method
 */
MultDirections.prototype.moveLeft = function () {

    if(this.getRotate() != 180)
        this.setRotate(180);


    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Move para a direita
 * @method
 */
MultDirections.prototype.moveRight = function () {

    if(this.getRotate() != 360)
        this.setRotate(360);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Rotaciona para a direita
 * @method
 */
MultDirections.prototype.turnToRight = function () {

    if((this.getRotate() >= 270) && (this.getRotate() < 315) ) {
        this.setRotate(this.getRotate() + 1);
    }else if((this.getRotate() <= 90) && (this.getRotate() > 45) ) {
        this.setRotate(this.getRotate() - 1);
    }

};

/**
 * Rotaciona para a esquerda
 * @method
 */
MultDirections.prototype.turnToLetf = function () {

    if( (this.getRotate() <= 270) && (this.getRotate() > 225) ){
        this.setRotate(this.getRotate()-1);
    }else if( (this.getRotate() >= 90) && (this.getRotate() < 135) ) {
        this.setRotate(this.getRotate() + 1);
    }

};


/**
 * Rotaciona para cima
 * @method
 */
MultDirections.prototype.turnToUp = function () {

    if(( this.getRotate() <= 360) && ( this.getRotate() > 315)) {
        this.setRotate(this.getRotate()-1);
    }else if((this.getRotate() >= 180) && ( this.getRotate() < 225)){
        this.setRotate(this.getRotate()+1);
    }
}


/**
 * Rotaciona para baixo
 * @method
 */
MultDirections.prototype.turnToDown = function () {

    if(  (this.getRotate() == 360) || ( ( this.getRotate() > 0) ) && ( this.getRotate() < 45) )  {
       this.setRotate(this.getRotate()+1);
   }else if((this.getRotate() <= 180) && ( this.getRotate() >  135)){
        this.setRotate(this.getRotate()-1);
    }
}/**
 * Essa classe é responsável pelo armazenamento do dados
 * @class
 */
ManagerStorage = function () {}

/**
 * Salva um item e seu valor
 * @param {string} itemname - nome do item a ser salvo
 * @param {string} value - valor do item
 */
ManagerStorage.prototype.setItem = function(itemname, value){
    localStorage.setItem(itemname, value);
};
/**
 * Obtém o valor de um item
 * @param {string} itemname - nome do item a ser salvo
 * @return {string}
 */
ManagerStorage.prototype.getItem = function(itemname){
    return localStorage.getItem(itemname);
};


/**
 * Salva um item e seu valor
 * @param {string} itemname - nome do item a ser salvo
 * @param {JSON} value - valor do item em JSON
 */
ManagerStorage.prototype.setItemJSON = function(itemname, value){
        localStorage.setItem(itemname, JSON.stringify(value));
};

/**
 * Obtém o valor de um item mem JSON
 * @param {string} itemname - nome do item a ser salvo
 * @return {JSON}
 */
ManagerStorage.prototype.getItemJSON = function(itemname, value){
        return JSON.parse(localStorage.getItem(itemname));
};

/**
 * Essa classe é responsável pelo carregamento de arquivos
 * @class
 * @param {function} callback - função chamada após o corregamento
 */
function ManagerLoader(callback) {
    //list of assets
    this.folder = "assets/";
    this.starterfolder = "resource/";
    this.assetsList = [];
    this.assetsListLoaded = [];
    this.checkAssetsList =0;
    this.callback = callback;
}

/**
 * Adiciona resouce na lista de carregamento
 * @method
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 * @param {string} type - Tipo do resorce (imagem, som)
 */
ManagerLoader.prototype.addResource = function (name, resource, type) {
    this.assetsList.push([name, resource, type,"user"]);
}

/**
 * Adiciona os resources nativos do starter
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 * @param {string} type - Tipo do resorce (imagem, som)
 */
ManagerLoader.prototype.addStarterResource = function (name, resource, type) {
    this.assetsList.push([name, resource, type,"starter"]);
}


/**
 * Adiciona um arquivo de imagem na lista de carregamento
 * @method
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 */
ManagerLoader.prototype.addImage = function (name, resource) {
    this.assetsList.push([name, resource, "image","user"]);
}



/**
 * Adiciona um arquivo de audio na lista de carregamento
 * @method
 * @param {string} name - nome do resource
 * @param {Object} resource - Objeto do resource
 */
ManagerLoader.prototype.addAudio = function (name, resource) {
    this.assetsList.push([name, resource, "audio","user"]);
}



/**
 * Carrega todos os recourses
 * @method
 */
ManagerLoader.prototype.loading = function( ){

    if(this.assetsList.length == 0 ) {
        this.print(0.99);
        setTimeout(this.callback, 2000);
        return;
    }

    //console.log(this.assetsList);
    for(var i = 0; i < this.assetsList.length; i++){

        //se for do tipo imagem
		if(this.assetsList[i][2] == "image"){

            this.assetsListLoaded.push(new Image());
            var img = this.assetsListLoaded[this.assetsListLoaded.length-1];

            img.onload = function(){
                //incrementa o contado
                this.checkAssetsList++;
                //se o contatdo for igual ao tamanho dos assets a serem carregados
                if(this.checkAssetsList == this.assetsList.length ){
                    this.print();
                    setTimeout(this.callback, 2000);
                }else{
                    this.print();
                }
            }.bind(this);

            //call src of assets
            if(this.assetsList[i][3] == "user")
                img.src = this.folder+this.assetsList[i][1];
            else
                img.src = this.starterfolder+this.assetsList[i][1];

        //se for do tipo som
		} else if(this.assetsList[i][2] == "audio"){

		    var audio = null;

            var onload = function(){

                //incrementa o contador
                this.checkAssetsList++;
                //se o contatdo for igual ao tamanho dos assets a serem carregados
                if(this.checkAssetsList == this.assetsList.length ){
                    this.print();
                    setTimeout(this.callback, 2000);
                }else{
                    this.print();
                }
            }.bind(this);


            //call src of assets
            if(this.assetsList[i][3] == "user")
                audio = new Howl({ src: [this.folder+this.assetsList[i][1] ], onload: onload} );
            else
                audio = new Howl({ src: [this.starterfolder+this.assetsList[i][1]], onload: onload});

            this.assetsListLoaded.push(audio);


        }else if(this.assetsList[i][2] == "text"){

            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", this.folder+this.assetsList[i][1] , false);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var allText = rawFile.responseText;
                        this.assetsListLoaded.push(allText.split("\n"));
                        //incrementa o contador
                        this.checkAssetsList++;

                        if(this.checkAssetsList == this.assetsList.length ){
                            this.print();
                            setTimeout(this.callback, 2000);
                        }else{
                            this.print();
                        }

                    }else{
                        console.log("erro")
                    }
                }
            }.bind(this);

            rawFile.send(null);

		}else if(this.assetsList[i][2] == "csv"){

            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", this.folder+this.assetsList[i][1] , false);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        var arrayCSV = [];
                        var lineCSV = null;

                        var allText = rawFile.responseText;

                        //brake by line
                        lineCSV = allText.split("\n");

                        lineCSV.forEach(function (t) {
                            //break by ;
                            arrayCSV.push(t.split(";"));
                        });

                        this.assetsListLoaded.push(arrayCSV);

                        //incrementa o contador
                        this.checkAssetsList++;

                        if(this.checkAssetsList == this.assetsList.length ){
                            this.print();
                            setTimeout(this.callback, 2000);
                        }else{
                            this.print();
                        }

                    }
                }
            }.bind(this);

            rawFile.send(null);
    }else if(this.assetsList[i][2] == "xml"){

            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", this.folder+this.assetsList[i][1] , false);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {

                        var parser = new DOMParser();
                        var xmlDoc = parser.parseFromString(rawFile.responseText,"text/xml");
                        this.assetsListLoaded.push(xmlDoc);

                        this.checkAssetsList++;

                        if(this.checkAssetsList == this.assetsList.length ){
                            this.print();
                            setTimeout(this.callback, 2000);
                        }else{
                            this.print();
                        }

                    }else{
                        console.log("erro")
                    }
                }
            }.bind(this);

            rawFile.send(null);



    }




    }




}

/**
 * Obtém um resource pelo nome
 * @param {string} name - nome do resouce
 * @returns {Object}
 */
ManagerLoader.prototype.getAssets = function(name){

    var returning = null;
    for(var i=0; i< this.assetsList.length; i++){
        if(this.assetsList[i][0] == name)
            returning = this.assetsListLoaded[i];
    }

    return returning;

}


/**
 * Imprime o carregamento na tela inicial
 * @method
 */
ManagerLoader.prototype.print = function(porcent){
    var porcentload = 0;

    if(porcent!=undefined)
        porcentload = porcent;
    else
        porcentload = ((this.checkAssetsList * 100)/this.assetsList.length)/100;

    if(porcentload==1)
        porcentload = 0.99;

	barsize = 600;

    ctx.fillStyle="#008080ff";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.strokeStyle="#FFFFFF";
    ctx.beginPath();

    x = canvas.width/2 - 160;
    y = canvas.height/2 + 200

	x = canvas.width/2 - barsize/2;
    y = canvas.height/2 + 200
	
    ctx.moveTo(x,y);
    ctx.lineTo(x+barsize, y);
    ctx.quadraticCurveTo(x+barsize+10,y+15, x+barsize,y+30 );
    ctx.lineTo(x, y+30);
    ctx.quadraticCurveTo(x-10, y+15, x, y);
    ctx.stroke();

    x +=5;
    y +=5;

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo( porcentload* x+barsize-5, y);
    ctx.lineTo(porcentload* x+barsize-5, y+20);
    //ctx.quadraticCurveTo(x+300,y+10, x+290,y+20 );
    ctx.lineTo(x, y+20);
    ctx.quadraticCurveTo(x-10, y+10, x, y);

    ctx.fillStyle="#FFFFFF";
    ctx.fill();

    img = document.getElementById("logohtml");
    ctx.drawImage(img,canvas.width/2 - 150, canvas.height/2 - 220, 300, 350);

    ctx.font="15px Verdana";
    text = parseInt(porcentload*100)+"%";
    ctx.textAlign="center";
    ctx.fillText("Loaded "+text, canvas.width/2 , canvas.height/2 + 250);

}

/**
 * Essa classe é responsável pela entrada de teclado
 * @class
 */
function ManagerInputs() {
    /**
     * Flag da tecla direita
     * @type {boolean}
     */
    this.DIREITA = false;
    /**
     * Flag da tecla esquerda
     * @type {boolean}
     */
    this.ESQUERDA = false;
    /**
     * Flag da tecla cima
     * @type {boolean}
     */
    this.CIMA  = false;
    /**
     * Flag da tecla baixo
     * @type {boolean}
     */
    this.BAIXO = false;
    /**
     * Flag da tecla espaço
     * @type {boolean}
     */
    this.ESPACO =  false;

    this.start();
}

/**
 * Inicia a captura do teclado
 * @method
 */
ManagerInputs.prototype.start = function () {

    document.addEventListener('keydown', function(evento) {
        if (evento.keyCode == 38) { // Seta para esquerda
            this.CIMA = true;
        }

        if (evento.keyCode == 40) { // Seta para esquerda
            this.BAIXO  = true;
        }

        if (evento.keyCode == 37) { // Seta para esquerda
           this.ESQUERDA  = true;
        }

        if (evento.keyCode == 39) { // Seta para direita
            this.DIREITA = true;
        }

        if (evento.keyCode == 32) { // Seta para direita
            this.ESPACO  = true;
        }

    }.bind(this))


    document.addEventListener('keyup', function(evento) {

            if (evento.keyCode == 38) { // Seta para esquerda
                this.CIMA = false;
            }

            if (evento.keyCode == 40) { // Seta para esquerda
                this.BAIXO  = false;
            }

            if (evento.keyCode == 37) { // Seta para esquerda
                this.ESQUERDA = false;
            }

            if (evento.keyCode == 39) { // Seta para direita
                this.DIREITA  = false;
            }

        if (evento.keyCode == 32) { // Seta para direita
            this.ESPACO  = false;
        }

        }.bind(this))

}

/**
 * Verifica se a tecla está ou não pressionada
 * @method
 * @param {string} key - tecla
 * @return {boolean} true se a tecla está pressionada
 */
ManagerInputs.prototype.getKey = function (key) {


    if (key == "UP") {
        return this.CIMA;
    } else if (key == "DOWN") {
        return this.BAIXO;
    } else if (key == "RIGHT") {
        return this.DIREITA;
    }
    if (key == "LEFT") {
        return this.ESQUERDA;
    }

}/**
 * Essa classe é responsável pela entrada do mouse
 * @class
 */
function ManagerMouse() {
    this.start();
    this.x = 0;
    this.y = 0;
}

/**
 * Configura o estado inicial do mouse
 */
ManagerMouse.prototype.start = function () {
    var _this = this;
	
		
	canvas.addEventListener('touchstart', function(event) {
		
		 var x = event.targetTouches[0].pageX - canvas.offsetLeft,
            y = event.targetTouches[0].pageY - canvas.offsetTop;

        var objects = se.mlevel.getObjectsCurrentScene();
		
		for(var i = 0; i < objects.length; i++) {
		element = objects[i];

		if (element.classename == "mbutton") {
			if (y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w) {
				element.click();
				break;
			}

		}

		}


		  
	});




    canvas.addEventListener('click', function(event) {

        var x = event.pageX - canvas.offsetLeft,
            y = event.pageY - canvas.offsetTop;
			
        var objects = se.mlevel.getObjectsCurrentScene();
        var tutorial = se.mlevel.getTutorialCurrentScene();
		
        for(var i = 0; i < objects.length; i++) {
            element = objects[i];

			if ((element.classename == "dragdrop") && (!element.dragdroped)){

				if (y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w) {
					element.click();
					break;
				}

			} else if (element.classename == "button") {
				if (y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w) {
					element.click();
					break;
				}

			}

            if(i == objects.length-1){
                se.mlevel.offDragdropFlag();
            }

        };
		
		if(tutorial!=undefined)
			for(var i = 0; i < tutorial.length; i++) {
				element = tutorial[i];

			if ((element.classename == "dragdrop") && (!element.dragdroped)){

				if (y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w) {
					element.click();
					break;
				}

			} else if (element.classename == "button") {
				
				
				if (y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w) {
					element.click();
					break;
				}

			}

				if(i == tutorial.length-1){
					se.mlevel.offDragdropFlag();
					console.log("off")
				}

			}
		
		

    }, false);


    canvas.addEventListener('mousemove', function(event) {

        _this.x = event.pageX - canvas.offsetLeft;
        _this.y = event.pageY - canvas.offsetTop;

        var objects = se.mlevel.getObjetcsMovimentMouse();

        for(var i = 0; i < objects.length; i++) {
            objects[i].moveMouse(_this.x, _this.y);

        }


        }, false);
}


/**
 * Obtém a posição x e y do mouse
 * @return {{x: *, y: *}} - posição x e y
 */
ManagerMouse.prototype.getMousePosition = function () {
    return {x: this.x, y:this.y}
}

/**
 * Obtém a posição x do mouse
 * @return {int}  x - posição x do mouse
 */
ManagerMouse.prototype.getMouseX = function () {
    return this.x;
}

/**
 * Obtém a posição y do mouse
 * @return {int}  y - posição y do mouse
 */
ManagerMouse.prototype.getMouseY = function () {
    return this.y;
}/**
 * @class
 * @classdesc Essa classe é reponsável por controlar os Scene
 */
function ManagerScene() {
    /**
     * Nome do jogador
     * @public
     * @type {string}
     */
    this.nameplayer = "";
    /**
     * Indice do nivel atual do jogo
     * @public
     * @type {int}
     */
    this.currentScene =-1;
    /**
     * Array de Scene
     * @type {Array}
     */
    this.scenes = [];
    /**
     * Score (pontos) do jogador
     * @type {number}
     */
    this.score = 0;

    this.objectsMovimentMouse = [];

}

/**
 * Adiciona o Level no array de scenes
 * @method
 * @param {Scene} level - Uma isntância de um level
 */
ManagerScene.prototype.addScene =function (level) {
    this.scenes.push(level);
	
	if(level.isActive){
		this.currentScene = this.scenes.length-1;
	}
	
}

/**
 * Carrega um determinado level
 * @method
 * @param {int} index
 */
ManagerScene.prototype.loadScene =function (index) {
    this.currentScene = index;
	this.scenes[this.currentScene].setActive(true);
    this.getCurrentScene().setObjects([]);
    this.getCurrentScene().startFunction();
}

/**
 * Carrega o próximo level, seguindo a ordem do array de scenes
 * @method
 */
ManagerScene.prototype.nextScene =function () {
    this.currentScene++;
    this.getCurrentScene().setObjects([]);
    this.getCurrentScene().startFunction();
}

/**
 * Carrega o level anterior, seguindo a ordem do array de scenes
 * @method
 */
ManagerScene.prototype.priorScene =function () {
    this.currentScene--;
    this.getCurrentScene().setObjects([]);
    this.getCurrentScene().startFunction();
}

/**
 * Obtém o level atual
 * @method
 * @returns {*}
 */
ManagerScene.prototype.getCurrentScene = function () {
    return this.scenes[this.currentScene];
}

/**
 * Limpa o canvas e chama a função print do level atual
 * @method
 */
ManagerScene.prototype.print = function () {
  if(this.scenes[this.currentScene].clean) {
      ctx.save()
      ctx.setTransform(1,0,0,1,0,0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
  }
    this.scenes[this.currentScene].print(ctx);
}

/**
 * Obtém um level segundo o index
 * @method
 * @param index
 * @returns {Scene}
 */
ManagerScene.prototype.getScene = function (index) {
    return this.scenes[index];
}



/**
 * Obtém os objetos de um determinado level
 * @method
 * @param index
 * @returns {Array|*}
 */
ManagerScene.prototype.getObjectByScene = function (index) {
    return this.scenes[index].getObjects();
}

/**
 * todo precisa documentar
 */
ManagerScene.prototype.getObjectsCurrentScene = function () {
    if(this.currentScene != -1)
        return this.scenes[this.currentScene].getObjects();
    else
        return [];
}




/**
 * todo precisa documentar
 */
ManagerScene.prototype.getTutorialCurrentScene = function () {
    if(this.currentScene != -1)
        return this.scenes[this.currentScene].getTutorial();
    else
        return [];
}


/**
 * Remove um objeto no level em que ele foi criado
 * @method
 * @param object
 */
ManagerScene.prototype.removeObject = function (object) {
    this.getObjectByScene(object.linklevel).splice(this.getObjectByScene(object.linklevel).indexOf(object), 1);
}



/**
 * Adiciona um ponto ao score (ponto)
 * @method
 */
ManagerScene.prototype.addScore = function(scorename){
    objs = this.getObjectByScene(this.currentScene);
    for(var i=0; i< objs.length; i++){
        if(objs[i].name == scorename){
            objs[i].score++;
        }
    }
    //this.score++;
}


ManagerScene.prototype.printTutorial = function(){
	
    this.scenes[this.currentScene].printTutorial(ctx);
}

/**
 * Chamado quando ocorre o Game Over
 * @method
 */
ManagerScene.prototype.gameOver = function () {
    scores = se.storage.getItemJSON("score1");

    for(var i = 0; i< scores.length; i++){
        if(scores[i].score < this.score) {
           
            scores[i].name = this.nameplayer;
            scores[i].score = this.score;
            se.storage.setItemJSON("score1",  scores);
            break;
        }
    };

    this.loadScene(0);
}

/**
 * Desativa todos dragdrops do level
 * @method
 */
ManagerScene.prototype.offDragdropFlag = function () {
    var elements = this.getObjectsCurrentScene();
    for(var i=0; i<elements.length; i++){
        if (elements[i].classename == "dragdrop")
            elements[i].dragdroped = false;
    }
}

/**
 *
 * @return {*}
 */
ManagerScene.prototype.getObjetcsMovimentMouse = function () {
    return this.objectsMovimentMouse;
};

/**
 *
 * @return {Array}
 */
ManagerScene.prototype.clearObjetcsMovimentMouse = function () {
    return this.objectsMovimentMouse;
};

/**
 *
 * @param element
 */
ManagerScene.prototype.addObjetcsMovimentMouse = function (element) {
    this.objectsMovimentMouse.push(element);
};


/**
 * Cria um novo inimigo com uma aceleração maior
 * @method
 * @param {float} aceleration
 */
ManagerScene.prototype.createNewEnemy = function (aceleration) {
    enemy = new Enemy("enemyred", Math.random()*500, -50, "enemy");
    enemy.aceleration = aceleration + 0.2;
    this.scenes[this.currentScene].objects.push(enemy);
}

/**
 * @method
 * Remove o inimigo do jogo, adiciona score e cria um novo inimigo
 * @param {GameObject }object
 */
ManagerScene.prototype.killEnemy = function (object) {
    this.addScore("score");
    this.removeObject(object);
    this.createNewEnemy(object.aceleration);
}

/**
 * @class
 * @classdesc Representa um Butão.
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {funcition} Callback - função chamada no click
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 */
function Button(sprite, x, y, callback, w, h, r, z){
	
    this.classename = "button";
    GameObject.call(this, sprite, x, y, "button", h,w, r, z);

    if(callback!= undefined) {
        this.clickFunction = callback;
    }else{
        this.clickFunction  = function () {console.warn("Esse objeto não possui uma clickFunction")}
    }

}

Button.prototype = Object.create(GameObject.prototype);


/**
 * Chama a função estipulado quando há o clique
 * @method
 * @name Button.click
 */
Button.prototype.click = function(){
    if(this.clickFunction != undefined)
        this.clickFunction();
}

/**
 * Atribui uma função à função de clique do botão
 * @method
 * @param {function} fn - função de clique
 */
Button.prototype.setClick = function(fn){
    this.clickFunction = fn;
}



/**
 * @class
 * @classdesc Representa um Butão Mobile.
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {funcition} Callback - função chamada no click
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 */
function MButton(sprite, x, y, callback, w, h, r, z){
	
    this.classename = "mbutton";
    GameObject.call(this, sprite, x, y, "mbutton", h,w, r, z);

    if(callback!= undefined) {
        this.clickFunction = callback;
    }else{
        this.clickFunction  = function () {console.warn("Esse objeto não possui uma clickFunction")}
    }

}

MButton.prototype = Object.create(GameObject.prototype);


/**
 * Chama a função estipulado quando há o clique
 * @method
 * @name Button.click
 */
MButton.prototype.click = function(){
    if(this.clickFunction != undefined)
        this.clickFunction();
}


/**
 * Representa um elemento dragdrop
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function DragDrop(sprite, x, y, callback, w, h){
    this.classename = "dragdrop";
    GameObject.call(this, sprite, x, y, "dragdrop", h,w);
    if(callback!= undefined)
        this.targetFunction = callback;
    else
        this.targetFunction = function (){ console.warn("esse objeto não possui uma targetFunction!")};

    this.dragdroped = false;
    this.xoffset = 0;
    this.yoffset = 0;
}


DragDrop.prototype = Object.create(GameObject.prototype);

/**
 * Atualiza o dragdrop
 * @method
 */
DragDrop.prototype.print = function(){

    if(this.dragdroped){
        var alfa = ctx.globalAlpha;
        ctx.globalAlpha = 0.4;
        this.x = se.mmouse.getMouseX()+ this.xoffset;
        this.y = se.mmouse.getMouseY()+ this.yoffset;
        ctx.drawImage(this.sprite, this.x , this.y , this.w, this.h);
        ctx.globalAlpha = alfa;
    }else{
        ctx.drawImage(this.sprite, this.x , this.y , this.w, this.h);
    }
}

/**
 * Controla o modo dragdrop, conforme o clique do mouse
 * @method
 */
DragDrop.prototype.click = function(){

    if(this.dragdroped){
        this.dragdroped  = false;
        this.xoffset = 0;
        this.yoffset = 0;

    }else{
        //
        this.dragdroped = true;
        this.xoffset = this.x - se.mmouse.getMouseX();
        this.yoffset = this.y - se.mmouse.getMouseY();
    }


}

/* Função alvo do dragdrop, chamada por algum evento
* @method
*/
DragDrop.prototype.target = function(){
    this.targetFunction();
}

/* Atribue a função à função alvo do dragdrop
* @method
* @param {function} fn - função alvo
*/
DragDrop.prototype.setTarget = function(fn){
    this.targetFunction = fn;
}
/**
 * Representa um elemento de entrada de texto pelo usuário
 * @extends GameObject
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {string} color - Cor da font
 * @param {int} size - Tamanho da Font
 * @param {string} font - Nome da Font
 * @constructor
 */
function InputText(x, y, color, size, font) {
    GameObject.call(this,undefined, x,y, "gui");
    this.text = "";
    this.color = "#FFF";
    this.size = "10";
    this.size = "Arial";
    this.isfocus = true;

    if(color != undefined)
        this.color = color;
    if(size != undefined)
        this.size = size
    if(font != undefined)
        this.font = font;

    this.textaling = "start";

    this.blocked = false;
    this.maxsize = 100;
    this.z = 100;

    this.start();


}

InputText.prototype = Object.create(GameObject.prototype);


/**
 * Inicia a captura do teclado - é chamado no construtor
 * @method
 */
InputText.prototype.start = function() {
    document.addEventListener('keydown', function(evento) {

        if(!this.blocked) {
            this.blocked = true;
            if (event.keyCode == 8) {
                this.text = this.text.slice(0, -1);
                return;
            } else if (((event.keyCode >= 65 ) && (event.keyCode < 90) ) || ((event.keyCode >= 97 ) && (event.keyCode < 122))){
                this.text += String.fromCharCode(evento.keyCode);
            }
        }
    }.bind(this));

    document.addEventListener('keyup', function(evento) {
        this.blocked = false;
    }.bind(this));
};

/**
 * Imprime o texto de entrada
 * @override
 */
InputText.prototype.print = function() {

    ctx.textAlign= this.textaling;
    ctx.fillStyle = this.color;
    ctx.font = this.size+"px "+this.font;
    ctx.fillText(this.text, this.x, this.y);

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + 2);
    ctx.lineTo(this.x + this.maxsize, this.y + 2);

    ctx.stroke();
}

/**
 * Atribui um texto
 * @param {string} text - texto de entrada
 */
InputText.prototype.setText = function (text) {
    this.text = text;
}

/**
 * Estipula um tamanho máximo para o texto
 * @param {int} maxsize - tamanho máximo
 */
InputText.prototype.setMaxSize = function(maxsize) {
    this.maxsize = maxsize;
}


InputText.prototype.setText = function(text) {
    this.text = text;

}

InputText.prototype.setAling = function(aling) {
    this.textaling = aling;
}


InputText.prototype.toCenter = function(aling) {
    this.textaling = "center";
}


InputText.prototype.toEnd = function(aling) {
    this.textaling = "end";
}


InputText.prototype.toStart = function(aling) {
    this.textaling = "start";
}

InputText.prototype.toLeft = function(aling) {
    this.textaling = "left";
}


InputText.prototype.toRight = function(aling) {
    this.textaling = "right";
}

InputText.prototype.setMaxSize = function( maxsize ){
    this.maxsize = maxsize;
}
/**
 * Representa um objeto do tipo Score - um elemento como imagem e texto ao lado
 * @param {string} name - nome do score
 * @param {Sprite} sprite - image do score
 * @param {int} x - posição x
 * @param {int} y - posicao y
 * @constructor
 */
Score = function (name, sprite, x, y)  {
    this.name = name;
    this.score = 0;
    this.alttext = text;

    this.sprite = null;
    this.text = null;

    this.sprite = new GameObject(sprite, x, y, "guiscore");
    this.text = new Text(this.score, x + this.sprite.getWidth() +10 , y + this.sprite.getHeight()/2);
}

/**
 * Atualiza o score
 * @method
 */
Score.prototype.update = function () {};

/**
 * Exibe o score
 * @method
 */
Score.prototype.print = function () {
    this.text.setText(this.score)
    this.text.print();
    this.sprite.print();
}/**
 * Representa um texto estático
 * @extends GameObject
 * @param {string} text - Texto
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {string} color - Cor da font
 * @param {int} size - Tamanho da Font
 * @param {string} font - Nome da Font
 * @extends GameObject
 * @constructor
 */
function Text(text, x, y, color, size, font, fn) {

    GameObject.call(this,undefined, x,y, "gui");

    this.text = text;
    this.color = "#FFF";
    this.size = "20";
    this.font = font?font:"Arial";

    if(color != undefined)
        this.color = color;
    if(size != undefined)
        this.size = size;
    if(font != undefined)
        this.font = font;

    this.z = 100;

    this.callback = function () {};

    if(fn != undefined)
        this.callback = fn;

    this.textaling = "start";

}

Text.prototype = Object.create(GameObject.prototype);

/**
 * Imprime o texto
 * @method
 * @override
 */
Text.prototype.print = function() {
	
	if(this.isshow){
		ctx.textAlign=  this.textaling;
		ctx.fillStyle = this.color;
		ctx.font = this.size+"px "+this.font;
		ctx.fillText(this.text, this.x, this.y);
	}
}

/**
 * Configura o texto
 * @method
 * @param {string} text - texto para ser exibido
 */
Text.prototype.setText = function(text) {
    this.text = text;

}

/**
 * Configura alinhamento
 * @method
 * @param {string} aling - pode ser start, center, end, left ou right
 */
Text.prototype.setAling = function(aling) {
    this.textaling = aling;
}

/**
 * Configura o alinhamento para o centro
 */
Text.prototype.toCenter = function() {
    this.textaling = "center";
}

/**
 * Configura o alinhamento para o final
 */
Text.prototype.toEnd = function() {
    this.textaling = "end";
}


/**
 * Configura o alinhamento para o início
 */
Text.prototype.toStart = function() {
    this.textaling = "start";
}

/**
 * Configura o alinhamento para a esquerda
 */
Text.prototype.toLeft = function() {
    this.textaling = "left";
}

/**
 * Configura o alinhamento para a direita
 */
Text.prototype.toRight = function() {
    this.textaling = "right";
}
/**
 * Esta classe é uma versão do Turtle, criado por Seymour Papert.
 * @constructor
 */
function Turtle() {
    /**
     * Coordenada x do Trutle
     * @type {number}
     */
    this.x = canvas.width/2;
    /**
     * Coordenada y do Turtle
     * @type {number}
     */
    this.y = canvas.height/2;

    /**
     * Espessura da linha
     * @type {number}
     */
    this.linew = 1;

    //this.direction = 0;
    /**
     * Controla se o Turtle risca no chão
     * @type {boolean}
     */
    this.pendown = true;

    this.penolddown = true;
    /**
     * Pilha de movimentos e comandos
     * @type {Array}
     */
    this.stakemoviment = [];


    /**
     * Pilha das linhas e comando anteriores
     * @type {Array}
     */
    this.stakealdlines = [];


    /**
     * Armazena a quantidade de passo do movimento atual
     * @type {number}
     */
    this.stepcurrent = 0;
    /**
     * Velocidade do Turtle;
     * @type {number}
     */
    this.velocity = 10;

    /**
     * Controla se existe um novo comando na pilha
     * @type {boolean}
     */
    this.isnewcommand = true;

    /**
     * Cor da linha
     * @type {string}
     */
    this.color = {r:0, g:0, b:0};

    /**
     * Imagem do turtle
     * @type {Image}
     */
    this.imgturtle = new GameObject([new Animation(["turtle"])], 0,0, "turtle", 40,40);

    /**
     * Guarda a ultima cor para o comando mude cor por
     * @type {string}
     */
    this.lastcolor = "";

    /**
     * Guarda a direção da mudança da cor para o comando mude cor por
     * @type {boolean}
     */
    this.changecolorup = true;

    //self add in currente level (test)
    se.mlevel.getCurrentScene().addObjects(this);
}

/**
 * Muda o modo de pintura no chão para ativo
 */
Turtle.prototype.penDown= function() {
    this.stakemoviment.push([0, "pendown"]);
};

/**
 * Muda o modo de pintura no chão para inativo
 */
Turtle.prototype.penUp= function() {
    this.stakemoviment.push([0, "penup"]);
};

/**
 * Muda o tom do caminho por uma cor determinada
 * @param {int} value - valor para mudança da cor
 */
Turtle.prototype.changeToneFor = function (value) {


    this.color.r += value;
    this.color.g += value;
    this.color.b += value;

    if(this.color.r > 255)
        this.color.r = this.color.r - 255;

    if(this.color.g > 255)
        this.color.g = this.color.g - 255;

    if(this.color.b > 255)
        this.color.b = this.color.b - 255;

    this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"]);
};


/**
 * Muda a cor do caminho para uma cor determinada
 * @param {int} r - valor do vermelho
 * @param {int} g - valor do verde
 * @param {int} b - valor do azul
 */
Turtle.prototype.changeColorTo = function (r,g,b) {


    if((g==undefined) && (b==undefined))
        this.color = r;
    else
        this.color = {r:r, g:g, b:b};

    if(this.color.r > 255)
        this.color.r = this.color.r - 255;

    if(this.color.g > 255)
        this.color.g = this.color.g - 255;

    if(this.color.b > 255)
        this.color.b = this.color.b - 255;

    this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"]);
};


/**
 * Muda a cor do caminho por uma valor determinado
 * @param {int} value - valor da mudança
 */
Turtle.prototype.changeColorFor = function (value) {


    if(this.changecolorup) {

        if (( this.lastcolor != "r") && (this.color.r != 255) ) {

            this.color.r += value;

            if (this.color.r > 255) {
                this.color.r = 255;
                this.lastcolor = "r";
            }
        } else if (( this.lastcolor != "g") && (this.color.g != 255)) {

            // console.log(this.lastcolor ,this.color.r );

            this.color.g += value;

            if (this.color.g > 255) {
                this.color.g = 255;
                this.lastcolor = "g";
            }
        } else if (( this.lastcolor != "b") && (this.color.b != 255) ) {

            this.color.b += value;
            if (this.color.b > 255) {
                this.color.b = 255;
                this.lastcolor = "b";
            }

        }

        if ((this.color.r == 255) && (this.color.g == 255) && (this.color.b == 255)) {
            this.changecolorup = false;
        }
    }else{

        if (( this.lastcolor != "r") && (this.color.r != 0)) {

            this.color.r -= value;
            if (this.color.r < 0) {
                this.color.r = 0;
                this.lastcolor = "r";
            }
        } else if (( this.lastcolor != "g") && (this.color.g != 0)) {

            // console.log(this.lastcolor ,this.color.r );

            this.color.g -= value;

            if (this.color.g < 0) {
                this.color.g = 0;
                this.lastcolor = "g";
            }
        } else if (( this.lastcolor != "b") && (this.color.b != 0)) {

            this.color.b -= value;

            if (this.color.b < 0) {
                this.color.b = 0;
                this.lastcolor = "b";
            }

        }

        if ((this.color.r == 0) && (this.color.g == 0) && (this.color.b == 0)) {
            this.changecolorup = true;
        }

    }



    this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"]);
};



/**
 * Muda o tamanho do caminho para um valor determinado
 * @param {int} size - tamanho do caminho
 */
Turtle.prototype.changeSizeTo = function (size) {
   this.linew = size;
    this.stakemoviment.push([this.linew ,"changesize"]);
};

/**
 * Muda o tamanho do caminho por um valor determinado (soma)
 * @param {int} size - tamanho do caminho
 */
Turtle.prototype.changeSizeFor = function (size) {
    this.linew += size;
    this.stakemoviment.push([this.linew ,"changesize"]);
};


Turtle.prototype.print= function() {};

/**
 * Limpa a tela
 */
Turtle.prototype.clean= function() {
    this.stakemoviment.push([this.stakemoviment.length ,"clean"]);
};

/**
 * Faz o Turtle andar para frente
 * @param {int} steps - Quantidade de passos
 */
Turtle.prototype.forward = function(steps) {
   this.stakemoviment.push([steps, "forward"]);
}

/**
 * Faz o Turtle andar para trás
 * @param {int} steps - Quantidade de passos
 */
Turtle.prototype.back = function(steps) {
    this.stakemoviment.push([steps, "back"]);
}

/**
 * Rotadiona o Turtle pela esquerda
 * @param {int} angle - Ângulo de inclinação
 */
Turtle.prototype.left = function(angle) {
    this.stakemoviment.push([-angle, "left"]);
}

/**
 * Rotaciona o Turtle pela direita
 * @param {int} angle - Ângulo de inclinação
 */
Turtle.prototype.right= function(angle) {
    this.stakemoviment.push([angle, "right"]);
}


/**
 * Desenha as linhas atuais
 * @override
 */
Turtle.prototype.update = function () {

    this.pintaldline();


    //for any commando
    if(this.stakemoviment.length > 0){

        movetox = this.x;
        movetoy = this.y;

        if(this.stakemoviment[0][1] == "pendown"){
            this.stakealdlines.push( this.stakemoviment[0] );
            this.pendown = true;
            this.stakemoviment.splice(0,1);

            //return;
        }else if(this.stakemoviment[0][1] == "penup") {
            this.stakealdlines.push(this.stakemoviment[0]);
            this.pendown = false;
            this.stakemoviment.splice(0, 1);

            //return;

        }else  if(this.stakemoviment[0][1] == "changecolor") {
            this.stakealdlines.push(this.stakemoviment[0]);
            this.stakemoviment.splice(0, 1);

            //return;

        }else if (this.stakemoviment[0][1] == "changesize") {

            this.stakealdlines.push(this.stakemoviment[0]);
            this.stakemoviment.splice(0, 1);

            //return;

        }else if (this.stakemoviment[0][1] == "clean") {
            this.stakealdlines.push( this.stakemoviment[0] );
            this.stakemoviment.splice(0, 1);

            //return;

        }else if((this.stakemoviment[0][1] == "right") || (this.stakemoviment[0][1] == "left") ){
            this.stakealdlines.push( [ this.stakemoviment[0][0], this.stakemoviment[0][1], movetox, movetoy ]);
            ctx.translate(movetox, movetoy);
            ctx.rotate( this.stakemoviment[0][0] * Math.PI / 180);
            ctx.translate(-movetox, - movetoy);
            this.stakemoviment.splice(0,1);

            //return;

        }else if ((this.stakemoviment[0][1] == "forward") || (this.stakemoviment[0][1] == "back") ){

            if(this.stakemoviment[0][1] == "forward")
                this.y-= this.velocity;
            else if(this.stakemoviment[0][1] == "back")
                this.y+= this.velocity;

            this.stepcurrent+= this.velocity;


            if(this.pendown) {

                ctx.beginPath();
                ctx.moveTo(movetox,  movetoy);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = "rgb("+this.color.r+","+this.color.g+","+this.color.b+")";
                ctx.stroke();
                ctx.closePath();
            }

            //if coount is equal or more of steps
            if(this.stepcurrent >= this.stakemoviment[0][0]){
                this.stakemoviment.splice(0,1);
                this.stepcurrent = 0;
                this.stakealdlines[this.stakealdlines.length - 1][2] = this.x;
                this.stakealdlines[this.stakealdlines.length - 1][3] = this.y;

                this.isnewcommand = true;


            } else{
                //update lines
                if(this.isnewcommand){
                    this.isnewcommand = false;
                    this.stakealdlines.push([movetox, movetoy, this.x, this.y,this.stakemoviment[0][1]]);
                }else{
                    this.stakealdlines[this.stakealdlines.length - 1][2] = this.x;
                    this.stakealdlines[this.stakealdlines.length - 1][3] = this.y;
                }
            }

        }

        this.imgturtle.setPosition( this.x - (this.imgturtle.getWidth()/2), this.y-this.imgturtle.getHeight())
        this.imgturtle.print();

    }
}

/**
 * Desenha as linhas anteriores
 */
Turtle.prototype.pintaldline = function () {
   
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);

    for (var i = 0; i < this.stakealdlines.length; i++) {

        if ( this.stakealdlines[i][1] == "pendown") {
           this.penolddown = true;

            continue;
        } else if (this.stakealdlines[i][1] == "penup") {
            this.penolddown = false;

            continue;

        }else  if(this.stakealdlines[i][1] == "changecolor") {
            ctx.strokeStyle = this.stakealdlines[i][0];

            continue;
        }else if (this.stakealdlines[i][1]  == "changesize") {
            ctx.lineWidth = this.stakealdlines[i][0];

            continue;

        }else if( this.stakealdlines[i][1] == "clean"){

            this.stakealdlines.slice(0, this.stakealdlines[i][0]);

            continue;
        }else if ((this.stakealdlines[i][1] == "right") || (this.stakealdlines[i][1] == "left")) {
            ctx.translate(this.stakealdlines[i][2], this.stakealdlines[i][3]);
            ctx.rotate(this.stakealdlines[i][0] * Math.PI / 180);
            ctx.translate(-this.stakealdlines[i][2], -this.stakealdlines[i][3]);

            continue;

        }else {
            if(this.penolddown) {


                if(this.stakealdlines[i][4] == "forward"){
                    ctx.beginPath();
                    ctx.moveTo(this.stakealdlines[i][0], this.stakealdlines[i][1]);
                    ctx.lineTo(this.stakealdlines[i][2], this.stakealdlines[i][3]);
                    ctx.strokeStyle = this.stroke;
                    ctx.stroke();
                    ctx.closePath();

                }else if(this.stakealdlines[i][4] == "back"){

                    ctx.beginPath();
                    ctx.moveTo(this.stakealdlines[i][2], this.stakealdlines[i][3]);
                    ctx.lineTo(this.stakealdlines[i][0], this.stakealdlines[i][1]);
                    ctx.strokeStyle = this.stroke;
                    ctx.stroke();
                    ctx.closePath();
                }


            }
        }

    }


    if(this.stakemoviment.length == 0){
        this.imgturtle.setPosition( this.x - (this.imgturtle.getWidth()/2), this.y-this.imgturtle.getHeight())
        this.imgturtle.print();
    }


    ctx.restore();

}
/**
 * Representa um Círculo
 * @extends Geometric
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} r - Raio do círculo
 * @constructor
 */
function Circle(x, y, r, fill, stroke) {

    Geometric.call(this, x, y, "rect", undefined, undefined, fill, stroke);
    this.radius = r;
}

Circle.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 */
Circle.prototype.print = function() {
    var centreX = this.x + (this.radius / 2);
    var centreY = this.y + (this.radius / 2);

    ctx.save();
	ctx.globalAlpha = this.alpha;
    ctx.translate(centreX, centreY);
    ctx.rotate(this.r * Math.PI / 180);
    ctx.translate(-centreX, -centreY);

    ctx.beginPath();
    ctx.arc(this.x + this.radius/2, this.y + this.radius/2, this.radius, 0, 2*Math.PI);


    if(this.fill != null) {
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    if(this.stroke != null) {
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    }

    ctx.restore();

}

/**
 * Representa um Retângulo
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @param {string} fill - Estilo do preencimento
 * @param {string} stroke - Estilo da borda
 * @constructor
 */
function Rect(x, y, w, h, fill, stroke) {
    Geometric.call(this, x, y, "rect", h, w, fill, stroke);
}


Rect.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 * @extends Geometric
 */
Rect.prototype.print = function() {

    var centreX = this.x + (this.w / 2);
    var centreY = this.y + (this.h / 2);
    ctx.save();
	ctx.globalAlpha = this.alpha;
	
    ctx.translate(this.x + (this.w / 2),this.y + (this.h / 2));
    ctx.rotate(this.r * Math.PI / 180);

    if(this.fill != null) {
        ctx.fillStyle = this.fill;
        ctx.fillRect(-(this.w/2), -(this.h/2), this.w, this.h);
    }

    if(this.stroke != null) {
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.linew;
        ctx.strokeRect(-(this.w / 2), -(this.h / 2), this.w, this.h);
    }

    ctx.restore();
    //ctx.rotate( (-this.r * Math.PI) / 180);
    //ctx.translate( - (this.x + (this.w / 2)), -(this.y + (this.h / 2)));

}

/**
 * Representa um Retângulo
 * @extends Geometric
 * @param {string} sprite - Nome do sprite do botão
 * @param {array} p1 -  Ponto 1
 * @param {array} p2 - Ponto 2
 * @param {array} p3 - Ponto 3
 * @constructor
 */
function Triangle(p1, p2, p3, fill, stroke) {
    Geometric.call(this, p1[0], p1[1], "triangle", undefined, undefined, fill, stroke);
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
}

Triangle.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 * @override
 */
Triangle.prototype.print = function() {

    var centerX = (this.p1[0] + this.p2[0]+this.p3[0])/3;
    var centerY = (this.p1[1] + this.p2[1]+this.p3[1])/3;

    ctx.fillRect(centerX, centerY,10,10)

    ctx.save();
	ctx.globalAlpha = this.alpha;
    ctx.translate(centerX, centerY);
    ctx.rotate(this.r*Math.PI/180);
    ctx.translate(-centerX, - centerY);

    ctx.beginPath();
    ctx.moveTo(this.p1[0],this.p1[1]);
    ctx.lineTo(this.p2[0], this.p2[1]);
    ctx.lineTo(this.p3[0], this.p3[1]);
    ctx.lineTo(this.p1[0], this.p1[1]);

    if(this.fill != null) {
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    if(this.stroke != null) {
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    }

    ctx.restore();

}


/**
 * Translada o objeto
 * @param {int} x - Quantidade de pixels na horizontal
 * @param {int} y - Quantidade de pixels na vertical
 * @override
 */
Triangle.prototype.translate = function(x, y) {
    this.p1[0]+=x;
    this.p2[0]+=x;
    this.p3[0]+=x;

    this.p1[1]+=y;
    this.p2[1]+=y;
    this.p3[1]+=y;
}/**
* Essa classe é responsávl pela leitura de arquivos textos
* @class
*/
function ReaderTextFile(path) {
    this.text = [];
    this.currentLine = 0;

    if(path!=undefined){
        this.text = se.loader.getAssets(path);
    }
}


/**
 * Representa um Retângulo com Borda arredondadas
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @param {string} fill - Estilo do preencimento
 * @param {string} stroke - Estilo da borda
 * @param {int} r - radiano
 * @constructor
 */
function RectRound(x, y, w, h, r, fill, stroke) {

	Geometric.call(this, x, y, "rect round", h, w, fill, stroke);
	this.r = r;
}


RectRound.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 * @extends Geometric
 */
RectRound.prototype.print = function() {

	ctx.beginPath();
	ctx.moveTo(this.x +  this.r, this.y);
	ctx.lineTo(this.x + this.w -  this.r, this.y);

	ctx.quadraticCurveTo(this.x + this.w, this.y, this.x + this.w, this.y +  this.r);
	ctx.lineTo(this.x + this.w, this.y + this.h -  this.r);

	ctx.quadraticCurveTo(this.x + this.w, this.y + this.h, this.x + this.w -  this.r, this.y + this.h);
	ctx.lineTo(this.x +  this.r, this.y + this.h);
 
	ctx.quadraticCurveTo(this.x, this.y + this.h, this.x, this.y + this.h -  this.r);
	ctx.lineTo(this.x, this.y +  this.r);

	ctx.quadraticCurveTo(this.x, this.y, this.x +  this.r, this.y);

	ctx.closePath();
	if(this.fill != undefined){
		ctx.fillStyle = this.fill;
		ctx.fill();
	}
	
	if(this.stroke != undefined){
		ctx.strokeStyle = this.stroke;
		ctx.stroke();
	}

}


/**
 * Ler a próxima linha do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.nextLine = function () {
    return this.text[this.currentLine++];
}

/**
 * Ler a linha atual do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.priorLine = function () {
    return this.text[--this.currentLine];
}

/**
 * Ler uma linha especifica do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.getLine = function (index) {
    if(index < this.text.length)
        return this.text[index];
}


/**
* Essa classe é responsávl pela leitura de arquivos csv
* @class
*/
function ReaderCSVFile(path) {
    this.csv = [];
    this.x = -1;
    this.y = -1;

    if(path!=undefined){
        this.csv = se.loader.getAssets(path);
    }
}


/**
 * Ler valor da planilha a direita
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.rightValeu = function () {

    if(this.x < this.csv[this.y==-1?0:this.y].length-1)
        return this.csv[this.y==-1?0:this.y][++this.x];
    return undefined;
}

/**
 * Ler valor da planilha a esquerda
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.leftValeu = function () {
    if(this.x > 0)
        return this.csv[this.y==-1?0:this.y][--this.x];
    return undefined;
}

/**
 * Ler valor da planilha a cima
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.topValeu = function () {
    if(this.y > 0)
        return this.csv[--this.y][this.x==-1?0:this.x];
    return undefined;
}

/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.bottomValeu = function () {

    if(this.y < this.csv.length-1)
        return this.csv[++this.y][this.x==-1?0:this.x];

    return undefined;
}


/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.currentValeu = function () {
    return this.csv[this.y==-1?0:this.y][this.x==-1?0:this.x];
}


/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.restartLine = function () {
    this.x = -1;
}


/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.getLengthLine = function () {
    return this.csv[this.y].legth;
}

/**
 * Ler valor da planilha a baixo
 * @return {string} text - valor
 */
ReaderCSVFile.prototype.getLengthCol = function () {
    return this.csv.legth;
}


/**
 * Ler uma linha especifica do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderCSVFile.prototype.getValue = function (x, y) {
    this.x = x;
    this.y = y;
    if((this.y < this.csv.length) && (this.x < this.csv[this.y].length))
        return this.text[this.x][this.y];
}


/**
* Essa classe é responsávl pela leitura de arquivos xml
* @class
*/
function ReaderXMLFile(path) {

    this.xml = null;

    if(path!=undefined){
        this.xml = se.loader.getAssets(path);
    }

    if(this.xml.getElementsByTagName("parsererror").length > 0 )
        throw new Error("O seu arquivo XML possui algum erro!");


}

/**
 * obtem um nó do XML através da tag e do index, em caso de várias tags com o mesmo nome
 * @return {XML DOM} node - um nó do arquivo
 */
ReaderXMLFile.prototype.getNode = function(tag, index){
    if(index == undefined)
        index = 0;

   // return this.xml.getElementsByTagName(tag)[0].childNodes[index];
    return this.xml.getElementsByTagName(tag)[index];
}

/**
 * obtem o valor de um nó do XML  
 * @return {} value - valor no nó
 */
ReaderXMLFile.prototype.getValue = function(node){
 
    return node.innerHTML;
}


/**
 * obtem um filho nó do XML através do index
 * @return {XML DOM} node - um nó do arquivo
 */
ReaderXMLFile.prototype.getChild = function(node, index){
    if(index == undefined)
        index = 0;

    return node.childNodes[index];
}


/**
 * Obtem a quantidade de filhos de um nó do XML através da tag e o index
 * @return {int} size - tamanho do nó
 */
ReaderXMLFile.prototype.getSize = function(tag, index){
    if(index == undefined)
        index = 0;

    return this.xml.getElementsByTagName(tag)[index].children.length;
}




/**
 * obtem a quantidade de tags com esta tag no documento
 * @return {int} size - quantidade de tags
 */
 
ReaderXMLFile.prototype.getCount = function(tag){
    return this.xml.getElementsByTagName(tag).length;
}


/**
* Essa classe é responsávl pela leitura de arquivos textos
* @class
*/
function ReaderTextFile(path) {
    this.text = [];
    this.currentLine = 0;

    if(path!=undefined){
        this.text = se.loader.getAssets(path);
    }
}


/**
 * Ler a próxima linha do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.nextLine = function () {
    return this.text[this.currentLine++];
}

/**
 * Ler a linha atual do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.priorLine = function () {
    return this.text[--this.currentLine];
}

/**
 * Ler uma linha especifica do arquivo
 * @return {string} text - linha do arquivo
 */
ReaderTextFile.prototype.getLine = function (index) {
    if(index < this.text.length)
        return this.text[index];
}



/**
* Essa classe que presenta um Modal
* @class
*/
function Modal(items) {
	
	this.item = items;

}


/**
* Mostra todos os elementos presentes no modal
*/
Modal.prototype.show = function(){
	
	for(var i=0; i < this.intems.lenght; i++)
		items[i].show();
}

/**
* Esconde todos os elementos presentes no modal
*/
Modal.prototype.hide = function(){
	
	for(var i=0; i < this.intems.lenght; i++)
		items[i].hide();
}





/**
* Essa classe que possui métodos relacionados à smartphones
* @class
*/
function Mobile(){
	
	this.orientation = "";
	this.ismobile = this.isMobile();
	
	//this.setAdjust();
}

Mobile.prototype.setAdjust = function(){
	
	/*window.addEventListener("orientationchange", function(event) {
		 
		this.adjustSizeScreen();
	}.bind(this));  */

}
/**
* Obtem informações sobre a plataforma utilizada
*/
Mobile.prototype.isMobile = function(){
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
		return true;
	else
		return false;
	
}



/**
* Obtem informações a orientação do smartphone
*/
Mobile.prototype.getOrientation = function(){
	
	orientation =  (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
	
	return orientation;
}


Mobile.prototype.adjustSizeScreen = function(){
	
	if(this.getOrientation() == 0 || this.getOrientation() == 180){
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;
	}else{
		canvas.width = window.innerWidth;
		canvas.height =  window.innerHeight;
	}
	
	canvas.classList.add("mobile-canvas");
		
	/* Get the documentElement (<html>) to display the page in fullscreen 
	var elem = document.documentElement;

	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { // Safari 
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { // IE11 
		elem.msRequestFullscreen();
	}
*/

	
}

Mobile.prototype.closeFullScreen = function(){
	if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }

}




/**
 * Classe principal do Starter
 * @class
 * @param {int} w - Largura da tela
 * @param {int} h - Altura da tela
 */
StarterEngine = function (w,h) {
    this.width = w;
    this.height = h;
    this.debugmode = false;
    this.starterlogo = null;
	//exceute in smartphone as mobile?
	this.asmobile = false;

	/**@global */
	canvas = null;
	
    window.onload = function(){
        
	
		canvas = document.createElement("canvas");
		canvas.id = "gamecanvas";
		canvas.style="background: #909090";
		
		mobile = new Mobile();
		if(mobile.isMobile() && this.asmobile){	
			mobile.adjustSizeScreen();
		}else{
		
			canvas.height = this.height;
			canvas.width = this.width;
		}
		
	
		document.body.appendChild(canvas); 
		
		//window.canvas = document.getElementById("gamecanvas");
        window.ctx = canvas.getContext("2d");
        this.mlevel = new ManagerScene();
        this.mmouse = new ManagerMouse();
        this.loader = new ManagerLoader(function(){
            this.gameReady();
            this.startGame();
        }.bind(this));

        this.teclado = new ManagerInputs();
        this.storage = new ManagerStorage();

        //iniciando o jogo
        this.setResources();
        this.beginLoad();
    
	}.bind(this);

	/**@global */
    red = {r:255,b:0,g:0};
	/**@global */
    green = {r:0,b:0,g:255};
    /**@global */
	blue = {r:0,b:255,g:0};
    /**@global */
	yellow = {r:255,b:0,g:255};
    /**@global */
	cian = {r:0,b:255,g:255};
    /**@global */
	black = {r:0,b:0,g:0};
    /**@global */
	white = {r:255,b:255,g:255};
    /**@global */
	orange = {r:255,b:0,g:150};
    /**@global */
	purple = {r:255,b:255,g:0};
    /**@global */
	gray = {r:255,b:0,g:0};
	
	this.pause = false;
	this.pause_adjust = true;
	this.landscape = true;


};


/**
 * Configura a opção de executar como o app mobile
 * @method
 */
StarterEngine.prototype.setAsMobile =function (asmobile) {
    this.asmobile = asmobile;
}


/**
 * Inicia o caregamento dos arquivos
 * @method
 */
StarterEngine.prototype.beginLoad =function () {
    this.loader.loading();
}

/**
 * Clama a função incial do level 0 e inicia o game loop
 * @method
 */
StarterEngine.prototype.startGame =function () {
    //this.mlevel.currentScene = 0;
    //if((this.mlevel.scenes.length) > 0 && (this.mlevel.currentScene < this.mlevel.scenes.length)) {
    if(this.mlevel.currentScene != -1){
		//this.mlevel.scenes[this.mlevel.currentScene].startFunction();
        this.loopgame(ctx);
    }else{
        console.error("Você precisa adicionar ao menos um Level ativo!")
    }
}

/**
 * Game loop :)
 * @method
 */
StarterEngine.prototype.loopgame = function (ctx) {

	//is landscape?
	if((mobile.isMobile()) && (this.landscape) && ( (mobile.getOrientation() == 0 ) || (mobile.getOrientation() == 180 ))){
		
		this.pause_adjust = true;
			
	}else if(this.pause_adjust){
		
		this.pause_adjust = false;
		if(mobile.isMobile())
		mobile.adjustSizeScreen();
		
	}
	
	
	if ((!this.pause_adjust) &&  (!this.pause)){
		
		this.mlevel.getCurrentScene().updateFunction();
		//chama o print do manager level
		this.mlevel.print(ctx);
		//requestframe
	}
	
	
	if( this.mlevel.getCurrentScene().istutorial )
		this.mlevel.printTutorial(ctx)
	
    requestAnimFrame(function() {
        se.loopgame(ctx);
    });
};

/**
 * Chamada quando o jogo está pronto - deve ser sobrescrita pelo usuário
 * @method
 */
StarterEngine.prototype.gameReady = function() {};

/**
 * Configura a lista de arquivos (imagens e sons) a serem carregados
 * @method
 */
StarterEngine.prototype.setResources =function () {};


/**
 * Iniciar as conifguração iniciais para o uso do módulo Turtle
 */
StarterEngine.prototype.startTurtle = function () {

    this.setResources = function () {
        //Add lista resource
        this.loader.addStarterResource("turtle", "turtle.png", "image");
    };


    //Quando o loading acabar
    this.gameReady = function() {

        var trutlelvl = new Scene();
        trutlelvl.setFunctionStart(setTurtle);

    }

}



//Request Animate
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
