// For Donation Field
function donationInputField(id){
    const inputField = document.getElementById(id).value ;
    const inputValue = parseFloat(inputField);
    return inputValue;
}

// For balance value
function balanceValue(id){
    const balance = document.getElementById(id).innerText;
    const balanceValue = parseFloat(balance);
    return balanceValue;
}

// For Donation Title
function donationTitle(id){
    const titleTxt = document.getElementById(id).innerText;
    return titleTxt;
}