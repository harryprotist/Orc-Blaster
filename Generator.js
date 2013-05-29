Generator = function(map, ent)
{
	var map = map;
	var w = map.w;
	var h = map.h;

	var ent = ent;
	var floorspace = 0;

	this.generate = function()
	{
		var tmp;
		var floor;
		for (var y = 0; y < h; y++) {
			for (var x = 0; x < w; x++) {

				floor = 300;	

				if (!(x == 0 || y == 0 || x == w - 1 || y == h - 1 )) {
					if ((tmp = map.getSpace(x - 1, y - 1).ix == 0) && tmp.iy == 0) {
						floor += 119;
					} if ((tmp = map.getSpace(x - 1, y)).ix == 0 && tmp.iy == 0) {
						floor += 119;
					} if ((tmp = map.getSpace(x, y - 1)).ix == 0 && tmp.iy == 0) {
						floor += 119;
					}
				}	

				if (Math.random() * 1000 >= floor) {
					tmp = new Tile(1, 0, false);
				} else {
					tmp = new Tile(0, 0, false);
				}

				map.setSpace(tmp, x, y);
			}
		}	

		// second pass, for walls (and doors, later) 
		///*
		for (var y = 0; y < h; y++) {
			for (var x = 0; x < w; x++) {
				if (!(x == 0 || y == 0 || x == w - 1 || y == h - 1 )) {
					if ((((tmp = map.getSpace(x - 1, y - 1).ix == 0) && tmp.iy == 0)
					|| ((tmp = map.getSpace(x - 1, y)).ix == 1 && tmp.iy == 0) 
					|| ((tmp = map.getSpace(x + 1, y)).ix == 1 && tmp.iy == 0) 
					|| ((tmp = map.getSpace(x + 1, y + 1)).ix == 1 && tmp.iy == 0) 
					|| ((tmp = map.getSpace(x - 1, y - 1)).ix == 1 && tmp.iy == 0) 
					|| ((tmp = map.getSpace(x, y - 1)).ix == 1 && tmp.iy == 0)
					|| ((tmp = map.getSpace(x, y + 1)).ix == 1 && tmp.iy == 0)) 
					&& ((tmp = map.getSpace(x, y)).ix == 0 && tmp.iy == 0)) {
						tmp = new Tile(2, 0, true);
						map.setSpace(tmp, x, y);
					} else if (((tmp = map.getSpace(x, y - 1)).ix == 1 && tmp.iy == 0) 
					&& (x == 0 || x == (w - 1) || y == 0 || y == (w - 1))){
						tmp = new Tile(2, 0, true);
						map.setSpace(tmp, x, y);
					}
				} else if ((tmp = map.getSpace(x, y)).ix == 0 && tmp.iy == 0) {
					map.setSpace(new Tile(2, 0, true), x, y)	
				}
			}
		}
		//*/
		// generate entities (to be implemented)
	}
}
