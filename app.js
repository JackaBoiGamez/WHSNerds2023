classPhotos = ["./images/Home/Grades/Senior.jpg", "./images/Home/Grades/Junior.jpg", "./images/Home/Grades/Sophmore.jpg",
 "./images/Home/Grades/Freshman.jpg", "./images/FullTeamBG.jpg"]

let index = 0;
const imgElement = document.querySelector("#classPhoto");

function change() {
    imgElement.src = classPhotos[index];
    index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};

// Mobile menu support
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const hiddenElements = document.querySelectorAll('.hidden');

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    entry.target.classList.toggle('show',entry.isIntersecting)
  });
});
hiddenElements.forEach((el) => observer.observe(el));