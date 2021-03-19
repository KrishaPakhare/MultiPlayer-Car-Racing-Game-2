class Game{
    constructor(){

    }
 getState(){
     database.ref("gameState").on("value",(data)=>{
     gameState=data.val();
    })
 }  
 update(state){
     database.ref("/").update({
         gameState: state
     })
 } 
 start(){
     if (gameState===0){
         player = new Player();
         player.getCount();
         form = new Form ();
         form.display();
         
     }
 }
 play(){
     Player.getPlayerInfo();
     form.hide();
     textSize(30);
     text("Game Start",120,100);
     if(allPlayers !== undefined){
         var yPosition = 130;
        for(var index in allPlayers){
          if(index==="player"+ player.index){
              fill ("red")
          }
          else{
              fill("black")
          }
          textSize(15);
          yPosition += 20;
          text(allPlayers[index].name+ ":"+ allPlayers[index].distance, 120 , yPosition)  
        } 

     }
 }

    
}