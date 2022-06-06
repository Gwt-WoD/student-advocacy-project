window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar1").style.backgroundColor = "rgba(240, 128, 128, 0.445)";
  } else {
  document.getElementById("navbar1").style.backgroundColor= "#333";
  }
}
