burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-hide-resp');
    navList.classList.toggle('v-hide-resp');
    navbar.classList.toggle('h-nav-resp');
    


})