// // 1. Put data_wak_unpack.bat in your Noita root directory, it's pobably is C:\Program Files (x86)\Steam\steamapps\common\Noita
// // 2. Run that file -- you will get a new folder with the game files unpacked
// // 3. Run this script: node wandmaker.js

var fs = require('fs');
var os = require('os');
var path = require('path');

// Paste file contents inside brackets into the wandSprites.js file
var outputFile = path.join(__dirname, 'data', 'wands.txt');

// Clean output file contents
fs.writeFile(outputFile, '', function(){console.log('done')});

// Set two starter wands' path, and common wands path
var wandsBasePath = path.join(process.env.USERPROFILE, 'AppData', 'LocalLow','Nolla_Games_Noita', 'data', 'items_gfx');
var wandsPath = path.join(wandsBasePath, 'wands');
var starterWandHandgunPath = path.join(wandsBasePath, 'bomb_wand.png');
var starterWandBombWandPath = path.join(wandsBasePath, 'handgun.png');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

// Process starter wands to the file
base64_encode(starterWandBombWandPath);
fs.appendFileSync(outputFile, "bomb_wand:\n    '"+base64_encode(starterWandBombWandPath)+"',\n");

base64_encode(starterWandHandgunPath);
fs.appendFileSync(outputFile, "handgun:\n    '"+base64_encode(starterWandHandgunPath)+"',\n");
console.log("Starter wands added");

for (i = 0; i <= 1000; i++) {
    var base64str = base64_encode(wandsPath+"\\"+"wand_"+i.toString().padStart(4, '0')+".png");
    fs.appendFileSync(outputFile, "wand_"+i.toString().padStart(4, '0')+":\n    '"+base64str+"',\n");
    console.log("Added "+i+"\n");
}