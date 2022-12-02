// Wrote this function to ensure 100% vh in mobile, realized that I could do it easier
//using 100vh combined with 100% height for body and html

// // let windowWidth: Number = window.innerWidth;
// // Using 100% width in CSS to prevent overflow due to vertical scrollbar 
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

/////////////////////////////////////////////////////////////////////////////////////////////

// This function updates the number of years Sytec has been operational since its inception in 1998

const yearsAlive = document.getElementById('yearsAlive') as HTMLElement;
try {
    yearsAlive.innerText = (new Date().getFullYear() - 1998).toString() + " years";
} catch (error) {
    console.log("yearsAlive is defined and needed on the homepage only")
}


/////////////////////////////////////////////////////////////////////////////////////////////

// Header class is a reusable WebComponent injected as a custom html element called header-component
//Adding <header-component></header-component> to any html file will inject the following html through addAdjacentHTML method. Initially injected via innerHTML, updated to remove cross site scripting vulnerabilities
class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        let htmlHeader = `<header class="header">
    <nav id="headerFlexContainer">
    <a title="Homepage" href="./index.html"><img id="logo" src="./media/Sytec.svg" alt="Sytec Logo"></a>

        <ul id="headerRight" class="lists">
            <li><a id="headerContactButton" class="buttonTransition" href="./contact.html">Contact</a></li>
            <li><button id="headerMenuButton">
                    <div id="longBar"></div>
                    <div id="midBar"></div>
                    <div id="shortBar"></div>
                </button></li>
        </ul>
    </nav>
</header>`;

        this.insertAdjacentHTML('afterbegin', htmlHeader);
    }
}

//Reusable Footer web-component
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let htmlFooter = `
        <footer id="footer">
        <ul>
            <li>
                <h3>Sytec Manufacturing</h3>
            </li>
            <li>
                <h4>7815- 127th Ave</h4>
            </li>
            <li>
                <h4>Edmonton, AB T5B 1R9</h4>
            </li>
            <li>
                <h4>780-484-9898</h4>
            </li>
            <li>
                <h4>sales@sytec-mfg.com</h4>
            </li>
        </ul>


        <ul>
            <li>
                <h3>About Us</h3>
            </li>
            <li>
            <h4><a href="./contact.html">Contact</a></h4>
            </li>
            <li>
                <h4>Products</h4>
            </li>
            <li>
                <h4>Team</h4>
            </li>
            <li>
                <h4><a target="_blank" href="https://ca.indeed.com/cmp/Sytec-Manufacturing-1/jobs">Careers</a></h4>
            </li>
        </ul>

        <ul>
            <li>
                <h3>Our Business</h3>
            </li>
            <li>
                <h4><a href="./engineering.html">Engineering</a></h4>
            </li>
            <li>
                <h4><a href="./manufacturing.html">Manufacturing</a></h4>
            </li>
            <li>
                <h4><a href="./powdercoating.html">Powder Coating</a></h4>
            </li>
        </ul>

        <ul id="externalLinks">
            <li><a href="https://ca.linkedin.com/company/sytec-manufacturing-ltd" target="_blank"><img
                        src="./media/linkedin.png" alt="linkedinIcon"></a></li>
            <li><a href="https://www.google.com/maps/dir/Current+Location/53.584650741527945,-113.46097094106376" target="_blank"><img src="./media/maps.png" alt="mapsIcon"></a>
            </li>
        </ul>
    </footer>
        `;

        this.insertAdjacentHTML("afterbegin", htmlFooter);

    }
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);


///////////////////////////////////////////////////////////////////////////////////////

//Using Intersection observer API to animate page elements

const animatedElementsLeft = document.querySelectorAll('.animateLeft');
const animatedElementsRight = document.querySelectorAll('.animateRight');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1,
}

//Observer injects animation to left 
const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = '.35s animateLeft ease-in';
            entry.target.style.opacity = '1';
            observerLeft.unobserve(entry.target);
        }
    })
    // console.log(entries);
}, options)

//Observer injects animation to right 
const observerRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = '.35s animateRight ease-in';
            entry.target.style.opacity = '1';
        }
    })
    // console.log(entries);
}, options)

//Setting left Observer on left animation seeking elements and viceversa
animatedElementsLeft.forEach(element => {
    observerLeft.observe(element);
})

animatedElementsRight.forEach(element => {
    observerRight.observe(element);
})


/////////////////////////////////////////////////////////////////////////////////////

const phoneNumberInput = document.getElementById('phoneNumberInput')?.children[0];

try{
    phoneNumberInput.addEventListener('input', updateFormatting);
} catch(e){
    console.log("phoneNumberInput is accessible only through contact page")
}

function updateFormatting() {


    let phoneNumberInputValue = phoneNumberInput.value;
    console.log(phoneNumberInputValue);

    let strippedValue = phoneNumberInputValue.replace(/\D/g, '');
    let totalLength = strippedValue.length;

    let newValue = "";

    if (totalLength > 0) {
        newValue = "(" + strippedValue;
    }
    if (totalLength > 3) {
        newValue = newValue.slice(0, 4) + ") " + newValue.slice(4, 11);
    }
    if (totalLength > 6) {
        newValue = newValue.slice(0, 9) + "-" + newValue.slice(9);
    }


    phoneNumberInput.value = newValue;
}







