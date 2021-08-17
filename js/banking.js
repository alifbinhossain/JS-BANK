/* ---------------------- COMMON FUNTIONALLITY FOR REUSE --------------------- */
//store new amount
function getNewAmount(transactionID) {
  let inputField = document.getElementById(transactionID);
  let newAmount = parseFloat(inputField.value);
  //clear deposit field
  inputField.value = "";

  return newAmount;
}

//update total
function updateTotal(totalID, newAmount) {
  let total = document.getElementById(totalID);
  let previousAmount = parseFloat(total.innerText);
  let currentAmount = previousAmount + newAmount;
  total.innerText = currentAmount;
}

//update balance
function updateBalance(newAmount, isADD) {
  let balanceTotal = document.getElementById("balance-total");
  let previousBalance = parseFloat(balanceTotal.innerText);
  if (isADD == true) {
    let newBalance = previousBalance + newAmount;
    balanceTotal.innerText = newBalance;
  } else {
    let newBalance = previousBalance - newAmount;
    balanceTotal.innerText = newBalance;
  }
}

/* ---------------------- DEPOSIT BUTTON FUNCTIONALLITY --------------------- */
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get new deposit amount & clear the field
  let newDepositAmount = getNewAmount("deposit-input");

  //update total deposit & total balance
  if (newDepositAmount > 0 && isNaN(newDepositAmount) != true) {
    updateTotal("total-deposit", newDepositAmount);
    updateBalance(newDepositAmount, true);
  } else {
    alert(`Please enter valid amount to deposit your money!`);
  }
});

/* --------------------- WITHDRAW BUTTON FUNCTIONALLITY --------------------- */
document.getElementById("withdrawl-btn").addEventListener("click", function () {
  //get new withdraw amount & clear the field
  let newWithdrawAmount = getNewAmount("withdrawl-input");

  //update total withdraw  & total balance
  let previousBalance = parseFloat(
    document.getElementById("balance-total").innerText
  );
  if (previousBalance > newWithdrawAmount && newWithdrawAmount > 0) {
    updateTotal("withdraw-total", newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
  } else if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
    alert(`Please enter valid amount to withdraw your money!`);
  } else {
    alert(`You don't have ${newWithdrawAmount}$ in your account!`);
    alert(`Your current balance is ${previousBalance}$.`);
  }
});
