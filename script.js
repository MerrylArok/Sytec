// // let windowWidth: Number = window.innerWidth;
// // Using 100% width in CSS to prevent overflow due to vertical scrollbar 
// let windowHeight: Number = window.innerHeight;
// const contentChunks = document.getElementsByClassName('chunk') as HTMLCollectionOf<HTMLElement>;
// for (let chunk of contentChunks) {
//     // chunk.style.width = `${windowWidth}px`;
//     chunk.style.height = `${windowHeight}px`;
// }
// window.addEventListener('resize', updateWindowSize);
var yearsAlive = document.getElementById('yearsAlive');
yearsAlive.innerText = (new Date().getFullYear() - 1998).toString() + " years";
// function updateWindowSize() {
//     windowWidth = window.innerWidth;
//     windowHeight = window.innerHeight;
//     for (let chunk of contentChunks) {
//         chunk.style.width = `${windowWidth}px`;
//         chunk.style.height = `${windowHeight}px`;
//     }
// }
