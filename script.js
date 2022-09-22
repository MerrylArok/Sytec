// // let windowWidth: Number = window.innerWidth;
// // Using 100% width in CSS to prevent overflow due to vertical scrollbar 
// Wrote this function to ensure 100% vh in mobile, realized that I could do it easier
//using 100vh combined with 100% height for body and html
// let windowHeight: Number = window.innerHeight;
// const contentChunks = document.getElementsByClassName('chunk') as HTMLCollectionOf<HTMLElement>;
// for (let chunk of contentChunks) {
//     // chunk.style.width = `${windowWidth}px`;
//     chunk.style.height = `${windowHeight}px`;
// }
// window.addEventListener('resize', updateWindowSize);
// function updateWindowSize() {
//     windowWidth = window.innerWidth;
//     windowHeight = window.innerHeight;
//     for (let chunk of contentChunks) {
//         chunk.style.width = `${windowWidth}px`;
//         chunk.style.height = `${windowHeight}px`;
//     }
// }
let yearsAlive = document.getElementById('yearsAlive');
yearsAlive.innerText = (new Date().getFullYear() - 1998).toString() + " years";
class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<header class="header">
        <nav id="headerFlexContainer">
            <img id="logo" src="./media/Sytec.svg" alt="Sytec Logo">

            <ul id="headerRight" class="lists">
                <li><button id="headerContactButton">Contact</button></li>
                <li><button id="headerMenuButton">
                        <div id="longBar"></div>
                        <div id="midBar"></div>
                        <div id="shortBar"></div>
                    </button></li>
            </ul>
        </nav>
    </header>`;
    }
}
customElements.define('header-component', Header);
