import { showPage,time } from './jsImport/loader.js';

window.onload = () => {
    /* setTimeout(showPage,time); */

    let cartHeader = document.querySelector('.cartHeader');
    let startShopping = document.querySelector('.startShopping');

    //retrieving cartItemsCount from session
    let cartItemsCount = sessionStorage.getItem('cartItemsCount');

    if (cartItemsCount > 0) {
        cartHeader.innerText = "Your items in the cart:";
        startShopping.remove(); //removing the startshopping div
    }

    //initializing array to store the selectedItems
    let itemsOuterHTML = [];

    for (let i = 0; i < cartItemsCount; i++) {
        itemsOuterHTML[i] = sessionStorage.getItem(`selectedItem[${i}]`);
    }

    //converting array into string
    itemsOuterHTML = itemsOuterHTML.join().replace(/,/g, ' ');



    let itemsWrapper = document.querySelector(".itemsWrapper");
    //creating a div element
    let itemDiv = document.createElement("div");

    itemsWrapper.appendChild(itemDiv);

    itemDiv.outerHTML = itemsOuterHTML;
    //the outerHTML replaces the itemDiv with all the contents of itemsOuterHTML

}