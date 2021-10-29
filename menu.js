class Menu{
    constructor(){
        this.item0 = createElement("h2");
        this.item0.html("Item0");
        this.item1 = createElement("h2");
        this.item1.html("Item1");
        this.item2 = createElement("h2");
        this.item2.html("Item2");
        this.item3 = createElement("h2");
        this.item3.html("Item3");
        this.item4 = createElement("h2");
        this.item4.html("Item4");
        this.button0 = createButton("Comprar");
        this.button1 = createButton("Comprar");
        this.button2 = createButton("Comprar");
        this.button3 = createButton("Comprar");
        this.button4 = createButton("Comprar");     
    }
    setElementsPosition() {
        this.item0.position(800, 270);
        this.item1.position(800, 320);
        this.item2.position(800, 370);
        this.item3.position(800, 420);
        this.item4.position(800, 470);
        this.button0.position(1000,300);
        this.button1.position(1000,350);
        this.button2.position(1000,400);
        this.button3.position(1000,450);
        this.button4.position(1000,500);
      }
    hide(){
        this.item0.hide();
        this.item1.hide();
        this.item2.hide();
        this.item3.hide();
        this.item4.hide();
        this.button0.hide();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();    
    }
    display(){
        this.setElementsPosition();
        //fundodomenu.x = 930
        //fundodomenu = createSprite(1000000,420,600,600);
        //fundodomenu.shapeColor = "SaddleBrown"
        
        
        

    }
}