import {showPage,time} from './jsImport/loader.js';

window.onload = () => {
    /* loader js codes */
    /* setTimeout(showPage, time); */
    /* loader js codes */

    let popularItems = document.querySelector("#popularItems");
    let recentItems = document.querySelector("#recentItems");

    let cartItemsCount = 0;

    let selectedItem = {};  //dom object
    let viewCartItems = document.querySelector('#viewCartItems');
    let cartItemQuantity = document.querySelector('#cartItemQuantity');

    let groupSelectedItems = [];

    let ItemOuterHTML = "";
    //this prevents the addEventListener from being null
    if (popularItems)
        popularItems.addEventListener("click", addToCart_Click);
    
    if (recentItems)
        recentItems.addEventListener("click", addToCart_Click);

    function addToCart_Click() {
        if (event.target.className === 'addToCart btn') {
            event.target.setAttribute('class',"addToCart btn active");

            selectedItem = event.target.parentNode.parentNode; //selects the div class item
            
            //creating copy of selectedItem with inner contents
            let copySelectedItem = document.createElement('div');
            copySelectedItem.setAttribute("class", "items");
            copySelectedItem.innerHTML = selectedItem.innerHTML;

            //removing the buttons from the copy
            Array.from(copySelectedItem.children).forEach(item => {
                if (item.className === "itemBtns")
                    item.remove();
            });

            selectedItem = copySelectedItem;

            groupSelectedItems.push(selectedItem); //pushes the selected item to array
            cartItemsCount++;   //increment on count after item is pushed to array

            //latest edits start 
            //only unique items are counted in the cart
            let groupItemsLength = groupSelectedItems.length;
            if(groupItemsLength>1){

                //items innerHTML in the array BEFORE
                /* console.log("before");
                groupSelectedItems.forEach(item => console.log(item.innerHTML)); */
                

                groupSelectedItems.forEach( (item,i) => {
                    //checking whether recently added item is identical to other items in the group
                    
                    if(i<groupItemsLength-1){
                        /* console.log("i=",i,"groupItemsLength-1=",groupItemsLength-1);
                        console.log(groupSelectedItems[groupItemsLength-1].innerHTML);
                        console.log(item.innerHTML); */

                        if(groupSelectedItems[groupItemsLength-1].innerHTML === item.innerHTML){
                            groupSelectedItems.pop();
                            //decrement on array length after popping an item, to avoid 'Uncaught' error in next iteration
                            groupItemsLength--;  
                            cartItemsCount--; //decrement on count after popping an item
                            //console.log('identical item just got popped from array');
                        }
                    }
                });

                //items innerHTML in the array AFTER 
                /* console.log("after");
                groupSelectedItems.forEach(item => console.log(item.innerHTML)); */

            }
            //latest edits end

            //assigning session storage to each selected items individually
            groupSelectedItems.forEach( (item, i) => {
                sessionStorage.setItem(`selectedItem[${i}]`, item.outerHTML);
                /* console.log(sessionStorage.getItem(`selectedItem[${i}]`)); */ //to know what items are stored on session
            });

        } else {
            return;
        }

        if (cartItemsCount > 0)
            cartItemQuantity.style.padding = "5px";

        cartItemQuantity.innerText = cartItemsCount;
        sessionStorage.setItem('cartItemsCount', cartItemsCount);  //storing cartItemsCount on session
    }


}
