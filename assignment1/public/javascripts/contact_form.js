/*
  File name:  contact_form.js
  Name:       Ruolan Wang
  StudentID:  301269755
  Date:       Oct 9, 2023
*/

(() => {
    "use strict";
  
    const forms = document.querySelectorAll(".needs-validation");
  
  // check the information 
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  