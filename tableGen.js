var D = document;
var t = "<h1>Enter Table Cells</h1>";
var rawTable = "<input type='submit' value='Generate Table Code' onClick='spitCode()' />";
var tRs = "<tr>";
var tRe = "</tr>";
var tCs = "<td>";
var tCe = "</td>";
var exportTable = "";

function genXY() {
  var cols = D.getElementById('y').value;
  var rows = D.getElementById('x').value;
  D.getElementById('output').innerHTML = cols + " and " + rows;
  preHTML();
}

function preHTML() {
  t += "<table class='table table-bordered'><tbody>";
  genRows();
  t += "</tbody></table><br />";
  t += rawTable;
  D.getElementById('output').innerHTML = t;
  exportTable += String(t);
}

function genCols() {
  var cols = D.getElementById('y').value;
  for (var i = 0; i < cols; i++) {
    t += tCs;
    t += "<input type='text' />";
    t += tCe;
  }
}

function genRows() {
  var rows = D.getElementById('x').value;
  for (var i = 0; i < rows; i++) {
    t += tRs;
    genCols();
    t += tRe;
  }
}

function spitCode() {
  D.getElementById('htmlCode').innerHTML = exportTable;
}