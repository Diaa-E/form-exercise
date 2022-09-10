"use strict";

//take only required fields
const pwdFields = document.querySelectorAll("input[type='password']")

pwdFields.forEach(field => {

    //input triggers when anything is put into a field unlike change
    field.addEventListener("input", (e) =>{
        
        if (pwdFields[0].innerHTML === pwdFields[1])
        {

        }
    })
})
