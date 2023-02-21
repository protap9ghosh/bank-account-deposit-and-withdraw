/* 
    step-1: Add event handler with the withdraw button
    step-2: Get the withdraw amount from the withdraw input field
    step-2.5: Also make sure to convert the input into a number by using parseFloat
    step-3: Get previous withdraw total
    step-4: Calculate total withdraw amount
    step-4.5: Set total withdraw amount
    step-5: Get the previous total balance
    step-6: Calculate new balance total
    step-6.5: Set the new balance total
    step-7: Clear the input field
*/

document.getElementById("withdraw-btn").addEventListener("click", function() {
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = "";
    
    if(isNaN(newWithdrawAmount)) {
        alert("Please provide a valid number");
        return;
    }
    
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousStringWithdraw = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousStringWithdraw);

    const totalBalanceElement = document.getElementById("total-balance");
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal) {
        alert("Don't have enough money, please deposit");
        return;
    }
    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    totalBalanceElement.innerText = newBalanceTotal;

})
