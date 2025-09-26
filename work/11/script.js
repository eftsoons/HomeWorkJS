const info = document.querySelector(".info");

const textinfo = { num: NaN, text: null, color: null };

function inputonchangenum(e) {
  textinfo.num = e.target.value;
}
function inputonchangetext(e) {
  textinfo.text = e.target.value;
}
function inputonchangecolor(e) {
  textinfo.color = e.target.value;

  if (!isNaN(textinfo.num) && textinfo.text && textinfo.color) {
    info.innerHTML = "";
    for (let i = 1; i <= textinfo.num; i++) {
      const p = document.createElement("p");
      p.textContent = textinfo.text;

      if (i % 2 == 0) {
        p.style.color = textinfo.color;
      }

      info.appendChild(p);
    }
  }
}
