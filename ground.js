class ground{  
    constructor(x,y){
        var option={isStatic:true}

        this.body = Bodies.rectangle(x,y,1300,20,option);
        this.width = 1300;
        this.height = 20; 
        
        World.add(world,this.body);
      }
     display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);



     }

}