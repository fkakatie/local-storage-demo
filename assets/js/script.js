// VARIABLES FOR ELEMENTS ON PAGE
const $submitBtn = document.getElementById(`submit-btn`);
const $clearBtn = document.getElementById(`clear-btn`);
const $guestNameInput = document.getElementById(`guest-name`);
const $previousGuestsDiv = document.getElementById(`previous-guests`);

/* Write a function to check local storage for previous guests */

function checkGuestBook() {

}

/* Write a functon to add new guest to the local storage */

function addGuest(param) {

}


/* Write a function to clear all guests from local storage */

function clearGuestBook() {

}

/* Write a function to display all guests from local storage on the page */

function displayGuestBook() {

}

// FUNCTION TO RUN ON DOM LOAD
document.addEventListener(`DOMContentLoaded`, function() {
    // FUNCTION TO RUN ON FORM SUBMISSION
    $submitBtn.addEventListener(`click`, function(e) {
        e.preventDefault(); // prevent default reload
        console.log($guestNameInput.value);
        // Call the function to add new guest to local storage 
    });

    // Call the function to check local storage for previou guests

    // Call the function to display all guests from local storage on the page

    $clearBtn.addEventListener(`click`, clearGuestBook);

})