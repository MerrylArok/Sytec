var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var contentChunks = document.getElementsByClassName('chunk');
for (var _i = 0, contentChunks_1 = contentChunks; _i < contentChunks_1.length; _i++) {
    var chunk = contentChunks_1[_i];
    chunk.style.width = windowWidth + "px";
    chunk.style.height = windowHeight + "px";
}
window.addEventListener('resize', updateWindowSize);
var yearsAlive = document.getElementById('yearsAlive');
yearsAlive.innerText = (new Date().getFullYear() - 1998).toString();
function updateWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    for (var _i = 0, contentChunks_2 = contentChunks; _i < contentChunks_2.length; _i++) {
        var chunk = contentChunks_2[_i];
        chunk.style.width = windowWidth + "px";
        chunk.style.height = windowHeight + "px";
    }
}
