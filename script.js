// Click Nav
var openNav = document.querySelector('.navbtn');
var navList = document.querySelector('.navList');

// Click toggle Nav
openNav.addEventListener('click', function () {
    navList.classList.toggle('active');
});