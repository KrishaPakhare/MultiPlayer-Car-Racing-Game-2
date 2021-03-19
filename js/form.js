class Form{
    constructor(){
        this.input = createInput("Enter your name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
    }

 display(){
    var title = createElement("h1");
    title.html("Car Racing Game!");
    title.position(130,0);
    
    this.input.position(130,160);
    
    this.button.position(250,200);
    

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        //"playerCount += " means playerCount = playerCount + 1
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello "+ player.name);
        this.greeting.position(130,160);
    })
    
 }  
  hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();

  } 
}