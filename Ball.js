class Ball{

    constructor(x, y, width, height){
        var options = {
            'restitution': 0.8,
            'friction' : 1.0,
            'density' : 0.06
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        
        World.add(myWorld, this.body);
    }
    display(){

        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        rectMode(CENTER);
        stroke("red");
        strokeWeight(3);

        fill(255);
        ellipse(pos.x,pos.y,this.width,this.height);
       pop()
    }
}