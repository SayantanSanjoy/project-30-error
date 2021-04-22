class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image=loadImage("sprites/block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility=255;
    }
    display(){
    
      console.log(this.body.speed)

     if(this.body.speed<3){
      push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();

     }else{
      World.remove(world,this.body)
      push()
      tint(255,this.Visibility)
      this.Visibility=this.Visibility-5;
     
      imageMode(CENTER);

      image(this.image,0,0,this.width, this.height);
      pop();

     }









    }
}