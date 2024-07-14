function favourite() {
  let name = prompt("What is your name?");
  alert("My name is" + " ");
  let favourite = prompt("Who is your favourite Woman in the bible?");
  alert("My favourite woman in the bible is" + " ");
  favourite = favourite.toLowerCase().trim();
}
let chooseButton = document.querySelector("button");
chooseButton.addEventListener("click", favourite);
