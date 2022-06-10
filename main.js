function handleClick(inputId, isIncrease, fareId, unit) {
    const ticketInput = document.getElementById(inputId);
    ticketInputInt = parseInt(ticketInput.value);
    if (isIncrease == true) {
        ticketInput.value = ticketInputInt + 1;
    }
    if (isIncrease == false && ticketInput.value > 0) {
        ticketInput.value = ticketInputInt - 1;
    }
    const newTicketInput = ticketInput.value;

    const ticketFare = document.getElementById(fareId);
    const ticketFareInt = parseInt(ticketFare.innerText);
    ticketFare.innerText = unit * newTicketInput;
    const ticketFareAmount = ticketFare.innerText;

    totalCalculator();
}

function totalCalculator() {
    const subtotal = document.getElementById("subtotal");
    const subtotalInt = parseInt(subtotal.innerText);

    const firstClassInputInt = getInputValue("first-class-input");
    const economyClassInputInt = getInputValue("economy-class-input");

    subtotal.innerText = (firstClassInputInt * 150) + (economyClassInputInt * 100);
    const subTotalFare = subtotal.innerText;
    const subTotalFareInt = parseInt(subTotalFare);

    const tax = document.getElementById("tax");
    tax.innerText = subTotalFareInt * 0.1;
    const totalTax = parseInt(tax.innerText);

    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = subTotalFareInt + totalTax;
}

function getInputValue(inputId) {
    const economyClassInput = document.getElementById(inputId);
    const economyClassInputInt = parseInt(economyClassInput.value);
    return economyClassInputInt;
}