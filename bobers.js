class Bob {
    constructor(x, y) {
      var options = {
        isStatic:false,
        restitution : 0.3,
        density : 1.2,
        friction : 0.5
      }
      this.body = Bodies.circle(x,y,25,options);
      this.radius = 50  
      this.image = loadImage("img/ball.png");  
      this.body.debug = true;
      World.add(world, this.body);
     
     // this.image = loadImage("sprites/base.png");
    };
    display(){
      
      var  paperpos = this.body.position

      push();
      translate(paperpos.x,paperpos.y);
      imageMode(RADIUS);
      
      
     image(this.image,0,0, 70,70);
      pop();
    };
  };