class Log{
    constructor(x,y,h,a){
       var logOption={
           friction:1.0,      
       }

        this.body=Bodies.rectangle(x,y,20,h,logOption);
        this.w=20;
        this.h=h;
        this.image=loadImage("Images/wood2.png");

        Matter.Body.setAngle(this.body,a);
        World.add(world,this.body);
    }
    display(){

        var angle=this.body.angle;
        push();
        
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("blue");
        image(this.image,0,0,this.w,this.h);
        
        pop();
    }
}