var name = (prompt("What is your name?"));
var fstchar =name.slice(0,1);
fstchar.toUpperCase();
var restchar = name.slice(1,);
restchar.toLowerCase();
alert("Hello " + fstchar.toUpperCase() + restchar.toLowerCase() );

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var milkformoney= Math.floor(money/1.5);
      console.log("buy " + milkformoney + " of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(23);
  