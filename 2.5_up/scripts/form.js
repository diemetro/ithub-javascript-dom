document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    var submitBtn = document.getElementById("submit-btn");
    var successMessage = document.getElementById("success-message");
    var mailImage = document.getElementById('mailImage');
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      submitBtn.style.transition = 'transform 1s ease-in-out';
      submitBtn.style.transform = 'translateX(300px)';
      submitBtn.style.backgroundColor = "green";
      mailImage.classList.toggle('animate');
  
      submitBtn.textContent = "Отправляем, секундочку...";
  
      setTimeout(function() {
        submitBtn.textContent = "Отправить";
        submitBtn.style.transition = 'none';
        submitBtn.style.transform = 'translateX(0)';
        successMessage.style.display = "block";
        mailImage.classList.remove('animate');
        submitBtn.style.backgroundColor = "tomato";
      }, 5000);
    });
  });
  
  const mailImage = document.getElementById('mailImage');

