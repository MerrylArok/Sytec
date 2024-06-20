"use strict";


// Header class is a reusable WebComponent injected as a custom html element called header-component
//Adding <header-component></header-component> to any html file will inject the following html through addAdjacentHTML method. Initially injected via innerHTML, updated to remove cross site scripting vulnerabilities
class LandingPageHeader extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        let htmlHeader = `<header class="header">
    <nav id="headerFlexContainer">
    <a title="Homepage" href="./index.html"><img id="logo" src="./media/icons/Sytec.svg" alt="Sytec Logo"></a>

        <ul id="headerRight" class="lists">        
            <li><a id="headerContactButton" class="buttonTransition" href="#contactUs">CONTACT</a></li>
           
        </ul>
    </nav>
</header>`;

        this.insertAdjacentHTML('afterbegin', htmlHeader);
    }
}

class LandingPageFooter extends HTMLElement {
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
                <h4>7815- 127 Ave, Edmonton</h4>
            </li>
            <li>
                <h4><a href="tel:+7804849898">780-484-9898</a></h4>
            </li> 
            <li>
                <h4>Weekdays: 7AM to 4:30PM</h4>
            </li>
                      
        </ul>

        <ul>
            
            <li>
                <h3><a href="./design.html">Design</a></h3>
            </li>
            <li>
                <h3><a href="./manufacture.html">Manufacture</a></h3>
            </li>
            <li>
                <h3><a href="./deliver.html">Deliver</a></h3>
            </li>
        </ul>

        <ul>
                       
            <li>
                <h3><a href="./products.html">Products</a></h3>
            </li>
            <li>
            <h3><a href="./contact.html">Contact Us</a></h3>
            </li> 
            <li>
                <h3><a href="about.html">About Us</a></h3>
            </li>
        </ul>

        

        <ul id="externalLinks">
            <li><a href="https://ca.linkedin.com/company/sytec-manufacturing-ltd" target="_blank"><img
                        src="./media/icons/linkedin.png" alt="linkedinIcon"></a></li>
            <li><a href="https://www.google.com/maps/dir/Current+Location/53.584650741527945,-113.46097094106376" target="_blank"><img src="./media/icons/maps.png" alt="mapsIcon"></a>
            </li>
        </ul>

        <div id="footerTagline">
        <h2>Design</h2>
        <h2 id="second">Manufacture</h2>
        <h2 id="third">Deliver</h2>
        </div>
    </footer>
        `;

        this.insertAdjacentHTML("afterbegin", htmlFooter);

    }
}


customElements.define('landingpage-footer-component', LandingPageFooter);
customElements.define('landingpage-header-component', LandingPageHeader);

