const products = document.querySelectorAll(".product");

/* ==========================================
   Ждём полной загрузки страницы
========================================== */

window.addEventListener("load", () => {

    const images = document.images;

    let loaded = 0;

    function reveal(){

        products.forEach((card,index)=>{

            setTimeout(()=>{

                card.classList.add("show");

            },index*45);

        });

    }

    if(images.length===0){

        setTimeout(reveal,120);

        return;

    }

    for(const img of images){

        if(img.complete){

            loaded++;

        }else{

            img.onload=()=>{

                loaded++;

                if(loaded===images.length){

                    setTimeout(reveal,120);

                }

            };

        }

    }

    if(loaded===images.length){

        setTimeout(reveal,120);

    }

});

/* ==========================================
   Переход
========================================== */

products.forEach(card=>{

card.addEventListener("click",()=>{

const id=card.dataset.id;

card.style.transform="scale(.985)";

setTimeout(()=>{

document.body.style.opacity="0";

document.body.style.transition=".35s ease";

},70);

setTimeout(()=>{

location.href="product.html?id="+id;

},420);

});

});
/* =========================================
   VIEW SWITCH
========================================= */

const catalog = document.querySelector(".catalog");
const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(btn=>btn.classList.remove("active"));

document
.querySelector('[data-view="4"]')
.classList.add("active");

catalog.classList.remove("view-1","view-12");

catalog.classList.add("view-4");

/* по умолчанию сразу открываем 4 карточки */

catalog.classList.add("view-4");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

if(button.classList.contains("active")) return;

buttons.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

catalog.classList.add("switching");

catalog.style.pointerEvents="none";

setTimeout(()=>{

catalog.classList.remove("view-1","view-4","view-12");

catalog.classList.add("view-"+button.dataset.view);

setTimeout(()=>{

catalog.classList.remove("switching");

catalog.style.pointerEvents="";

},120);

},180);

});

});
/* ==========================================
   CURRENCY
========================================== */

const pricesUAH = {
    "cross-shirt":"₴1,000.00 UAH",
    "black-hoodie":"₴1,700.00 UAH",
    "black-shorts":"₴1,400.00 UAH",
    "pink-hoodie":"₴1,800.00 UAH",
    "18-hoodie":"₴2,000.00 UAH",
    "18-longsleeve":"₴1,300.00 UAH"
};

const pricesEUR = {
    "cross-shirt":"€20",
    "black-hoodie":"€34",
    "black-shorts":"€28",
    "pink-hoodie":"€36",
    "18-hoodie":"€40",
    "18-longsleeve":"€26"
};

const currencyButton = document.getElementById("currencyButton");
const currencyMenu = document.getElementById("currencyMenu");
const currencyText = document.getElementById("currencyText");
const currencyOptions = document.querySelectorAll(".currency-option");

let currency = localStorage.getItem("currency") || "UAH";

function updatePrices(){

    document.querySelectorAll(".product").forEach(product=>{

        const id = product.dataset.id;

        const price = product.querySelector("p");

        if(currency==="UAH"){

            price.textContent = pricesUAH[id];

        }else{

            price.textContent = pricesEUR[id];

        }

    });

    currencyText.textContent =
        currency==="UAH"
        ? "UKRAINE 🇺🇦"
        : "EUROPE 🇪🇺";

}

updatePrices();

currencyButton.addEventListener("click",()=>{

    currencyMenu.classList.toggle("show");

});

currencyOptions.forEach(option=>{

    option.addEventListener("click",()=>{

        currency = option.dataset.currency;

        localStorage.setItem("currency",currency);

        updatePrices();

        currencyMenu.classList.remove("show");

    });

});

document.addEventListener("click",(e)=>{

    if(!e.target.closest(".currency-switch")){

        currencyMenu.classList.remove("show");

    }

});