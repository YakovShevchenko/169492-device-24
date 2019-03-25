var link = document.querySelector(".btn-popup");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");        
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("active");

  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }

});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("active");
  popup.classList.remove("error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }            
  }        
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
      popup.classList.remove("error");
    }
  }
});

var mapLink = document.querySelector(".map-btn");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("active");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("active");
});

window.addEventListener("keydown", function (evt) {        
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("active")) {
      mapPopup.classList.remove("active");
    }
  }
});