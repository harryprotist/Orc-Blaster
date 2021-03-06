
TILESETFILE = null;
//TILESETFILE.onload = function() { App.onInit() };
TILESETFILE = null;
//TILESETFILE.src = "tileset.png";


TILESIZE = 16; // Universal variable for tilesize

function Tile(ix, iy, solid)
{
	// X and Y position in image file
	this.ix = ix;
	this.iy = iy;
	this.solid = solid; // is the tile solid?
}

function Map(w, h, CONTEXT)
{
	this.w = w;
	this.h = h;
	var map = new Array();
	// initially fills the Map with blank tiles
	for (var y = 0; y < this.h; y++) {
		map[y] = new Array();
		for (var x = 0; x < w; x++) {
			map[y][x] = new Tile(0, 0, false);
		}
	}	
	var CONTEXT = CONTEXT;

	// renders entire map to the screen
	this.draw = function(X, Y)
	{
		for (var y = 0; y < this.h; y++) {
			for (var x = 0; x < this.w; x++) {
				CONTEXT.drawImage(	TILESETFILE,
					       		map[y][x].ix * TILESIZE,
							map[y][x].iy * TILESIZE,
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
		return map[y][x];
	}
	this.setSpace = function(val, x, y)
	{
		map[y][x] = val;
	}
}
