let windowWidth: Number = window.innerWidth;
let windowHeight: Number = window.innerHeight;

const contentChunks = document.getElementsByClassName('chunk') as HTMLCollectionOf<HTMLElement>;

for (let chunk of contentChunks) {
    chunk.style.width = `${windowWidth}px`;
    chunk.style.height = `${windowHeight}px`;
}

window.addEventListener('resize', updateWindowSize);

let yearsAlive = document.getElementById('yearsAlive') as HTMLElement;
yearsAlive.innerText = (new Date().getFullYear() - 1998).toString();

function updateWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    for (let chunk of contentChunks) {
        chunk.style.width = `${windowWidth}px`;
        chunk.style.height = `${windowHeight}px`;
    }

}

