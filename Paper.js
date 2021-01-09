class Paper {
    constructor(x, y, r) {
      var options = {
          
          'restitution':0.3,
          'friction':0.5,
          'density':0.3
          
      }
      this.image = loadImage("paper.png");
      this.x=x;
      this.y=y;
      this.r= r
      this.body = Bodies.circle(x, y, r, options);
      
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      
      push();
      translate(paperpos.x, paperpos.y);
      ellipseMode(RADIUS)
      strokeWeight(4);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r*3, this.r*3);
      pop();
    }
    
    
    
}
  