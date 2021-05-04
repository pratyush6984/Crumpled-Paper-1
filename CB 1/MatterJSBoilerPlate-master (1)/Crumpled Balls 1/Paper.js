class Paper{
    constructor(x,y){
        var paper_options = {
            isStatic:false,
            restitution:0.3,
            density:0.6,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,35,paper_options)
        World.add(world, this.body);
    }
    display(){
        fill("yellow");
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,35)
    }
}