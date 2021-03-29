var navclick= document.getElementById('navbtn');
console.log(navclick)
let mobileMenu = document.getElementById('mobileMenu');
navclick.addEventListener('click',function(){
    mobileMenu.classList.toggle('active');
})