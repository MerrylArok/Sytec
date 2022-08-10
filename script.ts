let windowWidth: Number = window.screen.width;
let windowHeight: Number = window.screen.height;

const contentChunks = document.getElementsByClassName('chunk') as HTMLCollectionOf<HTMLElement>;

for (let chunk of contentChunks) {
    chunk.style.width = `${windowWidth}px`;
    chunk.style.height = `${windowHeight}px`;
}

window.addEventListener('resize', updateWindowSize);

function updateWindowSize() {
    windowWidth = window.screen.width;
    windowHeight = window.screen.height;

    for (let chunk of contentChunks) {
        chunk.style.width = `${windowWidth}px`;
        chunk.style.height = `${windowHeight}px`;
    }

}

