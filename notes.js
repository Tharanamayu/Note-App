console.log('Starting notes.js');

//console.log(module);
const fs= require('fs');
var addNote =(title,body)=>{
// console.log('Adding note',title,body);
var notes =[];
var note ={
  title,
  body
};
  var notesString=fs.readFileSync('notes-data.json');
  notes=JSON.parse(notesString);
notes.push(note);
fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};
var getAll =()=>{
console.log("Getting All notes");
};

var getNote=(title)=>{
  console.log("getting note",title);
};
var removeNote=(title)=>{
  console.log("Removing note",title);
};
module.exports={

addNote,
getAll,
getNote,
removeNote

};
