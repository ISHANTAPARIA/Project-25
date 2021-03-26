class Paper{

    constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=0.1;
        this.image=loadImage("paper.png");
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
		
			push()
			
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill("blue");
			ellipse(0,0,this.r);
           image(this.image,this.x,this.y,60,60)
			pop()
			
	}

}
