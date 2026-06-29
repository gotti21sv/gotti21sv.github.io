const products = [

{
name:"BLACK HOODIE",
price:"1700 грн",
images:[
"8C130B78-B7E7-443F-9AE8-439ABEDD649B.png",
"IMG_0481.jpeg",
"IMG_0532.jpeg"
]
},

{
name:"18+ HOODIE",
price:"2000 грн",
images:[
"BDD2C093-6CAB-46D1-B3CE-4CC5F699F30C.png",
"IMG_0706.jpeg",
"07063FB1-2134-46AB-83B6-7F5A2B41ECDF.jpeg"
]
},

{
name:"PINK HOODIE",
price:"1800 грн",
images:[
"F62943A9-9AEB-4CDF-BA27-1C504C1FDCC8.png",
"IMG_0637.jpeg",
"IMG_0326.jpeg"
]
},

{
name:"CROSS T-SHIRT",
price:"1000 грн",
images:[
"261898D7-7E97-45C3-A30E-37091EA36423.png",
"IMG_2370.jpeg"
]
},

{
name:"BLACK SHORTS",
price:"1400 грн",
images:[
"F0OB8C5C-0ADE-494C-869D-DAE50880EE70.png",
"IMG_1596.jpeg",
"IMG_2152.jpeg"
]
},

{
name:"18+ LONGSLEEVE",
price:"1300 грн",
images:[
"FAB8E75D-6289-4ED5-BA9B-A2CBF6FB108C.png",
"IMG_0475.jpeg",
"IMG_0524.jpeg"
]
}

];

const shop = document.getElementById("products");

products.forEach((product,index)=>{

shop.innerHTML += `

<div class="product">

<img src="${product.image}" alt="${product.name}">

<h2>${product.name}</h2>

<p class="price">${product.price}</p>

<select id="size${index}">
<option>S</option>
<option>M</option>
<option>L</option>
<option>XL</option>
</select>

<button onclick="order(${index})">
ORDER
</button>

</div>

`;

});

function order(index){

const product = products[index];

const size = document.getElementById("size"+index).value;

const text =
`Здравствуйте!

Хочу заказать:

${product.name}

Размер: ${size}

Цена: ${product.price}`;

window.open(
`https://t.me/gotti21svv?text=${encodeURIComponent(text)}`,
"_blank"
);

}