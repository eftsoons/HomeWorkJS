const info = document.querySelector(".info");

function inputonchange(e) {
  const year = Number(e.target.value.split("-")[0]);

  if (
    year &&
    !isNaN(year) &&
    ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
  ) {
    console.log("yes");
    info.textContent = `Год ${year} весокостный`;
  } else {
    info.textContent = `Год ${year} не весокостный`;
  }
}
