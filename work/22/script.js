const table = document.querySelector("table");

const tableinfo = { rows: NaN, cols: NaN };

function inputonchangerows(e) {
  tableinfo.rows = e.target.value;
}

function inputonchangecols(e) {
  tableinfo.cols = e.target.value;
}

function rendertable() {
  if (!isNaN(tableinfo.rows) && !isNaN(tableinfo.cols)) {
    table.innerHTML = "";
    let tr = document.createElement("tr");

    for (let i = 1; i <= tableinfo.rows * tableinfo.cols; i++) {
      const td = document.createElement("td");
      td.textContent = i;

      tr.appendChild(td);

      if (i % tableinfo.cols == 0) {
        table.appendChild(tr);
        tr = document.createElement("tr");
      }
    }
  }
}
