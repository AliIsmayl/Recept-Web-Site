document
  .querySelector(".fa-circle-plus")
  .addEventListener("click", function () {
    const newInput = document.createElement("input");
    newInput.type = "text";
    document.querySelector(".receptAddBox").appendChild(newInput);
  });

document.getElementById("sendButton").addEventListener("click", function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  const textarea = document.querySelector("textarea");
  let message = "";

  inputs.forEach((input, index) => {
    message += `Product ${index + 1}: ${input.value}\n`;
  });

  message += `Description: ${textarea.value}`;

  alert(message);
});
