document.addEventListener('scroll', () =>{
        headerNav.classList.add('scroll')
      if(scrollY == 0){
        headerNav.classList.remove('scroll')
      }
})
