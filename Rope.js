class Rope{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.6,
            length: 220
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
       
        
        World.add(myWorld, this.rope);
    }
    display(){
if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        line(pointB.x,pointB.y,pointA.x,pointA.y);
    
    }
  }
}