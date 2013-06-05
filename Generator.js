Generator = function(map, ent)
{
	var map = map;
	var w = map.w;
	var h = map.h;

	var ent = ent;
	this.floorspace = 0;

	var getNeighborIds = function(x, y, ix, iy)
	{
		var retx = new Array();
		var rety = new Array();
		if (x > 0) {
			if ( y > 0) {
				retx.push(map.getSpace(x - 1, y - 1).ix);
				rety.push(map.getSpace(x - 1, y - 1).iy);
			}
			rety.push(map.getSpace(x - 1, y).iy);
			retx.push(map.getSpace(x - 1, y).ix);
			if ( y < h - 1) {
				retx.push(map.getSpace(x - 1, y + 1).ix);
				rety.push(map.getSpace(x - 1, y + 1).iy);
			}
		}
		if (x < w - 1) {
			if ( y > 0) {
				retx.push(map.getSpace(x + 1, y - 1).ix);
				rety.push(map.getSpace(x + 1, y - 1).iy);
			}
			retx.push(map.getSpace(x + 1, y).ix);
			rety.push(map.getSpace(x + 1, y).iy);
			if ( y < h - 1) {
				retx.push(map.getSpace(x + 1, y + 1).ix);
				rety.push(map.getSpace(x + 1, y + 1).iy);
			}
		}
		if (y > 0) {
			retx.push(map.getSpace(x, y - 1).ix);
			rety.push(map.getSpace(x, y - 1).iy);
		}
		if (y < h - 1) {
			retx.push(map.getSpace(x, y + 1).ix);
			rety.push(map.getSpace(x, y + 1).iy);
		}
		
		for (var i = 0; i < retx.length; i++) {
			if (retx[i] == ix && rety[i] == iy) {
				return true;
			}
		}
		return false;
	}
	this.generate = function() // Generates the game world
	{
		var tmp;
		var floor;
		for (var y = 0; y < h; y++) {
			for (var x = 0; x < w; x++) {

				floor = 50;	

				// Checks neighboring tiles, and changes probability of floor tiles based on that.
				if (!(x == 0 || y == 0 || x == w - 1 || y == h - 1 )) {
					if ((tmp = map.getSpace(x - 1, y - 1).ix == 1) && tmp.iy == 0) {
						floor += 450;
					} if ((tmp = map.getSpace(x - 1, y)).ix == 1 && tmp.iy == 0) {
						floor += 450;
					} if ((tmp = map.getSpace(x, y - 1)).ix == 1 && tmp.iy == 0) {
						floor += 450;
					}/* if (((tmp = map.getSpace(x - 1, y - 1).ix == 0) && tmp.iy == 0)
					&& ((tmp = map.getSpace(x - 1, y)).ix == 1 && tmp.iy == 0) 
					&& ((tmp = map.getSpace(x, y - 1)).ix == 1 && tmp.iy == 0)) {
						floor += 1000;	
					}
					*/
				}
				if (Math.random() * 1000 <= floor) {
					tmp = new Tile(1, 0, false);
					this.floorspace++;
				} else {
					tmp = new Tile(0, 0, true);
				}
				map.setSpace(tmp, x, y);
			}
		}	

		// second pass, for walls (and doors, later) 
		for (var y = 0; y < h; y++) {
			for (var x = 0; x < w; x++) {
				// if the current tile is 0,0, and it is bordering a floor, make it a wall
				if ((getNeighborIds(x, y, 1, 0))
				&& ((tmp = map.getSpace(x, y)).ix == 0 && tmp.iy == 0)) {
					tmp = new Tile(2, 0, true);
					map.setSpace(tmp, x, y);
				} else if (((tmp = map.getSpace(x, y)).ix == 1 && tmp.iy == 0) 
				&& (x == 0 || x == (w - 1) || y == 0 || y == (w - 1))){
					this.floorspace--;
					tmp = new Tile(2, 0, true);
					map.setSpace(tmp, x, y);
				}/* else if ((tmp = map.getSpace(x, y)).ix == 0 && tmp.iy == 0) {
					if (!([0, 0] in getNeighborIds(x, y))){
						tmp = new Tile(2, 0, true);
						map.setSpace(tmp, x, y);
					}
				}*/
			}
		}
	}
}
