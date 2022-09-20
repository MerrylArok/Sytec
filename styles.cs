* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Manrope, sans-serif;
  font-size: 16px;
  color: #1a1a1a;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

@font-face {
  font-family: "Inter";
  src: url("./Fonts/Inter.ttf");
}
@font-face {
  font-family: "Raleway";
  src: url("./Fonts/Raleway/RalewayMain.ttf");
}
@font-face {
  font-family: "Manrope";
  src: url("./Fonts/Manrope[wght].ttf");
}
h1 {
  font-family: Raleway;
  font-size: 5rem;
  margin: 1rem 0;
  color: #06645f;
}

h2 {
  font-family: Raleway;
  font-size: 2.5rem;
  font-weight: regular;
}

h3 {
  font-family: Inter;
  font-weight: normal;
  font-size: 1.5rem;
}

p,
#yearsAlive {
  font-size: 1.75rem;
}

.chunk {
  width: 100%;
  height: 100vh;
}

body {
  background-color: #f3f3f3;
}

.header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  padding: 0 3rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(251, 251, 251, 0.8);
  backdrop-filter: blur(0.7rem);
}
.header #headerFlexContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header #headerFlexContainer .lists {
  list-style-type: none;
}
.header #headerFlexContainer #logo {
  height: 4rem;
  padding: 1rem 2rem;
}
.header #headerFlexContainer #headerRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header #headerFlexContainer #headerRight > li {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1.5rem;
}
.header #headerFlexContainer #headerContactButton {
  background-color: transparent;
  color: #1a1a1a;
  font-size: 1.65rem;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  margin: 0.75rem 0;
  border-radius: 0.5rem;
}
.header #headerFlexContainer #headerContactButton:hover {
  background-color: #06645f;
  color: #fbfbfb;
  cursor: pointer;
}
.header #headerFlexContainer #headerMenuButton {
  background-color: transparent;
  width: 3.75rem;
  height: 1.5rem;
  border-radius: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.header #headerFlexContainer #headerMenuButton #longBar,
.header #headerFlexContainer #headerMenuButton #midBar,
.header #headerFlexContainer #headerMenuButton #shortBar {
  height: 0.25rem;
  width: 100%;
  background-color: #1a1a1a;
  transition: all 0.3s;
}
.header #headerFlexContainer #headerMenuButton #midBar {
  width: 75%;
}
.header #headerFlexContainer #headerMenuButton #shortBar {
  width: 55%;
}
.header #headerFlexContainer #headerMenuButton:hover {
  cursor: pointer;
}
.header #headerFlexContainer #headerMenuButton:hover #longBar,
.header #headerFlexContainer #headerMenuButton:hover #midBar,
.header #headerFlexContainer #headerMenuButton:hover #shortBar {
  width: 100%;
}

#mainPage {
  position: relative;
}
#mainPage #helloContent {
  position: absolute;
  top: 60%;
  margin: 0 17rem;
}
#mainPage #helloContent * {
  color: #fbfbfb;
}
#mainPage video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(55%);
}
#mainPage #iconScrollDown {
  position: absolute;
  left: 50%;
  background: url(./media/line-angle-down-icon.svg) center no-repeat;
  animation: 1.5s infinite scrollDown ease-in-out;
}

#customerContainer {
  background-color: #f3f3f3;
  padding: 4rem 17rem;
  margin: 5rem 0;
  position: relative;
}
#customerContainer #customerContent {
  position: absolute;
  top: 40%;
  left: 0;
  margin: 0 17rem;
  z-index: 100;
}
#customerContainer #logoFlexContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  position: relative;
}
#customerContainer #logoFlexContainer::after {
  background: linear-gradient(to right, #f3f3f3 0%, rgba(243, 243, 243, 0.7) 20%, rgba(243, 243, 243, 0.7) 80%, #f3f3f3 100%);
  content: " ";
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  Left: 0;
}
#customerContainer .logosRow1,
#customerContainer .logosRow2 {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
#customerContainer .logosRow1 {
  animation: logoBannerScroll 70s linear infinite;
}
#customerContainer .logosRow2 {
  animation: logoBannerScrollReverse 80s linear infinite;
}
#customerContainer .logoContainer {
  flex: 0 0 22rem;
  height: 7rem;
  margin: 4rem 0;
}
#customerContainer img {
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  object-fit: contain;
  pointer-events: none;
}

#customerContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#servicesChunk {
  background: rbg(243, 243, 243);
  display: flex;
  padding: 10rem 3rem;
}
#servicesChunk #servicesContent {
  text-align: left;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 3rem 0 3rem;
}
#servicesChunk #cardFlexContainer {
  flex: 4;
  display: flex;
}
#servicesChunk #cardFlexContainer .servicesCard {
  position: relative;
  flex: 1;
  margin: 0 1rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  border-radius: 0.25rem;
}
#servicesChunk #cardFlexContainer .servicesCard #learnMoreContainer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  transition: all 0.5s ease-in-out;
}
#servicesChunk #cardFlexContainer .servicesCard #learnMoreContainer h3 {
  flex: 0;
  max-width: 0;
  opacity: 0;
}
#servicesChunk #cardFlexContainer .servicesCard #learnMoreContainer i {
  flex: 1;
  content: "";
  display: inline-block;
  background: url("./media/arrow-thin-right-icon.svg") center no-repeat;
  height: 1rem;
}
#servicesChunk #cardFlexContainer #engineeringCard {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(./media/pics/Engineering.jpg) center no-repeat;
  background-size: cover;
  transform: translateY(-2rem);
}
#servicesChunk #cardFlexContainer #manfacturingCard {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(./media/pics/Welding.jpg) center no-repeat;
  background-size: cover;
}
#servicesChunk #cardFlexContainer #paintCard {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(./media/pics/Powder_Coat.jpg) center no-repeat;
  background-size: cover;
  transform: translateY(2rem);
}
#servicesChunk #cardFlexContainer .servicesCard {
  margin: 0.5rem 0;
  color: #fbfbfb;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
#servicesChunk #cardFlexContainer #learnMoreContainer h3 {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 3s ease-in-out;
}
#servicesChunk #cardFlexContainer #learnMoreContainer:hover h3 {
  max-width: 15rem;
  width: auto;
  overflow: hidden;
  opacity: 1;
}
#servicesChunk #cardFlexContainer #learnMoreContainer::after {
  content: "";
  background: url(./media/arrow-thin-right-icon.svg) no-repeat;
  height: 16px;
  width: 16px;
  display: inline-flex;
}

#teamChunk {
  background-color: orange;
}

@keyframes scrollDown {
  from {
    bottom: 7%;
    opacity: 0;
    width: 3rem;
    height: 3rem;
  }
  to {
    bottom: 4.5%;
    opacity: 0.6;
    width: 2rem;
    height: 2rem;
  }
}
@keyframes logoBannerScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-22rem * 8));
  }
}
@keyframes logoBannerScrollReverse {
  0% {
    transform: translateX(calc(-22rem * 8));
  }
  100% {
    transform: translateX(0);
  }
}

/*# sourceMappingURL=styles.cs.map */
