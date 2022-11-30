"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 畫面
var menu = document.querySelector("#menu");

function toggleMenu(state) {
  if (state) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

var loggedIn = localStorage.getItem("token");
var isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
var userId = JSON.parse(localStorage.getItem("userId")); // console.log(localStorage.getItem("token"))

if (loggedIn) {
  // console.log(loggedIn)
  document.querySelector("#link_member").classList.remove("hidden");
  document.querySelector("#link_login").classList.add("hidden");
  document.querySelector("#link_logout").classList.remove("hidden");

  if (isAdmin) {
    console.log(_typeof(isAdmin));
    document.querySelector("#link_admin").classList.remove("hidden");
  }
}

document.querySelector("#link_logout").addEventListener("click", function () {
  localStorage.removeItem("token");
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("userId");
  alert("登出成功");
  window.location.assign("index.html");
});
//# sourceMappingURL=all.js.map
