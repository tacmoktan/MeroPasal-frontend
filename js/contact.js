//import {showPage,time} from './jsImport/loader.js';
//window.onload =() => {
    /* loader js */
    /* setTimeout(showPage, time); */

/* 
    adding the <script type="module"> and
    uncommenting the above code causes 
    Uncaught Reference Error: submit_clicked not defined 
*/

    function submit_clicked() {
        /* event.preventDefault(); */ /* avoids refreshing page on click but then removes html5 validation */

        let messageDisplay = document.querySelector('#messageDisplay');
        messageDisplay.removeAttribute("class"); /* initially no class */

        let username = document.querySelector('#usernameTextBox').value.trim();
        const usernamePattern = /^[A-Za-z]+$/;

        let email = document.querySelector('#emailTextBox').value;
        const emailPattern = /^[^ ]+@gmail.com$/;

        let phone = document.querySelector('#phoneTextBox').value;
        const phonePattern = /^[0-9]{10}$/;

        if (usernamePattern.test(username) === true && emailPattern.test(email) === true && phonePattern.test(phone) === true) {
            console.log('submitted');
            messageDisplay.textContent = "Submission successful";
            messageDisplay.classList.add("success");
        } else {
            console.log('submission failed');
            messageDisplay.textContent = "Submission failed";
            messageDisplay.classList.add("error");
        }
    }
//}