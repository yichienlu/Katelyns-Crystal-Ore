// 畫面
const menu = document.querySelector("#menu");
function toggleMenu(state){
  if(state){
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}




// // 水平滾動
// (function(){
//     init();
//     var g_containerInViewport;
//     function init(){
//         setStickyContainersSize();
//         bindEvents();
//     }
//     function bindEvents(){
//         window.addEventListener("wheel", wheelHandler);        
//     }
//     function setStickyContainersSize(){
//         document.querySelectorAll('.sticky-container').forEach(function(container){
//             const stikyContainerHeight = container.querySelector('main').scrollWidth;
//             const stikyContainerHeight2 = container.querySelector('section.v').scrollHeight;
//             container.setAttribute('style', `height:${stikyContainerHeight}px`); //高度還要再試過
//         });
//     }
//     function isElementInViewport (el) {
//         const rect = el.getBoundingClientRect();
//         return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
//     }
//     function wheelHandler(evt){
//         const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
//             return isElementInViewport(container);
//         })[0];
//         if(!containerInViewPort){
//             return;
//         }
//         var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
//         var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
//         let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//         if(g_canScrollHorizontally){
//             containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
//         }
//     }
// })();

// //designs
const design_swiper = new Swiper('.design-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor:true,
  speed:2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 48
    },
  },
});


// test



// 計算結果

// (function () {
// 'use strict'
// const forms = document.querySelectorAll('.needs-validation')
// Array.from(forms)
//   .forEach(function (form) {
//     form.addEventListener('testSubmit', function (event) {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()

// const inputs = document.querySelectorAll("input");
// let crown = 0;
// let eye = 0;
// let throat = 0;
// let heart = 0;
// let plexus = 0;
// let sacral = 0;
// let root = 0;

// function getScores() {
//     inputs.forEach(function(item){
//         if(item.checked){
//             switch (item.name.substring(0,1)) {
//                 case "c": crown += parseInt(item.value); break;
//                 case "e": eye += parseInt(item.value); break;
//                 case "t": throat += parseInt(item.value); break;
//                 case "h": heart += parseInt(item.value); break;
//                 case "p": plexus += parseInt(item.value); break;
//                 case "s": sacral += parseInt(item.value); break;
//                 case "r": root += parseInt(item.value); break;	                    
//             }
//         }
//     })
// }

// function showScores() {
//     document.querySelector("#c-score").innerHTML = crown;
//     document.querySelector("#e-score").innerHTML = eye;
//     document.querySelector("#t-score").innerHTML = throat;
//     document.querySelector("#h-score").innerHTML = heart;
//     document.querySelector("#p-score").innerHTML = plexus;
//     document.querySelector("#s-score").innerHTML = sacral;
//     document.querySelector("#r-score").innerHTML = root;        
//     document.querySelector("#results").classList.remove("hidden");
// }

// function createCharts() {
// 	let total = 28;
// 	document.querySelector("#c-chart").style.width = (crown / total * 100) + "%";
// 	document.querySelector("#e-chart").style.width = (eye / total * 100) + "%";
// 	document.querySelector("#t-chart").style.width = (throat / total * 100) + "%";
// 	document.querySelector("#h-chart").style.width = (heart / total * 100) + "%";
// 	document.querySelector("#p-chart").style.width = (plexus / total * 100) + "%";
// 	document.querySelector("#s-chart").style.width = (sacral / total * 100) + "%";
// 	document.querySelector("#r-chart").style.width = (root / total * 100) + "%";
// }
// document.querySelector("#testReset").onclick = function(e) { 
//   e.preventDefault();
//     crown = eye = throat = heart = plexus = sacral = root = 0;
// 	showScores();
//     createCharts();
//     Array.prototype.forEach.call(inputs, function(i) {
//         i.checked = false
//     });
//     document.querySelector("#results").classList.add("hidden");
// }

// document.querySelector("#testSubmit").onclick = function(e) {
//   e.preventDefault();
//     crown = eye = throat = heart = plexus = sacral = root = 0;
//     getScores();
//     showScores();
//     createCharts();
// };


// // 串珠

// let beeds = [
//   {
//     name: '粉晶',
//     color: '#FBB5',
//     size: 8,
//     price: 40,
//   },
//   {
//     name: '海藍寶',
//     color: '#9AF9',
//     size: 6,
//     price: 30,
//   },
//   {
//     name: '海藍寶',
//     color: '#00A9',
//     size: 6,
//     price: 30,
//   },
//   {
//     name: '粉晶',
//     color: '#A00',
//     size: 8,
//     price: 40,
//   },
//     {
//     name: '粉晶',
//     color: '#A00',
//     size: 8,
//     price: 40,
//   },
//   {
//     name: '粉晶',
//     color: '#00A',
//     size: 6,
//     price: 30,
//   },
//   {
//     name: '粉晶',
//     color: '#00A9',
//     size: 10,
//     price: 50,
//   },
//   {
//     name: '粉晶',
//     color: 'url("/assets/images/crystals/_紅紋石.png")',
//     size: 10,
//     price: 50,
//   },
//   {
//     name: '粉晶',
//     color: '#00A',
//     size: 10,
//     price: 50,
//   },
//   {
//     name: '粉晶',
//     color: '#0AA',
//     size: 5,
//     price: 25,
//   },
//   {
//     name: '白水晶',
//     color: '#FFF5',
//     size: 10,
//     price: 50,
//   },
//   {
//     name: '粉晶',
//     color: '#0AA',
//     size: 5,
//     price: 25,
//   },
//   {
//     name: '粉晶',
//     color: '#00A',
//     size: 10,
//     price: 50,
//   },
// ];

