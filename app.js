function changeImage(imgsrc) {
    document.getElementById('index_foreground_img').src=imgsrc;
    document.getElementById('index_background_img').src=imgsrc;
}

classphotos = ["./images/Home/Grades/Senior.jpg", "./images/Home/Grades/Junior.jpg", "./images/Home/Grades/Sophmore.jpg", "./images/Home/Grades/Freshman.jpg", "./images/FullTeamBG.jpg"]

let index = 0;
const imgElement = document.querySelector("#classphoto");

function change() {
    imgElement.src = classphotos[index];
    index > 1 ? index = 0 : index++;
 }
 
 window.onload = function () {
     setInterval(change, 5000);
 };