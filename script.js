var tipAmountPerPerson = document.getElementById('total');
var totalAmountPerPerson = document.getElementById('total2');
var billInput = document.getElementById('bill-amount');
var numPeople = document.getElementById('numpeople-amount');
var btnContainer = document.getElementsByClassName("tip-buttons")
var btns = document.getElementsByClassName("tip-button-style");
var cstmInput = document.getElementById('custom-input');
var testing = document.getElementsByClassName("numpeople-amount");
var reset = document.getElementById('resetbutton');
var zeroWarning = document.getElementsByClassName('cant-be-zero');
var tipPercent = 0.15;

// Number of people initialized to 1
numPeople.defaultValue = 1;
                                     
// Tip amounts from buttons
for (var i = 0; i < 5; ++i) {
    btns[i].addEventListener('click', function(e) {
        tipPercent = parseFloat(e.target.value);
        console.log(tipPercent);
    })
}

// Tip amount from custom button
cstmInput.addEventListener('input', function(e) {
    tipPercent = (e.target.value / 100);
    console.log(tipPercent);
    getTotal();
})

function validateBillAmount() {
    if (billInput.value != 0) {
        return true;
    }
}

function validateInput() {
    if (numPeople.value != 0) {
        return true;
    }
}

// Calculate tip amounts function
function getTotal() {
    if (!validateBillAmount) {
        return;
    }
    else if (validateInput()) {
        testing[0].classList.remove('nozero');
        testing[0].classList.remove('nozero:hover');
        zeroWarning[0].classList.remove('cant-be-zero-visible');
    var x = parseFloat(billInput.value);
    var y = numPeople.value;
    totalAmountPerPerson.textContent = "$" + ((x + (x * tipPercent)) / y).toFixed(2);
        tipAmountPerPerson.textContent = "$" + ((x * tipPercent) / y).toFixed(2);
    } else {
        testing[0].classList.add('nozero');
        testing[0].classList.add('nozero:hover');
        zeroWarning[0].classList.add('cant-be-zero-visible');
        console.log('test');
        return;
    }
}

// Reset function
reset.addEventListener('click', function() {
    billInput.value = "";
    numPeople.value = 1;
    tipPercent = 0.15;
    cstmInput.value = "";
    tipAmountPerPerson.textContent = "$" + 0 + "." + 0 + 0;
    totalAmountPerPerson.textContent = "$" + 0 + "." + 0 + 0;
    zeroWarning[0].classList.remove('cant-be-zero-visible');
    testing[0].classList.remove('nozero');
    testing[0].classList.remove('nozero:hover');
})

// Event listeners
billInput.addEventListener('input', getTotal);
numPeople.addEventListener('input', getTotal);
for (var i = 0; i < 5; ++i) {
    btns[i].addEventListener('click', getTotal);
}



