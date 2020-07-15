var lists = document.querySelectorAll(".banner a")
var links = document.querySelectorAll(".swiper span")
var num = 0;
setInterval(function () {

    num++;
    if (num > links.length - 1) {
        num = 0;

    }

    for (var j = 0; j < lists.length; j++) {
        lists[j].style.display = "none";
        links[j].style.background = "";

    }
    lists[num].style.display = "block";
    links[num].style.background = "blue";




}, 2000)

for (let i = 0; i < links.length; i++) {

    links[i].onclick = function () {
        num = i;
        for (var j = 0; j < lists.length; j++) {
            lists[j].style.display = "none";
            links[j].style.background = "";
        }
        lists[i].style.display = "block";
        links[i].style.background = "blue";
    }

}