// let perimeter = 130;
// const pi = 3.1416;
// let radius = `${perimeter/(2*pi)*4}px`; 
// let rotate =  -90;
// let prevSize = 0;
// let totalLength = 0;
// let totalPrice = 200;
// let str = '';
// let dragged = ''

// const list = document.querySelector('.list');


// function init(){
//   rotate =  -90;
//   prevSize = 0;
//   totalLength = 0;
//   totalPrice = 200;
//   str = '';
//   dragged = '';
  
//   // 產生 li nodes
//   for(let i=0; i<beeds.length;i++){
//   str +=`<li class='beed' draggable="true" data-type="" data-num="${i}"></div></li>`
// }
// document.querySelector('.list').innerHTML = str;

  
//   // nodes 的樣式
// beeds.forEach(function(item, index){
//   rotate += (prevSize + item.size)/2*360/perimeter;
//   document.querySelector(`li.beed:nth-of-type(${index+1})`).style.cssText = `
//     transform: rotate(${rotate}deg) translate(${radius}) rotate(${-rotate}deg); 
//     width: ${item.size * 4}px; 
//     height: ${item.size * 4}px; 
//     background: ${item.color};
//     background-size: cover;
//     background-position: center center;
//     `;
//     document.querySelector(`li.beed:nth-of-type(${index+1})`).setAttribute('data-type', `${item.name}`)
//   prevSize = item.size;
//   totalLength += item.size;
//   totalPrice += item.price
// })

// document.querySelector(".totalLength").innerHTML = `${totalLength /10 } cm`
// document.querySelector(".totalPrice").innerHTML = `$${totalPrice}`

// }

// function allowDrop(e) {
//   e.preventDefault();
// }

// function addBeed(name, color, size, price){
//   if(totalLength + size <=200){
//     beeds.push({name: name,color:color,size: size, price: price});
//     totalLength += size;
//     totalPrice += price;
    
//     if(totalLength > 130){
//       perimeter = totalLength;
//       radius = `${perimeter/(2*pi)*4}px`
//     }
//     init();
//   } else {
//     alert('上限為20cm')
//   }
// }

//   function deleteBead(dragged){
//     totalLength -= beeds[dragged].size
//     totalPrice -= beeds[dragged].price
    
//     if(totalLength > 130){
//       perimeter = totalLength;
//     } else {
//       perimeter = 130
//     }
//     radius = `${perimeter/(2*pi)*4}px`
//     beeds.splice(dragged,1);

//     init();    
//   } 



// list.addEventListener('dragstart', dragStart);
// // list.addEventListener('touchmove', dragStart);

// function dragStart(e) { e.dataTransfer.setData('text/plain', e.target.id);
//        setTimeout(() => {
//         e.target.classList.add('hidden');
//          dragged = e.target.dataset.num
//     }, 0);
// }


// window.addEventListener('dragend', function(){
//     document.querySelector(`[data-num='${dragged}']`).classList.remove('hidden');
// });
// // window.addEventListener('touchend', function(){
// //     document.querySelector(`[data-num='${dragged}']`).classList.remove('hidden');
// // });

// document.querySelector('.workplace').addEventListener('drop', function(e){
//   e.preventDefault();
//   if(e.target.id == "trash"){
//     deleteBead(dragged);
//   }
//   else if(e.target.dataset.num){
//     const element = beeds.splice(dragged, 1)[0]
//     beeds.splice(e.target.dataset.num, 0, element)
//     init();
//   } 
// })


// list.addEventListener('mouseover', function(e){
//   document.querySelector(".currentBead").innerHTML = e.target.dataset.type;
// });
// list.addEventListener('mouseleave', function(e){
//   document.querySelector(".currentBead").innerHTML = '';
// });

// // document.querySelector("#trash").addEventListener("dragover", function(e){
// //   e.preventDefault();
// //   e.target.style.color = '#A00'
// // })
// // document.querySelector("#trash").addEventListener("dragleave", function(e){
// //   e.preventDefault();
// //   e.target.style.color = '#000'
// // })


// init();


// function deleteDesign(){
//   beeds = [];
//   perimeter = 130;
//   radius = `${perimeter/(2*pi)*4}px`
//   init()
// }

// function finishDesign(){
//   alert('設計已送出製作');
//   beeds = [];
//   perimeter = 130;
//   radius = `${perimeter/(2*pi)*4}px`
//   init()
// }



// // https://tso1158687.github.io/blog/2019/03/10/detect-mobile-device/
// function isMobileDevice() {
//     const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
//     let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
//     return isMobileDevice
// }

// if(isMobileDevice()){
//   document.querySelector("#trash").classList.add("hidden")
// }