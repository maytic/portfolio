// variables
const navigationBar = document.querySelector(".navigation");

// scroll events
let start = 0;
window.addEventListener("scroll", function (e) {
  let lastYChange = window.pageYOffset;

  if (lastYChange > start) {
    console.log("going down");
    navigationBar.style.marginTop = "-20rem";
    // change start position
    start = lastYChange;
  } else if (lastYChange < start) {
    console.log("going up");
    start = lastYChange;

    navigationBar.style.marginTop = ".5rem";
  }
});

console.log(navigationBar);
