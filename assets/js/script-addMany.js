// VARIABLES FOR ELEMENTS ON PAGE
const $submitBtn = document.getElementById(`submit-btn`);
const $clearBtn = document.getElementById(`clear-btn`);
const $guestNameInput = document.getElementById(`guest-name`);
const $previousGuestsDiv = document.getElementById(`previous-guests`);

// CHECK LOCAL STORAGE FOR PREVIOUS GUESTS
function checkGuestBook() {
    let guestsInStorage = localStorage.getItem(`guestBook`);
    console.log(guestsInStorage);
    let parsedStorage = JSON.parse(guestsInStorage);
    console.log(parsedStorage);
    if (guestsInStorage) {
        return parsedStorage;
    } else {
        return [];
    }
}

// ADD GUEST TO GUESTBOOK
function addGuest(guestName) {
    let allGuests = checkGuestBook();
    console.log(allGuests);
    allGuests.push(guestName);
    let stringifiedGuests = JSON.stringify(allGuests);
    localStorage.setItem(`guestBook`, stringifiedGuests);
    displayGuestBook();
}

// CLEAR GUESTBOOK
function clearGuestBook() {
    localStorage.removeItem(`guestBook`);
    displayGuestBook();
}

// DISPLAY GUESTBOOK on PAGE
function displayGuestBook() {
    $previousGuestsDiv.innerHTML = ``;
    const guestsInStorage = checkGuestBook();
    if (guestsInStorage.length) {
        for (let i = 0; i < guestsInStorage.length; i++) {
            const currentGuest = guestsInStorage[i];
            const $pTag = document.createElement(`p`);
            $pTag.innerText = currentGuest;
            $previousGuestsDiv.prepend($pTag);
        }
    } else {
        $previousGuestsDiv.innerHTML = 
            `<p>No guests have signed the guestbook yet!</p>`;
    }
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