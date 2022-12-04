document.querySelector(".testBtn").addEventListener('click', function(e){
  e.target.classList.add("bg-red-700")
})

let materialsData =[];
let materialsCategory = {
  "全部":"slate-700",
  "頂輪":"purple-700",
  "眉心輪":"indigo-700",
  "喉輪":"sky-700",
  "心輪":"lime-700",
  "臍輪":"yellow-700",
  "腹輪":"orange-700",
  "海底輪":"red-700",
  "隔珠":"slate-400"
};
document.querySelector("#materialsCategories").addEventListener('click', function(e){
  if(e.target.dataset.category){
    getMaterialsData(e.target.dataset.category)
  }
})
let currentCategory='全部'
function getMaterialsData(category){
  axios.get("http://localhost:3000/materials")
  .then((res)=>{
    renderMaterialsData(res.data,category)
    materialsData = res.data
    document.querySelector(`[data-category='${currentCategory}']`).classList.toggle(`bg-${materialsCategory[currentCategory]}`)
    console.log(currentCategory)
    currentCategory = category;
    console.log(currentCategory)
    document.querySelector(`[data-category='${currentCategory}']`).classList.toggle(`bg-${materialsCategory[currentCategory]}`)
    
  })
  .catch((err)=>{
    console.log(err)
  })
}
function renderMaterialsData(data,category){
  let filteredData=[];
  if(category=="全部"){
    filteredData = data;
  }
  else{
  filteredData = data.filter((item)=>{
    return item.chakra.includes(category)
  })
}
  let str = '';
  filteredData.forEach(function(item){
    let btns = '';
    item.bead.forEach(function(i){
      btns+=`
      <button type="button" class="px-2 py-1 rounded bg-slate-700 mr-1 text-white hover:bg-slate-400 text-sm" data-size="${i[0]}" data-price="${i[1]}" data-bead="${item.id}">
      ${i[0]}mm
      </button>
      `
    })
    str+= `
    <li class=" flex p-3 rounded  hover:shadow-lg bg-neutral-50 mr-2 lg:mr-0 lg:mb-2">
          <div class="flex flex-col w-full">
            <h3 class="font-bold text-md">${item.name}</h3>
            <p class="text-xs">${item.description}</p>
            <div class="flex mt-auto">
              ${btns}
            </div>            
          </div>
          <div class="w-40 ml-1 bg-cover bg-center" style="background-image:url('/assets/images/crystals/${item.image}')"></div>
        </li>
    `
  })
  document.querySelector(".beads-list").innerHTML = str
}
const category = document.querySelector("#category_select");
category.addEventListener("change", function(){
  getMaterialsData(category.value)
})

// 新增珠子 
document.querySelector(".beads-list").addEventListener("click",function(e){
  if(e.target.dataset.bead){
    let id = e.target.dataset.bead;
    addBeed(materialsData[id-1].name, materialsData[id-1].color, e.target.dataset.size, e.target.dataset.price)
  }
})

getMaterialsData("全部")

// render串珠
let beeds = [];
let perimeter = 130;
const pi = 3.1416;
let radius = `${perimeter/(2*pi)*4}px`; 
let rotate =  -90;
let prevSize = 0;
let totalLength = 0;
let totalPrice = 200;
let str = '';
let dragged = ''

const list = document.querySelector('.list');

