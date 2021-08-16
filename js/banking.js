/* ---------------------- DEPOSIT BUTTON FUNCTIONALLITY --------------------- */
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get new deposit amount
  let depositField = document.getElementById("deposit-input");
  let newDepositAmount = parseFloat(depositField.value);

  //updat deposit total
  let depositTotal = document.getElementById("total-deposit");
  let previousDepositAmount = parseFloat(depositTotal.innerText);

  let currentDepositAmount = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = currentDepositAmount;

  //update balance
  let balanceTotal = document.getElementById("balance-total");
  let previousBalance = parseFloat(balanceTotal.innerText);

  let newBalance = previousBalance + newDepositAmount;
  balanceTotal.innerText = newBalance;

  //clear deposit field
  depositField.value = "";
});

/* --------------------- WITHDRAW BUTTON FUNCTIONALLITY --------------------- */
document.getElementById("withdrawl-btn").addEventListener("click", function () {
  //get new withdraw amount
  let withdrawField = document.getElementById("withdrawl-input");
  let newWithdrawAmount = parseFloat(withdrawField.value);

  //update total withdraw  & balance
  let withdrawTotal = document.getElementById("withdraw-total");
  let previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
  let currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

  let balanceTotal = document.getElementById("balance-total");
  let previousBalance = parseFloat(balanceTotal.innerText);

  let newBalance = previousBalance - newWithdrawAmount;
  if (previousBalance > newWithdrawAmount) {
    withdrawTotal.innerText = currentWithdrawTotal;
    balanceTotal.innerText = newBalance;
  } else {
    alert(`You don't have ${newWithdrawAmount}$ in your account!`);
    alert(`Your current balance is ${previousBalance}$.`);
  }

  //clear withdraw field
  withdrawField.value = "";
});
