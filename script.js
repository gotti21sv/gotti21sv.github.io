const products = document.querySelectorAll(".product");
const catalog = document.querySelector(".catalog");
const buttons = document.querySelectorAll(".view-btn");


/* ==========================================
   ПОКАЗ ТОВАРОВ
========================================== */

window.addEventListener("load", () => {

    products.forEach((card, index) => {

        setTimeout(() => {
            card.classList.add("show");
        }, index * 45);

    });

});


/* ==========================================
   ПЕРЕХОД В КАРТОЧКУ ТОВАРА
========================================== */

products.forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;

        card.style.transform = "scale(.985)";

        setTimeout(() => {

            document.body.style.opacity = "0";
            document.body.style.transition = ".35s ease";

        }, 70);

        setTimeout(() => {

            location.href = "product.html?id=" + id;

        }, 420);

    });

});


/* ==========================================
   ПЕРЕКЛЮЧЕНИЕ ВИДА ТОВАРОВ
========================================== */

function setView(view) {

    catalog.classList.remove(
        "view-1",
        "view-4",
        "view-12"
    );

    catalog.classList.add("view-" + view);

    buttons.forEach(button => {

        button.classList.remove("active");

    });

    const activeButton =
        document.querySelector('[data-view="' + view + '"]');

    if (activeButton) {
        activeButton.classList.add("active");
    }

}


/* ==========================================
   КНОПКИ 1 / 4 / 9
========================================== */

buttons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const view = button.dataset.view;

        setView(view);

    });

});


/* ==========================================
   СТАРТОВЫЙ ВИД
   1 ТОВАР НА ЭКРАНЕ
========================================== */

setView("1");

document.querySelectorAll(".old-price").forEach(el => {
    el.remove();
});