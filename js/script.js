// variables
const navigationBar = document.querySelector(".navigation");
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const load = document.querySelector(".load");

// scroll events
let start = 0;
window.addEventListener("scroll", function (e) {
  let lastYChange = window.pageYOffset;

  if (lastYChange > start) {
    navigationBar.style.marginTop = "-20rem";
    // change start position
    start = lastYChange;
  } else if (lastYChange < start) {
    start = lastYChange;

    navigationBar.style.marginTop = "0rem";
  }
});

// intersection observers

const options = {
  root: null,
  rootMargin: "-0px",
  threshold: 1,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {});
}, options);

observer.observe(document.querySelector(".header__name"));

// form obeservers
const submit = function (e) {
  e.preventDefault();

  // fetch url
  const url = "https://portfolio-app-maytic.herokuapp.com/mail";

  let emailObj = {
    from: email.value,
    name: "portfolio website",
    text: message.value,
  };
  // headers
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa("testUser" + ":" + "test123"));
  headers.set("Accept", "application/json, text/plain, */*");
  headers.set("Content-Type", "application/json;charset=utf-8");

  console.log(JSON.stringify(emailObj));
  // fetch data from url
  load.style.display = "flex";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(emailObj),
    headers: headers,
  }).then((response) => response.json());
};

form.addEventListener("submit", submit);
