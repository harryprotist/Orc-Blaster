function Application(w, h) 
{
	this.CANVAS = document.getElementById("CANVAS");
	this.CONTEXT = CANVAS.getContext("2d");

	this.map = new Map(w, h, CONTEXT);
	this.entitys = new Array();

	this.onRender = function()
	{
		this.map.draw(0, 0);	
	}
	
	// uses event listener
	this.onEvent = function(button, mouse)
	{
	
	}
	this.onCalc = function(fps)
	{
			
	}
	this.init = function()
	{
			
	}
	
	this.now = 0; // set in main
	this.last = Date.now();
	this.main = function()
	{
		this.now = Date.now();
		var delta = now - last;		
		var fps = (delta / 1000);

		this.last = this.now;
	}
}
