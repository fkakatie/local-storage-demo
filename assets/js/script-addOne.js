// VARIABLES FOR ELEMENTS ON PAGE
const $submitBtn = document.getElementById(`submit-btn`);
const $clearBtn = document.getElementById(`clear-btn`);
const $guestNameInput = document.getElementById(`guest-name`);
const $previousGuestsDiv = document.getElementById(`previous-guests`);

// CHECK LOCAL STORAGE FOR PREVIOUS GUESTS
function checkGuestBook() {
    let guestInStorage = localStorage.getItem(`guest`);
    if (guestInStorage) {
        return guestInStorage;
    } else {
        return `No guests have signed the guestbook yet!`;
    }
}

// ADD GUEST TO GUESTBOOK
function addGuest(guestName) {
    localStorage.setItem(`guest`, guestName);
    displayGuestBook();
}

// CLEAR GUESTBOOK
function clearGuestBook() {
    localStorage.removeItem(`guest`);
    displayGuestBook();
}

// DISPLAY GUESTBOOK on PAGE
function displayGuestBook() {
    const guestsInStorage = checkGuestBook();
    $previousGuestsDiv.innerHTML = 
        `<p>${guestsInStorage}</p>`;
}

// FUNCTION TO RUN ON DOM LOAD
document.addEventListener(`DOMContentLoaded`, function() {
    // FUNCTION TO RUN ON FORM SUBMISSION
    displayGuestBook();

    $submitBtn.addEventListener(`click`, function(e) {
        e.preventDefault(); // prevent default reload
        // console.log($guestNameInput.value);
        addGuest($guestNameInput.value);
    })

    $clearBtn.addEventListener(`click`, clearGuestBook);
})