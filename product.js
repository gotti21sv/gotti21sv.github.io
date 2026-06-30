const products = {

"black-hoodie":{
name:"BLACK HOODIE",
price:"₴1,700.00 UAH",
images:[
"8C130B78-B7E7-443F-9AE8-439ABEDD649B.png",
"IMG_0481.jpeg",
"IMG_0532.jpeg"
]
},

"18-hoodie":{
name:"18+ HOODIE",
price:"₴2,000.00 UAH",
images:[
"BDD2C093-6CAB-46D1-B3CE-4CC5F699F30C.png",
"IMG_0706.jpeg",
"07063FB1-2134-46AB-83B6-7F5A2B41ECDF.jpeg"
]
},

"pink-hoodie":{
name:"PINK HOODIE",
price:"₴1,800.00 UAH",
images:[
"F62943A9-9AEB-4CDF-BA27-1C504C1FDCC8.png",
"IMG_0637.jpeg",
"IMG_0326.jpeg"
]
},

"cross-shirt":{
name:"CROSS T-SHIRT",
price:"₴1,000.00 UAH",
images:[
"261898D7-7E97-45C3-A30E-37091EA36423.png",
"IMG_2370.jpeg"
]
},

"black-shorts":{
name:"BLACK SHORTS",
price:"₴1,400.00 UAH",
images:[
"F00B8C5C-0ADE-494C-869D-DAE50880EE70.png",
"IMG_1596.jpeg",
"IMG_2152.jpeg"
]
},

"18-longsleeve":{
name:"18+ LONGSLEEVE",
price:"₴1,300.00 UAH",
images:[
"FAB8E75D-6289-4ED5-BA9B-A2CBF6FB108C.png",
"IMG_0475.jpeg",
"IMG_0524.jpeg"
]
}

};

const id = new URLSearchParams(window.location.search).get("id");
const product = products[id];

const image = document.getElementById("productImage");
const nameEl = document.getElementById("productName");
const priceEl = document.getElementById("productPrice");

const sizeSelect = document.getElementById("sizeSelect");

const countEl = document.getElementById("count");

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");

let currentImage = 0;
let quantity = 1;

nameEl.textContent = product.name;
priceEl.textContent = product.price;

function showImage(index){

currentImage = index;

image.style.opacity = "0";
image.style.transform = "scale(.985)";

setTimeout(()=>{

image.src = product.images[currentImage];

image.style.opacity = "1";
image.style.transform = "scale(1)";

viewerImage.src = product.images[currentImage];

},180);

}

showImage(0);
/* ---------- SWIPE ---------- */

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


/* ---------- FULLSCREEN ---------- */

image.onclick = ()=>{

viewer.classList.add("show");

viewerImage.src = product.images[currentImage];

};

viewer.onclick = ()=>{

viewer.classList.remove("show");

};


/* ---------- SWIPE FULLSCREEN ---------- */

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


/* ---------- QUANTITY ---------- */

document.getElementById("plus").onclick = ()=>{

quantity++;

countEl.textContent = quantity;

};

document.getElementById("minus").onclick = ()=>{

if(quantity > 1){

quantity--;

countEl.textContent = quantity;

}

};


/* ---------- BUY ---------- */

document.getElementById("buyButton").onclick = ()=>{

const text = `Привіт!

Хочу замовити:

${product.name}

Розмір: ${sizeSelect.value}

Кількість: ${quantity}

Ціна: ${product.price}`;

window.open(

`https://t.me/gotti21sv?text=${encodeURIComponent(text)}`,

"_blank"

);

};


/* ---------- FIRST ANIMATION ---------- */

setTimeout(()=>{

image.style.transform="translateX(-10px)";

setTimeout(()=>{

image.style.transform="translateX(0)";

},250);

},800);