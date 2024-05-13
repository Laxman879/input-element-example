let inputElement = document.getElementById("inputElement");

let signTextElement = document.getElementById("signInText");

function signIn() {
  let inputValue = inputElement.value;
  let verfiyText = "Hi " + inputValue + ", Verify Your Account...!";
  signTextElement.textContent = verfiyText;
}
