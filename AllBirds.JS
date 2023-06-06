// const togglemenu = function () {
//     var x = document.getElementById("am");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//       } else {
//         x.style.display = "none";
//       }
// }

const hamP = document.querySelector('.openMenu');//p
const hamBtn = document.getElementById('openbtn');//button
const hamMenu = document.getElementById('mm');//ul


hamP.addEventListener('click', toggleMenu);

function toggleMenu(){
    hamMenu.classList.toggle("hideHamMenu");
    hamMenu.classList.toggle("displayHamMenu");
    if (hamMenu.classList.contains("displayHamMenu")) {
        hamBtn.innerHTML="&#10006;";
    } else {
        hamBtn.innerHTML="&#9776;";
    }
}


