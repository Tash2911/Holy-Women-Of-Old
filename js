function favourite() {
  let name = prompt("What is your name?");
  let favourite = prompt("Who is your favourite Woman in the bible?");
  alert(
    "Hi!" +
      " " +
      name +
      " " +
      "your favourite woman in the bible is" +
      " " +
      favourite
  );
  alert("Natasha's favourite woman in the bible is Hagar!");
  favourite = favourite.toLowerCase().trim();
}
let chooseButton = document.querySelector("button");
chooseButton.addEventListener("click", favourite);
