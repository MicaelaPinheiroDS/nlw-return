document.addEventListener('scroll', () =>{
  headerNav.classList.add('scroll')
  if(scrollY == 0){
    headerNav.classList.remove('scroll')
  }
  if(scrollY >= 500){
    showBackToTopButton()
  }else{
    hiddenBackToTopButton()
  }
  if(scrollY >= 4286){
    switchColorButton('#00856F','white')
  }else{
    switchColorButton('white','#00856F')
  }

})
function showBackToTopButton(){
  backToTopButton.classList.add('show')
}
function hiddenBackToTopButton(){
  backToTopButton.classList.remove('show')
}
function switchColorButton(color1, color2){
  let button = backToTopButton.childNodes[1]
  button.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="20" fill="${color2}"/>
  <path d="M20 27V13" stroke="${color1}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 20L20 13L27 20" stroke="${color1}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}