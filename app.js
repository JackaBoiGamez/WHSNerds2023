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