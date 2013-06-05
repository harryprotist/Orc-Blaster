function Application(w, h) 
{
	// The html elements, and 2d context required for rendering
	var CANVAS = document.getElementById("CANVAS");
	var CONTEXT = CANVAS.getContext("2d");

	var map = new Map(w, h, CONTEXT);
	var entitys = new Array();

	var input = new Input();
	var gen = new Generator(map, entitys);
	gen.generate();

	var onRender = function()
	{
		CONTEXT.fillStyle = "#FFFFFF";
		CONTEXT.fillRect(0, 0, 1280, 800);
		CONTEXT.font = "24px Arial";
		CONTEXT.fillText(input.getMouseX() + ", " + input.getMouseY(), 10, 10);

		map.draw(0, 0);	
		
		// test for mouse movement
		CONTEXT.fillText(input.getMouseX() + ", " + input.getMouseY(), 10, 30);
		CONTEXT.fillText("Floorspace: " + gen.floorspace, 10, 60);

		// test for keyboard input
		if (input.getKey("A")) {
			CONTEXT.fillText("A", 10, 90);
		}
	}
	
	var onEvent = function(fps)
	{
			
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

		onRender();

		last = now;
	}

	this.onInit = function()
	{
		setInterval(main, 1);		
	}
}

App = new Application(40, 25);
TILESETFILE = new Image();
TILESETFILE.onload = function() { App.onInit() };
TILESETFILE.src = "tileset.png";
