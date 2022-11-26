// 畫面
const menu = document.querySelector("#menu");
function toggleMenu(state){
  if(state){
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}


let loggedin = JSON.parse(localStorage.getItem("token"));
let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
let userId = JSON.parse(localStorage.getItem("userId"));

if(loggedin){
  // console.log(loggedin)
  document.querySelector("#link_member").classList.remove("hidden")
  document.querySelector("#link_login").classList.add("hidden")
  document.querySelector("#link_logout").classList.remove("hidden")

  if(isAdmin){
  // console.log(isAdmin)
  document.querySelector("#link_admin").classList.remove("hidden")
}
}

document.querySelector("#link_logout").addEventListener("click",function(){
  localStorage.removeItem("token")
  localStorage.removeItem("isAdmin")
  localStorage.removeItem("userId")
  alert("登出成功")
  window.location.assign("index.html");
})