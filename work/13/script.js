const ol = document.querySelector(".list");

const info = {
  num: NaN,
  numeration: NaN,
};

function inputonchangenum(e) {
  info.num = e.target.value;
}

function inputonchangenumeration(e) {
  info.numeration = e.target.value;
}

function startrender() {
  if (!isNaN(info.num) && !isNaN(info.numeration)) {
    ol.innerHTML = "";
    ol.setAttribute("start", info.numeration);

    for (let i = 1; i <= info.num; i++) {
      const li = document.createElement("li");
      li.textContent = `${i}`;

      ol.appendChild(li);
    }
  }
}
