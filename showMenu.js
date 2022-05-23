let menuNavigationbutton = document.querySelector('.menuNavigationbutton')
menuNavigationbutton.addEventListener('click', ()=>{
    let showMenu = document.body.classList
    console.log(showMenu.length)
    let imgSvg = menuNavigationbutton.childNodes[1]
    if(showMenu.length != 1){
        showMenu.remove('show-menu')
        imgSvg.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 12H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 28L30 28" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    }else{
        showMenu.add('show-menu')
        imgSvg.innerHTML= `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    }
})