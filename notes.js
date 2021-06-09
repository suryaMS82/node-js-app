
const fs = require('fs');
//fetching data from nodes.txt file
var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}
//adding note content to txt file 

var adding = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body 
  };

  var notefilter = notes.filter((note) => note.title === title);
 // var notefil= notes.filter((note)=> note.body === body);

  if(notefilter.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log("This Title already exists, use another");
  }
}
// removig note content
var removing = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

var read = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

var getall = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNote(note));
}

var logNote = (note) => {
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

//exporting  all modules 
module.exports = { adding, removing,  read, getall } ;

