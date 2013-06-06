function GoalEntity(entity, player)
{
	
	var date=new Date();
	
	var last=date.getMinutes();
	
	var goal=entity;
	
	this.player=player;
	
	var moves=this.player.moves;
	
	var alert1=true;
	
	this.init=function()
	{
		goal.create();
	}
	
	this.update=function()
	{
		goal.render(goal.x, goal.y);
		
		if(goal.pos==player.getPos())
		{
			alert("You won!");
			goal.pos=null;
			
			document.location.reload(true);
		}
	}
}