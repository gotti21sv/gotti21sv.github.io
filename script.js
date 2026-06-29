const products = [

{
name:"Black Hoodie",
price:"1700 грн",
image:8C130B78-
B7E7-443F-9AE8-439ABEDD649B.png
},

{
name:"18+ Hoodie",
price:"2000 грн",
image:BDD2C093-6CAB-46D1-
B3CE-4CC5F699F30C.png
},

{
name:"Pink Hoodie",
price:"1800 грн",
image:F62943A9-9AEB-4CDF-
BA27-1C504C1FDCC8.png
},

{
name:"Cross T-Shirt",
price:"1000 грн",
image:261898D7-7E97-45C3-
A30E-37091EA36423.png
},

{
name:"Black Shorts",
price:"1400 грн",
image:F0OB8C5C-OADE-494C-869D-
DAE50880EE70.png
},

{
name:"18+ Longsleeve",
price:"1300 грн",
image:FAB8E75D-6289-4ED5-BA9B-
A2CBF6FB108C.png
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