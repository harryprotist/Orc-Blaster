function Input()
{
	var CANVAS = document.getElementById("CANVAS");
	var ot = 0;
	var ol = 0;
	var getTopOffset = function(e)
	{
		do {
			ot += e.offsetTop;
			ol += e.offsetLeft;	
		} while	(e = e.getOffsetParent);
	}
	getTopOffset(CANVAS);

	var keysDown = new Array();
	var keyDown = function(e) { keysDown[e.keyCode] = true; };
	var keyUp = function(e) { delete keysDown[e.keyCode]; };

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

	// adds event listeners for mouse movement, clicking, and keypresses
	document.addEventListener("mousedown", mouseDown, false);
	document.addEventListener("mouseup", mouseUp, false);
	document.addEventListener("mousemove", mouseMove, false);
	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);

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
