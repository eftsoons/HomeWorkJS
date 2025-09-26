const info = document.querySelector(".info");

let infotext = "";

function inputonchangetext(e) {
  infotext = e.target.value;
}

function inputonchangecolor(e) {
  const color = e.target.value;
  info.innerHTML = "";

  for (let i = 1; i <= infotext.length; i++) {
    if (i % 2 == 0) {
      const span = document.createElement("span");
      span.textContent = infotext[i - 1];
      span.style.color = color;

      info.appendChild(span);
    } else {
      const text = document.createTextNode(infotext[i - 1]);

      info.appendChild(text);
    }
  }
}
