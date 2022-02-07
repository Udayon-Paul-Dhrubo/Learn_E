function myFunction() {
    document.getElementById("drp_down").classList.toggle("show");
}

function openHtml(weekNo) {
    let i;
    let x = document.getElementsByClassName("others");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(weekNo).style.display = "flex";
}