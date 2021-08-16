/* ----------------------- LOGIN BUTTON FUNCTIONALLITY ---------------------- */
document.getElementById("login-btn").addEventListener("click", function () {
  //get user email
  let userEmailInput = document.getElementById("email");
  let userEmail = userEmailInput.value;

  //get user password
  let userPasswordInput = document.getElementById("password");
  let userPassword = userPasswordInput.value;

  //condition to get access your account
  if (userEmail == "abc@gmail.com" && userPassword == "1234") {
    window.location.href = "bank.html";
  } else if (userEmail == "") {
    alert("Please enter your email");
  } else if (userPassword == "") {
    alert("Please enter your password");
  } else {
    alert("Incorrect email or password!");
  }
  //clear input field
  userEmailInput.value = "";
  userPasswordInput.value = "";
});

/* ------------------ FORGET PASSWORD BUTTON FUNCTIONALLITY ----------------- */
document
  .getElementById("forget-password")
  .addEventListener("click", function () {
    alert("Your email: abc@gmail.com");
    alert("Password: 1234");
  });

/* ---------------------- CANCEL BUTTON FUNCTIONALLITY ---------------------- */
document.getElementById("cancel-btn").addEventListener("click", function () {
  let userEmailInput = document.getElementById("email");
  let userPasswordInput = document.getElementById("password");

  //clear input field
  userEmailInput.value = "";
  userPasswordInput.value = "";
});
