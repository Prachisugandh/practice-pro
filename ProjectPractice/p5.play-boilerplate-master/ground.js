class Ground{
    constructor (x,y,w,h){
        var groundOption={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,groundOption);
        this.w=w;
        this.h=h;
        this.image=loadImage("Images/ground.png")
        World.add(world,this.body);
        }

        display(){
            fill("brown");
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
        }
}