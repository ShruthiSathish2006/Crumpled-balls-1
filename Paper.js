class Paper extends BaseClass {
  constructor(x, y, width){
    super(x,y,width,height);
    
  }
display(){
   
    var pos =this.body.position;
  rectMode(CENTER); 
  fill("yellow");
  rect(pos.x, pos.y, this.width);

  
}
}