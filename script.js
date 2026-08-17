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

/* ==========================================
   PRICES
========================================== */

/* ==========================================
   CURRENCY
========================================== */

const prices = {

    "cross-shirt": {
        oldUAH: "₴1,000.00",
        newUAH: "₴1,000.00"
    },

    "black-hoodie": {
        oldUAH: "₴1,800.00",
        newUAH: "₴1,800.00"
    },

    "black-shorts": {
        oldUAH: "₴1,400.00",
        newUAH: "₴1,400.00"
    },

    "pink-hoodie": {
        oldUAH: "₴1,800.00",
        newUAH: "₴1,800.00"
    },

    "18-hoodie": {
        oldUAH: "₴2,000.00",
        newUAH: "₴2,000.00"
    },

    "18-longsleeve": {
        oldUAH: "₴1,300.00",
        newUAH: "₴1,300.00"
    }

};

const currencyButton = document.getElementById("currencyButton");
const currencyMenu = document.getElementById("currencyMenu");
const currencyText = document.getElementById("currencyText");
const currencyOptions = document.querySelectorAll(".currency-option");

let currency = localStorage.getItem("currency") || "UAH";
function updatePrices(){

    document.querySelectorAll(".product").forEach(product=>{

        const id = product.dataset.id;
        const item = prices[id];

        if(!item) return;

        const newPrice = product.querySelector(".new-price");
        const oldPrice = product.querySelector(".old-price");

        if(currency === "UAH"){

            if(newPrice){
                newPrice.textContent = item.oldUAH;
            }

        }else{

            if(newPrice){
                newPrice.textContent = item.oldEUR;
            }

        }

        /* Убираем старую зачёркнутую цену */
        if(oldPrice){
            oldPrice.style.display = "none";
        }

        /* Убираем SALE */
        const saleTag = product.querySelector(".sale-tag");

        if(saleTag){
            saleTag.style.display = "none";
        }

    });

    currencyText.textContent =
        currency === "UAH"
        ? "UKRAINE 🇺🇦"
        : "EUROPE 🇪🇺";

}

updatePrices();

currencyButton.addEventListener("click", () => {
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
