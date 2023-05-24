function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");
  var emptyRow = table.insertRow(0);
  var cell1 = emptyRow.insertCell(0);
  var cell2 = emptyRow.insertCell(1);
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
