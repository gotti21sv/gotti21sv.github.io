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

const id = new URLSearchParams(location.search).get("id");
const product = products[id];

let currentImage = 0;
let quantity = 1;

const image = document.getElementById("productImage");
const thumbs = document.getElementById("thumbnails");

document.getElementById("productName").innerText = product.name;
document.getElementById("productPrice").innerText = product.price;

function changeImage(index){

currentImage=index;

image.style.opacity="0";

setTimeout(()=>{

image.src=product.images[currentImage];

image.style.opacity="1";

renderThumbnails();

},150);

}

function renderThumbnails(){

thumbs.innerHTML="";

product.images.forEach((src,index)=>{

const thumb=document.createElement("img");

thumb.src=src;

thumb.className="thumbnail";

if(index===currentImage){

thumb.classList.add("active");

}

thumb.onclick=()=>changeImage(index);

thumbs.appendChild(thumb);

});

}

changeImage(0);
document.getElementById("plus").onclick = function(){

quantity++;

document.getElementById("count").innerText = quantity;

};

document.getElementById("minus").onclick = function(){

if(quantity>1){

quantity--;

document.getElementById("count").innerText = quantity;

}

};

document.getElementById("buyButton").onclick = function(){

const size = document.getElementById("sizeSelect").value;

const text = `Привет!

Хочу заказать:

${product.name}

Размер: ${size}

Количество: ${quantity}

Цена: ${product.price}`;

window.open(
`https://t.me/gotti21svv?text=${encodeURIComponent(text)}`,
"_blank"
);
};