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
