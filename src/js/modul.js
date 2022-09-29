"use strict";

let doughLabels = document.querySelectorAll(".item-popup__dough-label");

doughLabels[0].classList.add("_active");

doughLabels.forEach((label) => {
    label.addEventListener("click", function () {
        removeActiveLabel(doughLabels);
        label.classList.add("_active");
    });
}); 

let sizeLabels = document.querySelectorAll(".item-popup__size-label");

sizeLabels[0].classList.add("_active");

sizeLabels.forEach((label) => {
    label.addEventListener("click", function () {
        removeActiveLabel(sizeLabels);
        label.classList.add("_active");
    });
});

let rollLabels = document.querySelectorAll(".item-popup__roll-label");

rollLabels[0].classList.add("_active");

rollLabels.forEach((label) => {
    label.addEventListener("click", function () {
        removeActiveLabel(rollLabels);
        label.classList.add("_active");
    });
});

let checkBoxLabels = document.querySelectorAll(".item-popup__checkbox");

checkBoxLabels[0].classList.add("_active"); 

checkBoxLabels.forEach((label) => {
    label.addEventListener("click", function () {
        removeActiveLabel(checkBoxLabels);
        label.classList.add("_active");
    });
});
/* 
let itemPopupAddPrice = document.querySelectorAll('.item-popup__price')
itemPopupAddPrice[0].classList.add("_active"); 

itemPopupAddPrice.forEach((label) => {
    label.addEventListener("click", function () {
        removeActiveLabel(itemPopupAddPrice);
        label.classList.add("_active");
    });
});   */


function removeActiveLabel(labelArray) {
    labelArray.forEach((label) => {
        if (label.classList.contains("_active")) {
            label.classList.remove("_active");
        }
    });
}   


let itemPopup = document.querySelector(".item-popup");
let itemBtn = document.querySelectorAll(".products__products-item");
let itemImg = document.querySelectorAll(".products-item__img");
let itemTitle = document.querySelectorAll(".products-item__title");
let itemResept = document.querySelectorAll(".products-item__recept");
let itemPrice = document.querySelectorAll(".products-item__currency");

let itemBtnArray = Array.from(itemBtn);
let itemImgArray = Array.from(itemImg);
let itemTitleArray = Array.from(itemTitle);
let itemReseptArray = Array.from(itemResept);
let itemPriceArray = Array.from(itemPrice);

let popupWrapperBackgraund = document.querySelector(".popup-wrapper");

let itemPopupImg = document.querySelector(".item-popup__img");
let itemPopupTitle = document.querySelector(".item-popup__title");
let itemPopupIngr = document.querySelector(".item-popup__ingridients");
let itemPopupFullPrise = document.querySelector(".item-popup__full-price");


let closePopupBtn = document.querySelectorAll(".close-btn");

let itemPizzaSvg = document.querySelector(".item-popup__pizza-title-svg");
let itemRollSvg = document.querySelector(".item-popup__roll-title-svg");
let itemSushiSvg = document.querySelector(".item-popup__sushi-title-svg");
let itemSetSvg = document.querySelector(".item-popup__set-title-svg");
let itemSalladSvg = document.querySelector(".item-popup__sallad-title-svg");
let itemSnackSvg = document.querySelector(".item-popup__snack-title-svg");
let itemDessertSvg = document.querySelector(".item-popup__dessert-title-svg");
let itemSouseSvg = document.querySelector(".item-popup__sauce-title-svg")
let itemDrinkableSvg = document.querySelector(".item-popup__drinkable-title-svg");

let itemDoughTypeCheckBox = document.querySelector(".item-popup__dough-type");
let itemSizeTypeCheckBox = document.querySelector(".item-popup__size-type");
let itemRollTypeCheckBox = document.querySelector(".item-popup__roll-type");
let itemAddBlock = document.querySelector(".item-popup__add-block");
let itemPopupPrice = document.querySelector(".item-popup__price");


