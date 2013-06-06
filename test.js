var canvas = document.getElementById("CANVAS");
var ctx = canvas.getContext("2d");


var test=new Map(40, 25, ctx);

var entities=new Array();

var generator=new Generator(test, entities);

var input=new Input();

for (var y = 0; y < test.h; y++) {
	for (var x = 0; x < test.w; x++) {
		if (x == 0 || y == 0 || x == test.w - 1 || y == test.h - 1) {
			test.setSpace(new Tile(TILESIZE*2, 0, false), x, y);
		} else {
			test.setSpace(new Tile(TILESIZE, 0, false), x, y);
		}
	}
}

generator.generate();

test.draw(0, 0);

var num=30;

var amtOfEnt=generator.floorspace/num;

/*for(var j=0; j<amtOfEnt; j++)
{
	var e=new Entity(Math.floor(Math.random()*(test.w)), Math.floor(Math.random()*(test.h)), test, entities);
	entities.push(e);
	e.create();
}*/

var playerEnt=new Entity(Math.floor(Math.random()*(test.w)), Math.floor(Math.random()*(test.h)), test, entities);
entities.push(playerEnt);


//playerEnt.setVelX(0);

//playerEnt.setVelY(0);

var player=new PlayerEntity(playerEnt, 100, input);
var goal=new GoalEntity(goalEnt);

//goal.init();

//interval may need changing
player.update();
//setInterval(player.update, 10000);

