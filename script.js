const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const leftDiv = document.getElementById("left-div");
const rightDivH1 = document.getElementById("right-div-h1");
const paragraph = document.getElementById("paragraph");
const closeBtn = document.getElementById("close");
const hambBtn = document.getElementById("hamb");
const header = document.getElementById("header")

const image1 = "url('images/desktop-image-hero-1.jpg')";
const image2 = "url('images/desktop-image-hero-2.jpg')";
const image3 = "url('images/desktop-image-hero-3.jpg')";
const backgroundImages = [image1, image2, image3]
const h1Text = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"]
const paragraphText = ["We provide unmatched quality, comfort, and style for property owners across the country. Out expersts combine form and function in bringing vision to life. Create a room in your own style with out collection and make your property a reflictionof you and what you love.", "With stores all over the world, it's easy for you to find furniture for tour home or place of business. Locally, we're in most major cities throughout the country. Find the branc nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for thier home and office."]

let i = 0;

leftDiv.style.backgroundImage = backgroundImages[i];
rightDivH1.innerText = h1Text[i];
paragraph.innerText = paragraphText[i];

function changeBakcgroundLeft(el) {

    if (i > 0) {
        i--;
        leftDiv.style.backgroundImage = backgroundImages[i];
        rightDivH1.innerText = h1Text[i];
        paragraph.innerText = paragraphText[i];
    } else {
        i = 2;
        leftDiv.style.backgroundImage = backgroundImages[i];
        rightDivH1.innerText = h1Text[i];
        paragraph.innerText = paragraphText[i];
    }
    
}

function changeBakcgroundRight(el) {
    if (i< 2) {
        i++;
        leftDiv.style.backgroundImage = backgroundImages[i];
        rightDivH1.innerText = h1Text[i];
        paragraph.innerText = paragraphText[i];
    } else {
        i = 0;
        leftDiv.style.backgroundImage = backgroundImages[i];
        rightDivH1.innerText = h1Text[i];
        paragraph.innerText = paragraphText[i];
    }
}

leftBtn.addEventListener("click", () =>{
    changeBakcgroundLeft(leftDiv)
});
rightBtn.addEventListener("click", () => {
    changeBakcgroundRight(leftDiv)
});

closeBtn.addEventListener("click", function() {
    header.style.top = "-70px";
})

hambBtn.addEventListener("click", function() {
    header.style.top = 0;
})