function Input()
{
	var CANVAS = document.getElementById("CANVAS");
	var ot = 0;
	var ol = 0;
	var getTopOffset = function(e)
	{
		do {
			ot += e.OffsetTop;
			ol += e.OffsetLeft;	
		} while	(e = e.getOffsetParent);
	};
	getTopOffset(CANVAS);

	var keysDown = new Array();
	var keyDown = function(e) { this.keysDown[e] == true; };
	var keyUp = function(e) { delete this.keysDown[e]; };

	var mouseDown = false;
	var mouseDown = function(e) { mouseDown = true; };
	var mouseUp = function(e) { mouseDown = false; };
	var mouseX = 0;
	var mouseY = 0;
	var mouseMove = function(e)
	{
		mouseX = e.clientX;
		mouseY = e.clientY;
	};

	document.addEventListener("mousedown", this.mouseDown, false);
	document.addEventListener("mouseup", this.mouseUp, false);
	document.addEventListener("mousemove", this.mouseMove, false);
	document.addEventListener("keydown", this.keyDown, false);
	document.addEventListener("keyup", this.keyUp, false);

	this.getKey = function(c)
	{
		return (c.charCodeAt(0) in keysDown);
	};
	this.getMouseClick = function()
	{
		return mouseDown;
	};
	this.getMouseX = function() { return mouseX - ol; }; // subtract x and y of the upper left corner
	this.getMouseY = function() { return mouseY - ot; }; // of CANVAS
}

function Application(w, h) 
{
	var CANVAS = document.getElementById("CANVAS");
	var CONTEXT = CANVAS.getContext("2d");

	var map = new Map(w, h, CONTEXT);
	var entitys = new Array();

	var onRender = function()
	{
		this.CONTEXT.fillStyle = "#FFFFFF";
		this.CONTEXT.fillRect(0, 0, 640, 480);
		this.CONTEXT.font = "30px Arial";
		this.CONTEXT.fillText(input.getMouseX() + ", " + input.getMouseY(), 10, 10);

		this.map.draw(0, 0);	
	};
	
	var input = new Input();
	var onEvent = function(fps)
	{
			
	};

	var onCalc = function(fps)
	{
			
	};
	
	var now = 0; // set in main
	var last = Date.now();
	var main = function()
	{
		now = Date.now();
		var delta = now - last;		
		var fps = (delta / 1000);

		last = now;
	};

	this.onInit = function()
	{
		setInterval(main, 1);		
	};
}

App = new Application(32, 16);
