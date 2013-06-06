function Application(w, h) 
{
	// The html elements, and 2d context required for rendering
	var CANVAS = document.getElementById("CANVAS");
	var CONTEXT = CANVAS.getContext("2d");

	var map = new Map(w, h, CONTEXT);
	var entities = new Array();

	var input = new Input();
	var gen = new Generator(map, entities);
	gen.generate();


	var playerEnt = new Entity(Math.floor(Math.random()*(map.w)), Math.floor(Math.random()*(map.h)), map, entities);
	entities.push(playerEnt);
	var player = new PlayerEntity(playerEnt, 100, input);

	var goalEnt = new Entity(Math.floor(Math.random()*(map.w)), Math.floor(Math.random()*(map.h)), map, entities);
	entities.push(goalEnt);
	var goal = new GoalEntity(goalEnt, player);


	var onRender = function(fps)
	{
		CONTEXT.fillStyle = "#FFFFFF";
		CONTEXT.fillRect(0, 0, 1280, 800);
		CONTEXT.font = "24px Arial";
		//CONTEXT.fillText(input.getMouseX() + ", " + input.getMouseY(), 10, 10);

		map.draw(0, 0);	
		
		// test for mouse movement
		//CONTEXT.fillText(input.getMouseX() + ", " + input.getMouseY(), 10, 30);
		//CONTEXT.fillText("Floorspace: " + gen.floorspace, 10, 60);
		//CONTEXT.fillText("FPS: " + fps, 10, 160);

		for (var i = 0; i < entities.length ; i++) {
			entities[i].render(entities[i].x, entities[i].y);
		}

		/*test for keyboard input
		if (input.getKey("A")) {
			CONTEXT.fillText("A", 10, 90);
		}*/
	}
	
	var onEvent = function(fps)
	{
		player.update(fps);	
		goal.update();
	}

	var onCalc = function(fps)
	{
			
	}
	
	var now = 0; // set in main
	var last = Date.now();
	var main = function()
	{
		now = Date.now();
		var delta = now - last;		
		var fps = (delta / 1000);

		onEvent(fps);
		onRender(fps);

		last = now;
	}

	this.onInit = function()
	{
		player.init();
		goal.init();
		setInterval(main, 1);		
	}
}

App = new Application(60, 39);
TILESETFILE = new Image();
TILESETFILE.onload = function() { App.onInit() };
TILESETFILE.src = "tileset.png";
