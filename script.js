function toggleMode(){

  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle('light')
  
  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar1.jpg")
    img.setAttribute("alt", "Novo texto")
  } else {
    img.setAttribute("src", "./assets/avatar3.jpg")
    img.setAttribute("alt", "Outra foto")
  }
}