const products = [

{
name:"BLUE HOODIE",
price:"1700 UAH"
},

{
name:"18+ HOODIE",
price:"2000 UAH"
},

{
name:"PINK HOODIE",
price:"1800 UAH"
},

{
name:"CROSS T-SHIRT",
price:"1000 UAH"
},

{
name:"BLACK SHORTS",
price:"1400 UAH"
},

{
name:"18+ LONGSLEEVE",
price:"1300 UAH"
}

];

const shop=document.getElementById("products");

products.forEach((product,index)=>{

shop.innerHTML+=`

<div class="product">

<img src="products.jpg">

<h2>${product.name}</h2>

<p class="price">${product.price}</p>

<select id="size${index}">

<option>S</option>
<option>M</option>
<option>L</option>
<option>XL</option>

</select>

<button onclick="order('${product.name}','size${index}')">

ORDER

</button>

</div>

`;

});

function order(product,sizeId){

const size=document.getElementById(sizeId).value;

const message=
`Hello! I want to order:

${product}

Size: ${size}`;

window.open(

`https://t.me/gotti21svv?text=${encodeURIComponent(message)}`,

"_blank"

);

}