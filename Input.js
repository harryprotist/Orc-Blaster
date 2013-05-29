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
	}
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
	}

	document.addEventListener("mousedown", this.mouseDown, false);
	document.addEventListener("mouseup", this.mouseUp, false);
	document.addEventListener("mousemove", this.mouseMove, false);
	document.addEventListener("keydown", this.keyDown, false);
	document.addEventListener("keyup", this.keyUp, false);

	this.getKey = function(c)
	{
		return (c.charCodeAt(0) in keysDown);
	}
	this.getMouseClick = function()
	{
		return mouseDown;
	}
	this.getMouseX = function() { return mouseX - ol; }; // subtract x and y of the upper left corner
	this.getMouseY = function() { return mouseY - ot; }; // of CANVAS
}
