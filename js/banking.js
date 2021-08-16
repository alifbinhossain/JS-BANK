/* ---------------------- DEPOSIT BUTTON FUNCTIONALLITY --------------------- */
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get new deposit amount
  let depositField = document.getElementById("deposit-input");
  let newDepositAmount = parseFloat(depositField.value);

  //update total deposit & total balance
  let depositTotal = document.getElementById("total-deposit");
  let previousDepositAmount = parseFloat(depositTotal.innerText);
  let currentDepositAmount = previousDepositAmount + newDepositAmount;

  let balanceTotal = document.getElementById("balance-total");
  let previousBalance = parseFloat(balanceTotal.innerText);
  let newBalance = previousBalance + newDepositAmount;

  //conditions to deposit money
  if (newDepositAmount > 0 && isNaN(newDepositAmount) != true) {
    depositTotal.innerText = currentDepositAmount;
    balanceTotal.innerText = newBalance;
  } else {
    alert(`Please enter valid amount to deposit your money!`);
  }
  //clear deposit field
  depositField.value = "";
});

/* --------------------- WITHDRAW BUTTON FUNCTIONALLITY --------------------- */
document.getElementById("withdrawl-btn").addEventListener("click", function () {
  //get new withdraw amount
  let withdrawField = document.getElementById("withdrawl-input");
  let newWithdrawAmount = parseFloat(withdrawField.value);

  //update total withdraw  & total balance
  let withdrawTotal = document.getElementById("withdraw-total");
  let previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
  let currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

  let balanceTotal = document.getElementById("balance-total");
  let previousBalance = parseFloat(balanceTotal.innerText);
  let newBalance = previousBalance - newWithdrawAmount;

  //conditions to withdraw money
  if (previousBalance > newWithdrawAmount && newWithdrawAmount > 0) {
    withdrawTotal.innerText = currentWithdrawTotal;
    balanceTotal.innerText = newBalance;
  } else if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
    alert(`Please enter valid amount to withdraw your money!`);
  } else {
    alert(`You don't have ${newWithdrawAmount}$ in your account!`);
    alert(`Your current balance is ${previousBalance}$.`);
  }

  //clear withdraw field
  withdrawField.value = "";
});
