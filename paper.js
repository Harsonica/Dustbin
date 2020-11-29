
class Paper{
    constructor(x, y, diameter){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            
          }
          this.image = loadImage("images/paper.png")
          this.diameter = diameter
          this.x = x
          this.y = y
          this.body = Bodies.circle(this.x , this.y, this.diameter/2, options)
          World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill(255, 0, 255)
        ellipse(0,0,this.diameter, this.diameter)
        pop()
    }
}