let tableData = [
  {
    "name": "suraj",
    "age": "28",
    "location": "Giridih"
  },
  {
    "name": "aman",
    "age": "26",
    "location": "Giridih"
  }
]

function insertData(table, rows, isHeader = false) {
  let tr = table.insertRow()
  for (col in rows) {
    let td = tr.insertCell()
    td.innerText = isHeader ? col : rows[col]
  }
  document.getElementById
}
function createTable(tableData){
  let table = document.createElement("table");
  document.body.appendChild(table)
  tableData.forEach((rows, index) => {
    // insert Header
    if (index == 0) {
      insertData(table, rows, true)
    }
    // Insert Data 
    insertData(table, rows)
  });
}
