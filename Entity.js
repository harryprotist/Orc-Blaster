function Entity(x, y, map, entities)
{

	this.CANVAS = document.getElementById("CANVAS");
	this.CONTEXT = CANVAS.getContext("2d");
	
	this.x=x;
	this.y=y;
	
	this.lastX;
	this.lastY;
	
	this.velX=0;
	this.velY=0;
	
	this.pos;
	
	this.Map=map;
	
	this.entities=entities;
	
	//To be used for collision and the initial call to setPos() 
	var posSet=false;
	var positionSet=false;
	
	var collision=false;
	
	imageObj = new Image();
		
	imageObj.src = 'http://cdn1.iconfinder.com/data/icons/august/PNG/Star%20Orange.png';
	
	
	/*this.update=function()
	{
		this.move();
		this.render(this.x, this.y);
	}*/
	
	this.create=function()
	{
		
		this.pos=this.Map.getSpace(this.x, this.y);
		
		this.setPos(this.x, this.y);
		
		positionSet=true;
		
		this.render(this.x, this.y);
		
	}
	
	this.setPos=function(x, y)
	{
		
		for(var i=0; i<this.entities.length; i++)
		{
			do
			{
				if(!(this.Map.getSpace(x, y).solid)&&this.entities[i].pos!=this.Map.getSpace(x, y))
				{
					this.pos=this.Map.getSpace(x, y);
					posSet=true;
				}
				else
				{
					this.x=Math.floor(Math.random()*(this.Map.w));
					this.y=Math.floor(Math.random()*(this.Map.h));
				
					i=this.entities.length;
				
					this.setPos(this.x, this.y);
				}
			}
			while(posSet=false)
		}

		if(positionSet=true)
		{
			for(var i=0; i<this.entities.length; i++)
			{
				if(!(this.Map.getSpace(x, y).solid)&&this.entities[i].pos!=this.Map.getSpace(x, y))
				{
					this.pos=this.Map.getSpace(x, y);
				}
				else if(this.Map.getSpace(x, y)==null)
				{
					collision=true;
				}
				else
				{
					collision=true;
				}
			}
		}
		
	}
	
	this.render=function(x ,y)
	{
		this.CONTEXT.drawImage(imageObj, x*TILESIZE, y*TILESIZE);	
	}
	
	this.move=function(fps)
	{
		
		this.lastX=this.x;
		this.lastY=this.y;
		
		this.x+=this.velX*fps;
		this.y+=this.velY*fps;
		console.log((this.velX*fps) + " " + (this.velY*fps));
		
		//this.setPos(this.x, this.y);
		//console.log(this.x + " " + this.y);
		if(this.x<=this.Map.w&&this.y<=this.Map.h&&this.x>=0&&this.y>=0)
		{
				if(!(this.Map.getSpace((this.x+0.5)|0, (this.y+0.5)|0).solid))
				{ 
					this.pos=this.Map.getSpace((this.x+0.5)|0, (this.y+0.5)|0);
				} 
				else 
				{
					this.x=this.lastX;
					this.y=this.lastY;
				}
		}
		else
		{
			this.x=this.lastX;
			this.y=this.lastY;
		}
		//console.log(this.x + " " + this.y);
		//if(collision)
		//{
		//	this.collide();
		//}
		
		//else
		//{
			this.velX=0;
			this.velY=0;
		
		//}
		//console.log("Moved");
	}
	
	this.setVelX=function(velX)
	{
		this.velX=velX;
	}
	
	this.setVelY=function(velY)
	{
		this.velY=velY;
	}
	
	this.getVelX=function()
	{
		return this.velX
	}
	
	this.getVelY=function()
	{
		return this.velY;
	}
	
	this.collide=function()
	{
		console.log("Collision");
		
		this.x=this.lastX;
		this.y=this.lastY;
		
		collision=false;
		
		this.render(this.x, this.y);
	}
	
	this.remove=function()
	{
		this.Map.draw(0,0);
	}

}


