
function myFunction() {
  document.getElementById("submenu").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.drop-btn')) {
  var myDropdown = document.getElementById("submenu");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
