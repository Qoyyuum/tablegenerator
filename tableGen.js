//Check if input is a number or not.
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

var D = document;
var t = "<h1>Enter Table Cells</h1>";
var t2 = "";
var t3 = "";
var rawTable = "<input type='submit' value='Generate Table Code' onClick='spitCode()' />";
var tRs = "<tr>";
var tRe = "</tr>";
var tCs = "<td>";
var tCe = "</td>";
var exportTable = "";
var nl = "\n";

function genXY() {
  var cols = D.getElementById('y').value;
  var rows = D.getElementById('x').value;
  D.getElementById('output').innerHTML = cols + " and " + rows;
  preHTML();
}

function preHTML() {
  exportTable = "";
  t,t2,t3 = "";
  D.getElementById('output').innerHTML = "";
  t2 += "<table class='table table-bordered'><tbody>\n";
  genRows();
  t2 += "</tbody></table>\n";
  t3 += rawTable;
  D.getElementById('output').innerHTML = t + t2 + t3;
  exportTable += String(t2);
}

function genRows() {
  var rows = D.getElementById('x').value;
  for (var i = 0; i < rows; i++) {
    t2 += nl;
    t2 += tRs;
    genCols();
    t2 += tRe;
    t2 += nl;
  }
}

function genCols() {
  var cols = D.getElementById('y').value;
  for (var i = 0; i < cols; i++) {
    t2 += nl;
    t2 += tCs;
    t2 += nl;
    t2 += "<input type='text' />\n";
    t2 += tCe;
    t2 += nl;
  }
}

function spitCode() {
  D.getElementById('htmlCode').value = exportTable;
}
