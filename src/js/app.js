window.addEventListener("load", function () {
  var inputs = document.querySelectorAll(".input-file");
  console.log(inputs);
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener("change", function (e) {
      var fileName = "";
      fileName = e.target.value.split("\\").pop();

      if (fileName) label.innerHTML = fileName;
      else label.innerHTML = labelVal;
    });
  });
  console.log("All assets are loaded");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


var myNav = document.getElementById('navbar');
var navBar = document.getElementById('navbar-image');
var navBarHolder = document.getElementById('navbarSupportedContent');
window.onload = function () {
  if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
    myNav.style.height = '150px';
    navBar.style.height = '150px';
  }
};
window.onscroll = function () {
  if (document.body.scrollTop >= 80) {
    myNav.style.backgroundColor = '#1e453e';
    myNav.classList.add("navbar-min");
    navBarHolder.classList.add("navbar-min");
    myNav.style.height = '60px';
    navBar.style.height = '60px';
    navBar.style['padding-top'] = '0px';
  }
  else {
    myNav.style.backgroundColor = 'transparent';
    myNav.classList.remove("navbar-min");
    navBarHolder.classList.remove("navbar-min");
    if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
      myNav.style.height = '150px';
      navBar.style.height = '150px';
    } else {
      myNav.style.height = '120px';
      navBar.style.height = '120px';
      myNav.classList.remove("navbar-min");
      navBarHolder.classList.remove("navbar-min");
    }

    navBar.style['padding-top'] = '30px';
  }
};