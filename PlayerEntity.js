function PlayerEntity(entity, health, input)
{
	
	var player=entity;
	
	this.health=health;
	
	var dir;
	
	var input=input;
	
	this.moves=0;
	
	//this variable is for debugging, it serves no purpose other than to print to the console the amt of moves
	var moves=this.moves;
	
	
	this.init=function()
	{
		player.create();
	}

	this.update=function(fps)
	{
		if (input.getKey("A")) {
					dir="left";
					this.move(dir, fps);
		} if (input.getKey("W")) {
					dir="up";
					this.move(dir, fps);
		} if (input.getKey("D")) {
					dir="right";
					this.move(dir, fps);
		} if (input.getKey("S")) {
					dir="down";
					this.move(dir, fps);
		}
	}

	this.move=function(dir, fps)
	{
		//console.log("Move called");
		var speed = 10;
	
		if(dir=="up")
		{
			player.velY-=speed;
			
			player.move(fps);
			
			this.moves++;
			moves++;
			
			//console.log(moves);
			
			//console.log("Called entity move func");
			
		}
		
		if(dir=="down")
		{
			player.velY+=speed;
			
			player.move(fps);
			
			this.moves++;
			moves++;
			
			//console.log(moves);
			
			//console.log("Called entity move func");
			
		}
		
		if(dir=="left")
		{
			player.velX-=speed;
			
			player.move(fps);
			
			this.moves++;
			moves++;
			
			//console.log(moves);
			
			//console.log("Called entity move func");
			
		}
		
		if(dir=="right")
		{
			player.velX+=speed;
			
			player.move(fps);
			
			this.moves++;
			moves++;
			
			//console.log(moves);
			
			//console.log("Called entity move func");
			
		}
		
		dir=null;
		
	}

	this.getPos=function()
	{
		return player.pos;
	}

	this.getMoves=function()
	{
		return this.moves;
	}

	this.collide=function()
	{
		
	}

	this.breakSolid=function()
	{
		//may not need this
	}

}
