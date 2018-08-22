# Small Business Website Mockup (Paper Company)
Hosted here: https://jnavarr56.github.io/Paper-Business-Website-Mockup/

### Description
This site is a mockup of a fictional paper company I created to show off my ability
to create an eye catching landing page, as well as incorporate scroll based event
listeners in conjunction with a clickable navigation bar that tracks the users position on the page.

Smooth scroll behavior allows for a comfortable design as the user travels across the
company's page and views information in each new section.

Chart.js is the only library used.



### Code Highlights
The following is a single event listener bound to a scroll event on the window verifies which section of the page the viewer must be on, according to scroll offset from the top. 
The navigation bar links are in the same order as the sections on the screen. Thus, by looping through and finding the index of the section (out of all section elements) the viewer is on, we can make the right navigation bar links change color by applying styles to that same index (out of the nav bar links);
```javascript
window.addEventListener("scroll", (event) => { 
  if (window.scrollY > 0 && window.scrollY < (productYCoordinate-110)) {
    var index = 0;
    var links = document.getElementsByClassName("navlink");
    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }
  }
  else if (window.scrollY >= (productYCoordinate-110) && window.scrollY < (pricingLinkYCoordinate - 115)) {
    console.log("activated");
    var index = 1;
    var links = document.getElementsByClassName("navlink");
    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }
  }
  else if (window.scrollY >= (pricingLinkYCoordinate-115) && window.scrollY < (investLinkYCoordinate - 115)) {
    console.log("activated");
    var index = 2;
    var links = document.getElementsByClassName("navlink");
    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }
  }
  else if (window.scrollY >= (investLinkYCoordinate - 115) && window.scrollY < (aboutLinkYCoordinate-115)) {
    console.log("activated");
    var index = 3;
    var links = document.getElementsByClassName("navlink");
    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }
  }
  else if (window.scrollY >= (aboutLinkYCoordinate-115) && window.scrollY < (careersLinkYCoordinate-115)) {
    console.log("activated");
    var index = 4;
    var links = document.getElementsByClassName("navlink");
    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }
  }
  else if (window.scrollY >= (careersLinkYCoordinate-115)) {
    console.log("activated");
    var index = 5;
    var links = document.getElementsByClassName("navlink");
    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }
  }
});
```

  - 




