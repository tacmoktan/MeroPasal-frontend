//import { showPage,time } from './jsImport/loader.js';

//window.onload = () => {
    /* loader js */
    /* setTimeout(showPage,time); */
    /* loader js */

/* 
    adding the <script type="module"> and
    uncommenting the above code causes 
    Uncaught Reference Error: register_clicked not defined 
*/

    function register_clicked() {
        console.log('clicked');
        //event.preventDefault();  /* avoids refreshing page on click but then removes html5 validation */
        let messageDisplay = document.querySelector('#messageDisplay');
        messageDisplay.removeAttribute('class'); /* initially no class */

        let firstname = document.querySelector('#firstnameTextBox').value.trim();
        let lastname = document.querySelector('#lastnameTextBox').value.trim();
        let username = document.querySelector('#usernameTextBox').value.trim();
        const namePattern = /^[A-Za-z]+$/;

        let birthday = document.querySelector('#chooseDate').value;
        let hasDate = birthday ? true : false;

        let email = document.querySelector('#emailTextBox').value;
        const emailPattern = /^[^ ]+@gmail.com$/;

        let password = document.querySelector('#passwordTextBox').value;
        let confirmPassword = document.querySelector('#confirmPasswordTextBox').value;

        let hasPasswordMatch = password === confirmPassword ? true : false;
        if (hasPasswordMatch === false) {
            console.log('enter matching passwords');
            
        }

        let maleRadio = document.querySelector('#maleRadio');
        let femaleRadio = document.querySelector('#femaleRadio');

        let hasRadioChecked = maleRadio.checked || femaleRadio.checked ? true : false;

        if (namePattern.test(firstname) === true && namePattern.test(lastname) === true && hasDate === true && namePattern.test(username) === true && emailPattern.test(email) === true && hasPasswordMatch === true && hasRadioChecked === true) {
            console.log("registration successful");
            messageDisplay.textContent = 'Registration successful';
            messageDisplay.classList.add('success');
        } else {
            console.log("registration failed");
            messageDisplay.textContent = 'Registration failed';
            messageDisplay.classList.add('error');
        }

    }
//}