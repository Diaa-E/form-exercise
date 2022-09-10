"use strict";

//fetch password fields
const pwdFields = document.querySelectorAll("input[type='password']");
const msg = "Passwords are not matching";

pwdFields.forEach(field => {

    //input triggers when anything is put into a field unlike change
    field.addEventListener("input", (e) =>{
        
        if (pwdFields[0].value !== pwdFields[1].value)
        {
            pwdFields[0].setCustomValidity(msg);
            pwdFields[1].setCustomValidity(msg);
        }
        else
        {
            //marks as valid
            pwdFields[0].setCustomValidity("");
            pwdFields[1].setCustomValidity("");
        }
    })
})
