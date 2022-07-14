const checker = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const form = document.querySelector(".main__form");
const submit = document.querySelector(".submit");
const email_input = document.querySelector(".email");

submit.addEventListener("click", function (e) {
  const email = document.querySelector(".email").value;
  if (email.match(checker)) {
    alert("Success! We will keep you notified.");
    email_input.value = "";
  } else {
    form.classList.add("error");
  }
  e.preventDefault();
  return;
});

email_input.addEventListener("keydown", function () {
  form.classList.remove("error");
});
