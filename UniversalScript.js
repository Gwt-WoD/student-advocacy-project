//initialization for menu
window.onload = function() { initalize(); }

function initalize() {
  //setup header
  var container = document.querySelector('header');
  var html ='<!DOCTYPE html><html lang="en"><head><link href="UniversalMenu.css" rel="stylesheet" type="text/css" /><title>TSI</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div class="navbar1" id="navbar1"><img src="photos/logo.png" usemap="#map2" style="width:48px;height48px;float:left;"><map name="map2">  <area shape="rect" coords="0,0,48,48" alt="Computer" href="index.html"></map> <div class="dropdown1"><button class="dropbtn1"> About     <i class="fa fa-caret-down1"></i>  </button>  <div class="dropdown-content1">    <a href="1-index.html">About us</a>   <a href="FAQ-index.html">FAQ</a> <a href="1-3-index.html">How to Be An Activist</a>  </div></div><div class="dropdown2">  <button class="dropbtn2">Articles     <i class="fa fa-caret-down2"></i>  </button>  <div class="dropdown-content2">    <a href="2-1-index.html">Examples of Activism</a>    <a href="2-2-index.html">How to Delegate Tasks</a>     </div> </div> <div class = "dropdown3"> <button class="dropbtn3">Dropdown <i class="fa fa-caret-down3"/> </i> </button> <div class="dropdown-content3"> <a href="#"> Link 1</a> <a href="#">Link 2</a> <a href="#">Link 3</a> </div> </div> <div class="menuButton"><a onclick ="window.scrollTo(0,document.body.scrollHeight);">Contact us</a></div>  <div class="menuButton"><a href = "D-index.html"> Donate </a> </div> </div> ';
  if (Math.floor(Math.random() * 20) == 0)
  {
    html += "<>";
  }
  container.insertAdjacentHTML('beforebegin', html);
  //setup footer
  container = document.querySelector('html');
  html ='<div class="footer"><div class="moreonus"> <h1><b>More On Us</b></h1> <p>2908 113th Ave NE</p> <p>Lake Stevens, WA 98258</p> <p>- Lake Stevens High School</p> <a href = "https://docs.google.com/forms/d/e/1FAIpQLSfkbNw47kiIqV4F-bxmUqfAcQAy3G5SoM9JfYeMzlvY9m8mAQ/viewform" style="color:lightslategray">Tell us how to improve </a> </div>         <div class="followus"> <h1><b>Follow Us</b></h1> <p><a href="https://twitter.com/studentinsite?s=11&t=bUFWeLGIHtnxavur4Mdh4A " style="color:#ddd;text-decoration-color:#ddd;">twitter</a></p> <p><a href="https://www.tiktok.com/t/ZTd3tEndE/ " style="color:#ddd;text-decoration-color:#ddd;">tik tok</a></p> <p><a href="https://instagram.com/the.student.initiative?igshid=YmMyMTA2M2Y= " style="color:#ddd;text-decoration-color:#ddd;">instagram</a></p> <p><a href="mailto:the.student.initiative22@gmail.com" style="color:#ddd;text-decoration-color:#ddd;">gmail</a></p> </div> <div class="ourwork"> <h1><b>our work</b></h1> <p><a href="https://twitter.com/squarespace" style="color:#ddd;text-decoration-color:#ddd;">twitter</a></p><p><a href="https://twitter.com/squarespace" style="color:#ddd;text-decoration-color:#ddd;">twitter</a></p> <p><a href="https://www.facebook.com/squarespace" style="color:#ddd;text-decoration-color:#ddd;">facebook</a></p> </div><div class="footer3">  </div></div>';
container.insertAdjacentHTML('beforeend', html);

}

//scroll function
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar1").style.backgroundColor = "rgba(240, 128, 128, 0.445)";
  } else {
  document.getElementById("navbar1").style.backgroundColor= "#333";
  }
}