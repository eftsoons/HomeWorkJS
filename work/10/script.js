const info = document.querySelector(".info");

const divinfo = { num: NaN, text: null, color: null };

function inputonchangenum(e) {
  divinfo.num = e.target.value;
}

function inputonchangecolor(e) {
  divinfo.color = e.target.value;
}

function renderdiv() {
  if (!isNaN(divinfo.num) && divinfo.color) {
    info.innerHTML = "";
    for (let i = 1; i <= divinfo.num; i++) {
      const div = document.createElement("div");
      div.className = "block";
      div.style.backgroundColor = divinfo.color;

      info.appendChild(div);
    }
  }
}
