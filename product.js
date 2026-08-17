/* ---------------- PRODUCTS ---------------- */

const products = {

"black-hoodie":{
name:"BLACK HOODIE",
price:"₴1800.00",
images:[
"8C130B78-B7E7-443F-9AE8-439ABEDD649B.png"
]
},

"18-hoodie":{
name:"HOODIE «18+»",
price:"₴2000.00",
images:[
"5B6F7A08-C316-4A87-A4C5-1B3A0E911F03.jpeg"
]
},

"pink-hoodie":{
name:"HOODIE PINK",
price:"₴1800.00",
images:[
"27B780A1-FD3E-4162-BDE7-489782C64396.png"
]
},

"cross-shirt":{
name:"T-SHIRT BLACK",
price:"₴1000.00",
images:[
"261898D7-7E97-45C3-A30E-37091EA36423.png"
]
},

"black-shorts":{
name:"DOUBLEWAIST SHORTS",
price:"₴1400.00",
images:[
"F00B8C5C-0ADE-494C-869D-DAE50880EE70.png"
]
},

"18-longsleeve":{
name:"LONGSLEEVE «18+»",
price:"₴1300.00",
images:[
"FAB8E75D-6289-4ED5-BA9B-A2CBF6FB108C.png"
]
}

};

/* ---------------- GET PRODUCT ---------------- */

const id = new URLSearchParams(window.location.search).get("id");
if (!products[id]) {
    alert("Товар не знайдено");
    window.location.href = "shop.html";
    throw new Error("Unknown product: " + id);
}
const product = products[id];

const currency = localStorage.getItem("currency") || "UAH";

const image = document.getElementById("productImage");
const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");

const nameEl = document.getElementById("productName");
const priceEl = document.getElementById("productPrice");

const sizeSelect = document.getElementById("sizeSelect");

let currentImage = 0;

nameEl.textContent = product.name;

const euroPrices = {

"cross-shirt":"€18",

"black-hoodie":"€32",

"black-shorts":"€25",

"pink-hoodie":"€32",

"18-hoodie":"€35",

"18-longsleeve":"€23"

};

priceEl.textContent = product.price;

/* ---------------- CHANGE IMAGE ---------------- */

function showImage(index){

currentImage = index;

image.style.opacity = "0";
image.style.transform = "scale(.985)";

image.onload = () => {

image.style.opacity = "1";
image.style.transform = "scale(1)";

};

image.src = product.images[currentImage];
viewerImage.src = product.images[currentImage];

}

showImage(0);

/* ---------------- SWIPE ---------------- */

let startX = 0;

image.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX;

});

image.addEventListener("touchend",(e)=>{

const endX = e.changedTouches[0].clientX;

if(endX < startX - 50){

showImage((currentImage + 1) % product.images.length);

}

if(endX > startX + 50){

showImage((currentImage - 1 + product.images.length) % product.images.length);

}

});

/* ---------------- FULLSCREEN ---------------- */
image.addEventListener("click",()=>{

viewer.classList.add("show");

viewerImage.src = product.images[currentImage];

});

viewer.addEventListener("click",(e)=>{

if(e.target===viewer){

viewer.classList.remove("show");

}

});

/* ---------------- SWIPE FULLSCREEN ---------------- */

let viewerStartX = 0;

viewer.addEventListener("touchstart",(e)=>{

viewerStartX = e.touches[0].clientX;

});

viewer.addEventListener("touchend",(e)=>{

const endX = e.changedTouches[0].clientX;

if(endX < viewerStartX - 50){

showImage((currentImage + 1) % product.images.length);

}

if(endX > viewerStartX + 50){

showImage((currentImage - 1 + product.images.length) % product.images.length);

}

});



/* ---------------- BUY ---------------- */

document.getElementById("buyButton").addEventListener("click",()=>{

const image = encodeURIComponent(product.images[0]);

const name = encodeURIComponent(product.name);

const size = encodeURIComponent(sizeSelect.value);

const euroPrices = {

"cross-shirt":"€20",

"black-hoodie":"€34",

"black-shorts":"€28",

"pink-hoodie":"€36",

"18-hoodie":"€40",

"18-longsleeve":"€26"

};

const currentPrice =
currency==="EUR"
? euroPrices[id]
: product.price;

const price = encodeURIComponent(currentPrice);

window.location.href =
`checkout.html?product=${name}&price=${price}&image=${image}&size=${size}`;

});

/* ---------------- START ---------------- */

window.addEventListener("load",()=>{

image.style.opacity="0";

requestAnimationFrame(()=>{

showImage(0);

});

});