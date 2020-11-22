class BaseFile{
    constructor(x,y,w,h,a){
        this.body=Bodies.rectangle(x,y,w,h);
        this.w=w;
        this.h=h;
         World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        push();

        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
              
        pop();

    }
}