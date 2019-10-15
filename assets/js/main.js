
//dom manioulation
var title = document.getElementById("title");
title.addEventListener("mouseover", mouseOver);
title.addEventListener("mouseleave", mouseLeave);

function mouseOver() {
  title.style.color = "black";
  title.textContent = "By Patrick Ens";
}

function mouseLeave() {
  title.style.color = "black";
  title.textContent = "Boards and Fins";
}

let oddItem = document.querySelectorAll("tr:nth-child(odd)");
oddItem.forEach(o => {
  o.style.backgroundColor = "#000000";
  o.style.color = "#ffffff";
  o.style.width = "100px";
});