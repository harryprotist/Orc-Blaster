function Application(w, h) 
{
	var CANVAS = document.getElementById("CANVAS");
	var CONTEXT = CANVAS.getContext("2d");

	var map = new Map(w, h, CONTEXT);
	var entitys = new Array();

	var onRender = function()
	{
		CONTEXT.fillStyle = "#FFFFFF";
		CONTEXT.fillRect(0, 0, 1280, 800);
		CONTEXT.font = "30px Arial";
		CONTEXT.fillText(input.getMouseX() + ", " + input.getMouseY(), 10, 10);

		map.draw(0, 0);	
	}
	
	var input = new Input();
	var gen = new Generator(map, entitys);
	gen.generate();
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
