class Bird extends BaseFile{
    constructor(x,y,w,h){
        
        super(x,y,w,h);
        this.image=loadImage("Images/bird.png");
    }

    display(){
        
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        super.display();
    }
}