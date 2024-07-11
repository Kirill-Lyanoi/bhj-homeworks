let count = document.getElementById("clicker__counter").textContent;
const cookie = document.getElementById("cookie");
cookie.onclick = function () {
    cookie.width = 230;
    document.getElementById("clicker__counter").textContent = ++count;  
    setTimeout(() => {
        cookie.width = 200 ;
      }, "50");
}