function init(){
  rotate =  -90;
  prevSize = 0;
  totalLength = 0;
  totalPrice = 200;
  str = '';
  dragged = '';
  
  // 產生 li nodes
  for(let i=0; i<beeds.length;i++){
  str +=`<li class='beed' draggable="true" data-type="" data-num="${i}"></div></li>`
}
document.querySelector('.list').innerHTML = str;

  
  // nodes 的樣式
beeds.forEach(function(item, index){
  rotate += (prevSize + item.size)/2*360/perimeter;
  document.querySelector(`li.beed:nth-of-type(${index+1})`).style.cssText = `
    transform: rotate(${rotate}deg) translate(${radius}) rotate(${-rotate}deg); 
    width: ${item.size * 4}px; 
    height: ${item.size * 4}px; 
    background: ${item.color};
    background-size: cover;
    background-position: center center;
    `;
    document.querySelector(`li.beed:nth-of-type(${index+1})`).setAttribute('data-type', `${item.name}`)
  prevSize = item.size;
  totalLength += item.size;
  totalPrice += item.price
})

document.querySelector(".totalLength").innerHTML = `${totalLength /10 } cm`
document.querySelector(".totalPrice").innerHTML = `$${totalPrice}`

}

function allowDrop(e) {
  e.preventDefault();
}

function addBeed(name, color, size, price){
  if(totalLength + Number(size) <=200){
    beeds.push({name: name,color:color,size: Number(size), price: Number(price)});
    totalLength += Number(size);
    totalPrice += Number(price);
    
    if(totalLength > 130){
      perimeter = totalLength;
      radius = `${perimeter/(2*pi)*4}px`
    }
    init();
  } else {
    alert('上限為20cm')
  }
}

  function deleteBead(dragged){
    totalLength -= beeds[dragged].size
    totalPrice -= beeds[dragged].price
    
    if(totalLength > 130){
      perimeter = totalLength;
    } else {
      perimeter = 130
    }
    radius = `${perimeter/(2*pi)*4}px`
    beeds.splice(dragged,1);

    init();    
  } 



list.addEventListener('dragstart', dragStart);

function dragStart(e) { e.dataTransfer.setData('text/plain', e.target.id);
       setTimeout(() => {
        e.target.classList.add('hidden');
         dragged = e.target.dataset.num
    }, 0);
}


window.addEventListener('dragend', function(){
    document.querySelector(`[data-num='${dragged}']`).classList.remove('hidden');
});

document.querySelector('.workplace').addEventListener('drop', function(e){
  e.preventDefault();
  if(e.target.id == "trash" || e.target.parentNode.id=="trash"){
    deleteBead(dragged);
  }
  else if(e.target.dataset.num){
    const element = beeds.splice(dragged, 1)[0]
    beeds.splice(e.target.dataset.num, 0, element)
    init();
  } 
})


list.addEventListener('mouseover', function(e){
  document.querySelector(".currentBead").innerHTML = e.target.dataset.type;
});
list.addEventListener('mouseleave', function(e){
  document.querySelector(".currentBead").innerHTML = '';
});

document.querySelector("#trash").addEventListener("dragover", function(e){
  e.preventDefault();
  e.target.style.color = '#A00'
})
document.querySelector("#trash").addEventListener("dragleave", function(e){
  e.preventDefault();
  e.target.style.color = '#000'
})


init();

function deleteDesign(){
  beeds = [];
  perimeter = 130;
  radius = `${perimeter/(2*pi)*4}px`
  init()
}

function addToCart(){

  if(beeds.length>0){
    alert('設計已放入購物車');
    let array=[];
    beeds.forEach(function(item){
      array.push([item.name,item.size])
    })

    let obj = {
      "price":totalPrice,
      "size":totalLength,
      "beads":array,
    }

    if(localStorage.getItem("cart")){
      let cart = JSON.parse(localStorage.getItem("cart"))
      cart.push(obj)
      localStorage.setItem("cart",JSON.stringify(cart))
    } else {
      localStorage.setItem("cart",JSON.stringify([obj]))
    }
    beeds = [];
    perimeter = 130;
    radius = `${perimeter/(2*pi)*4}px`
    init()
    window.location.assign("cart.html")
  } else {
    alert("還沒有設計喔!")
  }

}



// https://tso1158687.github.io/blog/2019/03/10/detect-mobile-device/
function isMobileDevice() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
    return isMobileDevice
}

if(isMobileDevice()){
  document.querySelector("#trash").classList.add("hidden")
}