let c = document.getElementById("burgermenu");
let a = document.getElementById("menu")

c.onclick = () => {
  if (a.classList.contains('show-menu')) {
    a.classList.remove('show-menu')
  } else {
    a.classList.add('show-menu')
  }
}