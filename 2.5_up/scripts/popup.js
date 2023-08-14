Array.prototype.forEach.call(document.querySelectorAll(".imgContainer"), function(e) {
    e.onmouseover = function() {
      e.querySelector('.popup').style.display = 'inline';
    };
    e.onmouseout = function() {
      e.querySelector('.popup').style.display = 'none';
    };
  
  });