let itemPopupButton=document.querySelector(".item-popup__button");

    itemBtnArray.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            itemPopup.classList.add("_active");
            popupWrapperBackgraund.classList.add("_active");
            document.body.classList.add("fixed-body");

        let index = itemBtnArray.indexOf(item);
        let fullPrice = itemPriceArray[index].textContent.match(/\d+/);
    
        sizeLabels[0].addEventListener("click", () => {
            fullPrice = itemPriceArray[index].textContent.match(/\d+/);
            itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
        sizeLabels[1].addEventListener("click", () => {
            fullPrice = itemPriceArray[index].textContent.match(/\d+/) * 1.2;
            itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
        sizeLabels[2].addEventListener("click", () => {
            fullPrice = itemPriceArray[index].textContent.match(/\d+/) * 1.4;
            itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
        doughLabels[0].addEventListener("click", () => {
            fullPrice = itemPriceArray[index].textContent.match(/\d+/);
            itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        }); 
        doughLabels[1].addEventListener("click", () => {
            fullPrice = itemPriceArray[index].textContent.match(/\d+/) * 1.2;
            itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
        rollLabels[0].addEventListener("click", () => {
            fullPrice = itemPriceArray[index].textContent.match(/\d+/);
            itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
        rollLabels[1].addEventListener("click", () => {
            fullPrice = itemPriceArray[index].textContent.match(/\d+/) * 1.2 ;
            itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        });
    
    
       
        

        /*  itemPopupImg.src = itemImgArray[index].src;   */
        itemPopupTitle.innerText = itemTitleArray[index].textContent;
        itemPopupIngr.innerText = itemReseptArray[index].textContent;
        itemPopupFullPrise.innerText = `Итого: ${Math.round(fullPrice)} ₽`;
        


        if (item.parentElement.classList.contains("products-pizzas")){

            itemPizzaSvg.classList.add("_active");
            itemDoughTypeCheckBox.classList.add("_active");
            itemSizeTypeCheckBox.classList.add("_active");
            itemAddBlock.classList.add("_active");
             
        }
        if(item.parentElement.classList.contains("products-rolls")){
            itemRollSvg.classList.add("_active");
            itemRollTypeCheckBox.classList.add("_active");
        }
        if(item.parentElement.classList.contains("products-sushies")){
            itemSushiSvg.classList.add("_active");
        }
        if(item.parentElement.classList.contains("products-sets")){
            itemSetSvg.classList.add("_active");
        }
        
        if(item.parentElement.classList.contains("products-salads")){
            itemSalladSvg.classList.add("_active");
        }
        if(item.parentElement.classList.contains("products-snacks")){
            itemSnackSvg.classList.add("_active");
        }
        if(item.parentElement.classList.contains("products-desserts")){
            itemDessertSvg.classList.add("_active");
        }
        if(item.parentElement.classList.contains("products-sauces")){
            itemSouseSvg.classList.add("_active");
        }
        if(item.parentElement.classList.contains("products-drinkables")){
            itemDrinkableSvg.classList.add("_active");
        }
        });
    });

    closePopupBtn.forEach((closeBtn) => {
        closeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            popupWrapperBackgraund.classList.remove("_active");
            itemPopup.classList.remove("_active");
            document.body.classList.remove("fixed-body");
            
            itemPizzaSvg.classList.remove("_active");
            itemDoughTypeCheckBox.classList.remove("_active");
            itemSizeTypeCheckBox.classList.remove("_active");
            itemAddBlock.classList.remove("_active");

            itemRollSvg.classList.remove("_active");
            itemRollTypeCheckBox.classList.remove("_active");

            itemSushiSvg.classList.remove("_active");
            itemSetSvg.classList.remove("_active");
            itemSalladSvg.classList.remove("_active");
            itemSnackSvg.classList.remove("_active");
            itemDessertSvg.classList.remove("_active");
            itemSouseSvg.classList.remove("_active");
            itemDrinkableSvg.classList.remove("_active");
        });
    });
    document.addEventListener("click", function(e){
        if(e.target=== popupWrapperBackgraund){
        popupWrapperBackgraund.classList.remove("_active");
        if(itemPopup !== null){
            itemPopup.classList.remove("_active");
        }
        document.body.classList.remove("fixed-body");
        itemPizzaSvg.classList.remove("_active");
        itemDoughTypeCheckBox.classList.remove("_active");
        itemSizeTypeCheckBox.classList.remove("_active");
        itemAddBlock.classList.remove("_active");

        itemRollSvg.classList.remove("_active");
        itemRollTypeCheckBox.classList.remove("_active");

        itemSushiSvg.classList.remove("_active");
        itemSetSvg.classList.remove("_active");
        itemSalladSvg.classList.remove("_active");
        itemSnackSvg.classList.remove("_active");
        itemDessertSvg.classList.remove("_active");
        itemSouseSvg.classList.remove("_active");
        itemDrinkableSvg.classList.remove("_active");
    }
}) ;

itemPopupButton.addEventListener('click', () => {
    popupWrapperBackgraund.classList.remove("_active");
    itemPopup.classList.remove("_active");
    document.body.classList.remove("fixed-body");
    
    itemPizzaSvg.classList.remove("_active");
    itemDoughTypeCheckBox.classList.remove("_active");
    itemSizeTypeCheckBox.classList.remove("_active");
    itemAddBlock.classList.remove("_active");

    itemRollSvg.classList.remove("_active");
    itemRollTypeCheckBox.classList.remove("_active");

    itemSushiSvg.classList.remove("_active");
    itemSetSvg.classList.remove("_active");
    itemSalladSvg.classList.remove("_active");
    itemSnackSvg.classList.remove("_active");
    itemDessertSvg.classList.remove("_active");
    itemSouseSvg.classList.remove("_active");
    itemDrinkableSvg.classList.remove("_active");
}); 


