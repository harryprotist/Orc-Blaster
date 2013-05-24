Generator = function(map, ent)
{
	var map = map;
	var w = map.w;
	var h = map.h;

	var ent = ent;
	var floorspace = 0;

	this.generate = function()
	{
		Tile tmp = new Tile(0, 0, false);
		map.setSpace(tmp, 0, 0);

		var floor;
		for (var y = 1; y < h; y++) {
			for (var x = 1; x < w; x++) {

				floor = 50;	

				if ((tmp = map.getSpace(x - 1, y - 1).ix == 0) && tmp.iy == 0) {
					floor += 300;
				} if ((tmp = map.getSpace(x - 1, y)).ix == 0 && tmp.iy == 0) {
					floor += 325;
				} if ((tmp = map.getSpace(x, y - 1)).ix == 0 && tmp.iy == 0) {
					floor += 325;
				}

				if (Math.random() * 1000 <= floor) {
					tmp = new Tile(TILESIZE, 0, false);
				} else {
					tmp = new Tile(0, 0, false);
				}

				map.setSpace(tmp, x, y);
			}
		}	

		// second pass, for walls (and doors, later)
		for (var y = 1; y < h; y++) {
			for (var x = 1; x < w; x++) {

				if ((((tmp = map.getSpace(x - 1, y - 1).ix == 0) && tmp.iy == 0)
				|| ((tmp = map.getSpace(x - 1, y)).ix == 0 && tmp.iy == 0) 
				|| ((tmp = map.getSpace(x, y - 1)).ix == 0 && tmp.iy == 0)) 
				&& ((tmp = map.getSpace(x, y - 1)).ix == TILESIZE && tmp.iy == 0)) {
					tmp = new Tile(TILESIZE * 2, 0);
					map.setSpace(tmp, x, y);
				} else if (((tmp = map.getSpace(x, y - 1)).ix == TILESIZE && tmp.iy == 0) 
				&& (x == 0 || x == (w - 1) || y == 0 || y == (w - 1))){
					tmp = new Tile(TILESIZE * 2, 0);
					map.setSpace(tmp, x, y);
				}
			}
		}

		// generate entities (to be implemented)
	}
}
