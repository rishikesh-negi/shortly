const urlForm = document.getElementById("link-form");
const linkInput = document.getElementById("base-url");
const errMsg = document.getElementById("error-text");

urlForm.addEventListener("submit", formSubmit);

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();
  if (linkInput.value === "") {
    errMsg.innerHTML = "Please add a base URL";
    linkInput.classList.add("border-red");
  } else if (!validURL(linkInput.value)) {
    errMsg.innerHTML = "Invalid input! Please enter a valid url";
  } else {
    errMsg.innerHTML = "";
    linkInput.classList.remove("border-red");
    alert("Success!");
  }
}

// MOBILE MENU:
const menuBtn = document.getElementById("menu-btn");
const mobMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", openState);

function openState() {
  menuBtn.classList.toggle("open");
  mobMenu.classList.toggle("menu-close");
  mobMenu.classList.toggle("menu-open");
}
