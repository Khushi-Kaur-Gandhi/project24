class Rubber{
	constructor(x,y,r)
	{
		// add options and create a circle 
var option={
	friction:5,
	density:1,
	restitution:0.3
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option)







		
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r, this.r);
			pop()
	}

}