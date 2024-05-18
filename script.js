feather.replace();
//
const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
//
const hamMenu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
  if(!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

})
//
const aboutLink = document.querySelector('#about-2S');

aboutLink.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about-2').scrollIntoView({ behavior: 'smooth' });
});


