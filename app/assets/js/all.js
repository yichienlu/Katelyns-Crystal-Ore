// let base_URL = "https://json-server-vercel-beta.vercel.app/"
// let base_URL = "http://localhost:3000"
let base_URL = "https://katelyns-crystal-ore.onrender.com"

window.addEventListener("load", function(event) {
  this.setTimeout(()=>{
    this.document.querySelector("#loader").classList.add("hidden")
  }, 1500)
});


// 畫面
const menu = document.querySelector("#menu");
function toggleMenu(state) {
  if (state) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}


let loggedIn = localStorage.getItem("token");
let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
let userId = JSON.parse(localStorage.getItem("userId"));
// console.log(localStorage.getItem("token"))

if (loggedIn) {
  // console.log(loggedIn)
  document.querySelector("#link_member").classList.remove("hidden")
  document.querySelector("#link_login").classList.add("hidden")
  document.querySelector("#link_logout").classList.remove("hidden")

  if (isAdmin) {
    document.querySelector("#link_admin").classList.remove("hidden")
  }
}

document.querySelector("#link_logout").addEventListener("click", function (e) {
  e.preventDefault()
  localStorage.removeItem("token")
  localStorage.removeItem("isAdmin")
  localStorage.removeItem("userId")
  localStorage.removeItem("email")
  // alert("登出成功")
  Swal.fire({
    // icon: 'success',
    title: '登出成功',
    text: '期待您的下次蒞臨',
    imageUrl: './assets/images/index/step_03.png',
    imageWidth: 400,
    imageHeight: 200,
    showConfirmButton: false,
    timer: 1500
  }).then(()=>{
    window.location.assign("index.html");
  })

})


