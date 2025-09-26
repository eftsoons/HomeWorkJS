const divelement = document.querySelector(".element");

function inputonchange(e) {
  divelement.innerHTML = "";
  const nameelement = e.target.value;
  const element = document.createElement(nameelement);
  element.textContent = nameelement;
  divelement.appendChild(element);
}
