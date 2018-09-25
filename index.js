/*
=========================
Code that starts @ Chapter 7 EJS
========================
*/


// METHODS

// function shout (deed) {
//     console.log(`I, ${this.name} am all that is, and I shall ${deed}`);
// };

// let hunk = {name: "Carl", shout};
// hunk.shout("vanquish all my foes");

// -------------------------------------------

// function attack (type) {
//     console.log(`${this.hero} attacks with ${type}!`);
// }
// let warrior = {hero: "Vin the impaler", attack}
// warrior.attack("impaling weapon thing")

// PROTOTYPES
// let protoCapitalist = {
//     speak(value) {
//         console.log(`This ${this.type} will make me ${value} of cash!`)
//     }
// };

// let redBlood = Object.create(protoCapitalist);
// redBlood.type = "poverty";
// redBlood.speak("heaps");

//---------------------

// let protoSocial = {
//     speach(value) {
//         console.log(`This ${this.type} will make ${value} for everyone!`);
//     }
//     // hair: "green"
// };

// let blueBlood = Object.create(protoSocial);
// blueBlood.type = "farmers";
// blueBlood.speach("heaps");

// // I like that the prototype is protosocial and identifies the function
// console.log(Object.getPrototypeOf(blueBlood));

//----------------------------
// Old way of using constructors

// function tvchannel(genre) {
// // binds this to object
//     this.genre = genre;
// }
// tvchannel.prototype.watch = function(station) {
//     console.log(`${this.genre} is on ${station}`);
// }

// // New keyword instantiates 
// let foxNews = new tvchannel("Conservative news");
// foxNews.watch("Fox");
 
// ----------------------------

// // Utilizing Class and Constructor notation
// class Joker {
//     constructor(type) {
//         this.type = type;
//     }
//     disruptClass(joke) {
//         console.log(`The ${this.type} told the class '${joke}!'`);
//     }
// };

// let bully = new Joker("Killer");
// bully.disruptClass("Where do babies come from? Santa Claus");
// bully.disruptClass();
// // console.log(Object.getPrototypeOf(Joker))

// ------------------

// Mapping

/* This is dangerous because this object already has several prototypes
let inventory = {
    bow: 10,
    sword: 20,
    axe: 10
};
*/

// Instead use Map() or Object.create(null) to make an object map
let inventory = new Map();
inventory.set("bow", 10)
inventory.set("sword", 20)
inventory.set("axe", 10)

console.log(`Axe in inventory is ${inventory["axe"]} ap`);
console.log(`Do I have a bow in my inventory?`, "bow" in inventory);
console.log('Does the inventory object have the prop tostring?', inventory.has("toString"));