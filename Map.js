
TILESETFILE = new Image();
TILESETFILE.onload = function() { setInterval(render(), 1000); };
TILESETFILE.src = "tileset.png";

TILESIZE = 32;

function Tile(ix, iy, solid)
{
	this.ix = ix;
	this.iy = iy;
	this.solid = solid;
}

function Map(w, h, CONTEXT)
{
	this.w = w;
	this.h = h;
	this.map = new Array();
	for (var y = 0; y < this.h; y++) {
		this.map[y] = new Array();
		for (var x = 0; this.x < w; x++) {
			this.map[y][x] = new Tile(0, 0, false);
		}
	}	
	this.CONTEXT = CONTEXT;

	this.draw = function(X, Y)
	{
		for (var y = 0; y < this.h; y++) {
			for (var x = 0; x < this.w; x++) {
				CONTEXT.drawImage(	TILESETFILE,
					       		this.map[y][x].ix,
							this.map[y][x].iy,
							TILESIZE,
							TILESIZE,
							x * TILESIZE + X,
							y * TILESIZE + Y,
							TILESIZE,
							TILESIZE
				);	
			}
		}
	}
	this.getSpace = function(x, y)
	{
		return this.map[y][x];
	}
	this.setSpace = function(val, x, y)
	{
		this.map[y][x] = val;
	}
}

var con = document.getElementById("CANVAS").getContext("2d");
var test = new Map(10, 10, con);
for (var y = 0; y < 10; y++) {
	for (var x = 0; x < 10; x++) {
		if (x == y) {
			test.setSpace(new Tile(0, 0, false), x, y);
		} else {
			test.setSpace(new Tile(TILESIZE, 0, false), x, y);
		}
	}
}

var render = function()
{
	test.CONTEXT.fillStyle = "#000000";
	test.CONTEXT.fillRect(0, 0, 640, 480);

	test.draw(0,0);
}






