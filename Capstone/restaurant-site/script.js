// declaring all variables to be used in Event Listeners and functions
const moreInfoArea = document.getElementById('more_info');
const charCount = document.getElementById('charCount');
const phoneEntry = document.getElementById('phone_number')
const formRequired = [
    document.getElementById('first_name'),
    document.getElementById('more_info'),
    document.getElementById('phone_number'),
    document.getElementById('age')
];


const ageField = document.getElementById('age')
const formSubmit = document.getElementById('application')

// Form Validation for phone entry
phoneEntry.addEventListener('blur', () => {
    const phoneValue = phoneEntry.value;
    // Regular expression to match the desired phone format
    const phoneFormat = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneFormat.test(phoneValue) && phoneValue !== '') {
        alert("Please enter the phone number in the format: 111-222-3333");
        phoneEntry.value = '';
    }
});

// Form Validation for the age field
ageField.addEventListener('blur', () => {
    const ageValue = parseInt(ageField.value, 10);
    if (isNaN(ageValue) || ageValue < 21 || ageValue > 99) {
        alert(`${ageField.name} must be between 21 and 99.`);
        ageField.value = '';
    }
});

// Form Validation function to check array of required fields defined above
function validateForm(event) {
    for (let i = 0; i < formRequired.length; i++) {
        let x = formRequired[i].value;
        if (x.trim() === "") {
            alert(`${formRequired[i].name} must be filled out`);
            event.preventDefault();
            return false;
        }
    }
    formSubmit.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        // Gather the form data
        const formData = new FormData(this);
        const data = {};
        // Convert FormData to a plain object
        formData.forEach((value, key) => {
            data[key] = value;
        });
        // Log the form data to the console
        console.log(data);
    });
    return true;
}

// Form Validation to ensure required fields are included before the form are submitted.
formSubmit.addEventListener('submit', validateForm);

// Initialized charCount Variable for the moreInfoArea Event Listener
const maxLength = 30;
moreInfoArea.addEventListener('input', () => {
    if (moreInfoArea.value.length > maxLength) {
        moreInfoArea.value = moreInfoArea.value.slice(0, maxLength);
    }
    const currentLength = moreInfoArea.value.length;
    const remainingChars = maxLength - currentLength;
    charCount.textContent = `${remainingChars}`;
    // color the remaining characters
    if (remainingChars <= 0) {
        charCount.style.color = 'red';
    } else {
        charCount.style.color = 'black';
    }
});



