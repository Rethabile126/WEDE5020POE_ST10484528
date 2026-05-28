document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
  });
});
document.getElementById("enquiryForm")?.addEventListener("submit", function(e) {
  const phone = document.getElementById("phone").value;
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = "";

  if (phone && !/^\d{10}$/.test(phone)) {
    errorMsg.textContent = "Phone number must be 10 digits.";
    e.preventDefault();
    return;
  }

  alert("Thanks for your enquiry! We’ll reply with cost and availability.");
});
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  const message = document.getElementById("cmessage").value;
  const errorMsg = document.getElementById("contactError");
  errorMsg.textContent = "";

  if (message.length < 10) {
    errorMsg.textContent = "Message must be at least 10 characters.";
    e.preventDefault();
  } else {
    alert("Thanks for reaching out! We’ll reply soon.");
  }
});