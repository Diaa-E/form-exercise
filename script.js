"use strict";

//take only required fields
const formFields = document.querySelectorAll("input[required]")

formFields.forEach(field => {

    //input triggers when anything is put into a field unlike change
    field.addEventListener("input", (e) =>{
        
        if (e.target.valid)
        {
            
        }
    })
})
