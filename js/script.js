var container = document.querySelector(".container");
var message = document.querySelector(".btn");
var lights = document.querySelectorAll(".light");
var messages = document.querySelectorAll(".btn");

// my Code
/*
var i = 1;
light[i-1].classList.add("active");
messages[i-1].classList.add("active");
setInterval(function () {
    light[i-1].classList.remove("active");
    messages[i-1].classList.remove("active");
    i++
    if (i > light.length) i = 1;      
    light[i-1].classList.add("active");    
    messages[i-1].classList.add("active");    
}, 1000 * i);
*/


var currentIndex = 0;
var totalLights = lights.length;

lights[currentIndex].classList.add("active");
messages[currentIndex].classList.add("active");

setInterval(function () {
  lights.forEach(light => light.classList.remove("active"));
  messages.forEach(msg => msg.classList.remove("active"));

  currentIndex = (currentIndex + 1) % totalLights;

  lights[currentIndex].classList.add("active");
  messages[currentIndex].classList.add("active");

}, 1000);

