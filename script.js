var windowWidth = window.screen.width;
var windowHeight = window.screen.height;
var contentChunks = document.getElementsByClassName('chunk');
for (var _i = 0, contentChunks_1 = contentChunks; _i < contentChunks_1.length; _i++) {
    var chunk = contentChunks_1[_i];
    chunk.style.width = windowWidth + "px";
    chunk.style.height = windowHeight + "px";
}
window.addEventListener('resize', updateWindowSize);
function updateWindowSize() {
    windowWidth = window.screen.width;
    windowHeight = window.screen.height;
    for (var _i = 0, contentChunks_2 = contentChunks; _i < contentChunks_2.length; _i++) {
        var chunk = contentChunks_2[_i];
        chunk.style.width = windowWidth + "px";
        chunk.style.height = windowHeight + "px";
    }
}
