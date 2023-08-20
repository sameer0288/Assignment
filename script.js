document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      thankYouMessage.style.display = "block";
      form.reset();
    }
  });
});
