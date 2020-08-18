var pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Pooh")
    }
};
var tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("Ror")
    }
};
var piglet = { 
    character: "Piglet",
    greet: function(){
        console.log("Pig Pig")
    }
};
var bees = {
    character: "Bees",
    greet: function(){
        console.log("bzz bzz")
    }
};
var owl = { 
    character: "Owl",
    greet: function(){
        console.log("who who")
    }
};
var robin = {
    character: "Christopher Robin",
    greet: function(){
        console.log("Hey I'm Robin")
    }
};
var rabbit = {
    character: "Rabbit",
    greet: function(){
        console.log("Jump")
    }
};
var gopher = {
    character: "Gopher",
    greet: function(){
        console.log("I dont know who i am!")
    }
};
var kanga = {
    character: "Kanga",
    greet: function(){
        console.log("Me neither")
    }
};
var eeyore = {
    character: "Eeyore",
    greet: function(){
        console.log("I have no clue either")
    }
};
var heff = {
    character: "Heffalumps",
    greet: function(){
        console.log("Heff!")
    }
}; 

tigger.north = pooh;
pooh.south = tigger;
pooh.north = robin;
pooh.west = piglet;
pooh.east = bees;
piglet.east = pooh;
piglet.north = owl;
bees.west = pooh;
bees.north = rabbit;
owl.south = piglet;
owl.east = robin;
robin.south = pooh;
robin.north = kanga;
robin.west = owl;
robin.east = rabbit;
rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;
gopher.west = rabbit;
kanga.south = robin;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heff;
heff.west = eeyore;

var player = {
    location: tigger,
    honey: false, 
};

function mission(){
    switch(Math.floor(Math.random()*10)){
        case 0:
            robin.target=true;
            console.log(robin.character+" is looking for honey! Can you help?");
            break;
        case 1:
            tigger.target=true;
            console.log(tigger.character+" is looking for honey! Can you help?");
            break;
        case 2:
            rabbit.target=true;
            console.log(rabbit.character+" is looking for honey! Can you help?");
            break;
        case 3:
            piglet.target=true;
            console.log(piglet.character+" is looking for honey! Can you help?");
            break;
        case 4:
            eeyore.target=true;
            console.log(eeyore.character+" is looking for honey! Can you help?");
            break;
        case 5:
            heff.target=true;
            console.log(heff.character+" is looking for honey! Can you help?");
            break;
        case 6:
            pooh.target=true;
            console.log(pooh.character+" is looking for honey! Can you help?");
            break;
        case 7:
            owl.target=true;
            console.log(owl.character+" is looking for honey! Can you help?");
            break;
        case 8:
            gopher.target=true;
            console.log(gopher.character+" is looking for honey! Can you help?");
            break;
        case 9:
            kanga.target=true;
            console.log(kanga.character+" is looking for honey! Can you help?");
            break;
    }
}
mission();
function pickUp(){
    if(player.location == bees){
        player.honey=true;
        console.log("You've got honey!");
    }
    else{
        console.log("There is no honey at "+player.location.character+"/'s house");
    }
}
function drop(){
    if(player.location.target){
        player.honey=false;
        console.log("You've delivered the honey to "+player.location.name);
    }
    else{
        console.log("Wrong address");
    }
}

function move(direction){
    if(!player.location[direction]){
        console.log("You can't move this derection");
    }
    else{
        player.location = player.location[direction];
        console.log("You are now at " + player.location.character + "\'s house.");
        player.location.greet();
    }
};

