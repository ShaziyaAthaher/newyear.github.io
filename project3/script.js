function stars() {
  const count = 700;
  const section = document.querySelector("section");
  var i = 0;
  while (i < count) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerHeight);
    const y = Math.floor(Math.random() * window.innerWidth);

    const size = Math.random() * 4;
    star.style.top = y + "px";
    star.style.left = x + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    const duration = Math.random() * 2;
    star.style.animationDuration = 2 + duration + "s";

    section.appendChild(star);
    i++;
  }
}
stars();
