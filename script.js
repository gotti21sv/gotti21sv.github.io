const products = [

{
name:"Blue Hoodie",
price:"1700 грн",
image:"hoodie-blue.jpg"
},

{
name:"18+ Hoodie",
price:"2000 грн",
image:"hoodie-18.jpg"
},

{
name:"Pink Hoodie",
price:"1800 грн",
image:"hoodie-pink.jpg"
},

{
name:"Cross T-Shirt",
price:"1000 грн",
image:"tshirt-cross.jpg"
},

{
name:"Black Shorts",
price:"1400 грн",
image:"shorts-black.jpg"
},

{
name:"18+ Longsleeve",
price:"1300 грн",
image:"longsleeve-18.jpg"
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