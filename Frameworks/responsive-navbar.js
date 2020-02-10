// SECTION CODE FOR RESPONSIVE NAVBAR
function Navbar() {
    var x = document.getElementById("responsive-navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }