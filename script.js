const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (appointmentForm && formMessage) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const patientName = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!patientName || !phone) {
      formMessage.textContent = "Please enter your name and phone number.";
      return;
    }

    formMessage.textContent =
      "Thank you. Your appointment request has been recorded.";
    appointmentForm.reset();
  });
}
