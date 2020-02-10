// SECTION CODE FOR SCROLL BACK TO TOP

var backtop = document.getElementById("backtop");
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backtop.style.display = "block";
    } else {
     backtop.style.display = "none";
     }
    }
        
    function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
    }


// SECTION EASTER EGG
function searchs(){
  alert("This Feature is under development. Coming Soon!")
}






