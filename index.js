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


let protoSocial = {
    speach(value) {
        console.log(`This ${this.type} will make ${value} for everyone!`);
    }
};

let blueBlood = Object.create(protoSocial);
blueBlood.type = "farmers";
blueBlood.speach("heaps");
 
 