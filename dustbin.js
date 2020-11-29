class Dustbin{
    constructor(x, y){
        var option = {
         isStatic: true
         
    }
    this.image = loadImage("images/dustbingreen.png")
    this.x = x
    this.y = y
    this.dwidth = 200
    this.dheight = 100
    this.dthickness = 20
    this.anger = 0
    this.bottomBody = Bodies.rectangle(this.x, this.y, this.dwidth, this.dthickness, option)
    this.leftBody = Bodies.rectangle(this.x - this.dwidth/2, this.y - this.dheight/2, this.dthickness, this.dheight, option)
    Matter.Body.setAngle(this.leftBody, this.angle) 
    this.rightBody = Bodies.rectangle(this.x+ this.dwidth/2, this.y- this.dheight/2, this.dthickness, this.dheight,option)
    Matter.Body.setAngle(this.rightBody, this.angle) 
    
    World.add(world, this.bottomBody);
    World.add(world, this.leftBody);
    World.add(world, this.rightBody);
}
display() { 
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftBody.position;
      var posRight=this.rightBody.position; 
      push()
       translate(posLeft.x, posLeft.y); 
      rectMode(CENTER)
       //strokeWeight(4); 
       angleMode(RADIANS) 
       fill(255) 
       stroke(255)
        rotate(this.angle)
         rect(0,0,this.dthickness, this.dheight);
          pop()
           push()
            translate(posRight.x, posRight.y);
             rectMode(CENTER)
              //strokeWeight(4); 
              stroke(255)
               angleMode(RADIANS) 
               fill(255)
                rotate(-1*this.angle)
                 rect(0,0,this.dthickness, this.dheight);
                  pop() 
                  push() 
                  translate(posBottom.x, posBottom.y); 
                  rectMode(CENTER) //strokeWeight(4); 
                  stroke(255) 
                  angleMode(RADIANS) 
                  fill(255) 
                  rect(0,0,this.dwidth, this.dthickness); 
                  pop() }
}


