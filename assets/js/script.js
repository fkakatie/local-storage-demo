// VARIABLES FOR ELEMENTS ON PAGE
const $submitBtn = document.getElementById(`submit-btn`);
const $clearBtn = document.getElementById(`clear-btn`);
const $guestNameInput = document.getElementById(`guest-name`);
const $previousGuestsDiv = document.getElementById(`previous-guests`);

// FUNCTION TO RUN ON DOM LOAD
document.addEventListener(`DOMContentLoaded`, function() {
    // FUNCTION TO RUN ON FORM SUBMISSION
    $submitBtn.addEventListener(`click`, function(e) {
        e.preventDefault(); // prevent default reload
        console.log($guestNameInput.value);
    });

    $clearBtn.addEventListener(`click`, clearGuestBook);
})