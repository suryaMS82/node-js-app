console.log('welcome, app starting...');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("note added");
  notes.adding(title, body);
} else if (command === "remove") {
  console.log("note removed");
  notes.removing(title);
} else if (command === "read") {
  console.log("reading note");
  notes.read(title);
} else if (command === "list") {
  console.log("node all list");
  notes.getall();
} else {
  console.log("wrong, start with right command...");
}
