/* 
    step-1: Add event listener to the deposit button
    step-2: Get the deposit amount from the deposit input field
    step-3: Get the current deposit total
    step-4: Add number to set total deposit
    step-5: Get balance current total
    step-6: Calculate current total balance
    step-7: Clear the input field
*/

document.getElementById("deposit-btn").addEventListener("click", function() {
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    if(isNaN(newDepositAmount)) {
        alert("Please provide a valid deposit number");
        return;
    }
    
    const totalDepositElement = document.getElementById("total-deposit");
    const previousDepositAmountString = totalDepositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    totalDepositElement.innerText = currentDepositTotal;
    
    const balanceTotalElement = document.getElementById("total-balance");
    const previousBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousTotalBalance + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    depositField.value = "";
})